import { defineComponent, onMounted, reactive, ref } from 'vue';
import s from "./Home.module.scss";
import Typed from 'typed.js';
import { Icon } from '../shared/Icon';
import { Modal } from '../shared/Modal';
import { useAjax } from '../shared/ajax';
import { time } from '../shared/time';
import { EventDateEditForm } from '../components/EventDateEditForm';
import { EventIconSelector } from '../components/EventIconSelector';

const DEFAULT_ICON_COLOR = '#2084F8'

export const Home = defineComponent({
  setup: () => {
    const { get } = useAjax()
    const todayPoetry = reactive({ line: '🧨 昭昭如愿，岁岁安澜' })
    const refEventDates = ref<EventDatesTypes[]>([])
    const refEventDatesLoading = ref(true)
    const refTextWrapper = ref(null)
    const refChangeIconModalVisible = ref(false)
    const refEditModalVisible = ref(false)
    const refCurrentEditEvent = ref<EventDatesTypes | {}>({})

    const today = time()
    today.removeTime()

    const loadPoetry = async () => {
      const todayPoetryResult = (await get<PoetryLinesType>(`/poetry_line?showDate=${time().format()}`)).data
      todayPoetry.line = todayPoetryResult.line
      new Typed(refTextWrapper.value, {
        strings: [todayPoetry.line],
        typeSpeed: 20,
        onComplete: function (self) {
          // 打印完成后隐藏光标
          self.cursor.remove();
        }
      })
    }
    const loadEventDates = async () => {
      refEventDatesLoading.value = true
      const result = (await get<EventDatesTypes[]>('/event_dates')).data
      if (result && result.length > 0) {
        const filtered = result.filter(d => {
          return d.datesStatus === 'active' && d.group !== 'solar_term'
        }).sort((a, b) => {
          const timeA = time(a.happenAt);
          return timeA.isAfter(b.happenAt) ? -1 : 1;
        });
        refEventDates.value = filtered
      }

      refEventDatesLoading.value = false
    }
    onMounted(() => {
      loadPoetry()
      loadEventDates()
    });
    const onClickIcon = (ev: MouseEvent, ed: EventDatesTypes) => {
      ev.stopPropagation()
      refCurrentEditEvent.value = {
        ...ed
      }
      refChangeIconModalVisible.value = true
    }
    const onClickCard = (ev: MouseEvent, ed: EventDatesTypes) => {
      ev.preventDefault()
      refCurrentEditEvent.value = {
        ...ed
      }
      refEditModalVisible.value = true
    }
    return () => (
      <>
        <div class={s.homePage} h-100vh pt-20px >
          <div class={s.greetingTextWrapper} pl-32px>
            <h3 ref={refTextWrapper} data-glitch={todayPoetry.line} class={s.greetingText} >
              {todayPoetry.line}
            </h3>
          </div>
          {
            refEventDatesLoading.value
              ? (<div class={s.listLoadingWrapper}>
                <Icon name="spinner" class={s.loading} fill="#D4D4D4"></Icon>
              </div>)
              : (<div class={s.eventDateList} px-20px pb-200px>
                {refEventDates.value.map(ed => {
                  return (<div onClick={(ev) => { onClickCard(ev, ed) }} class={s.eventDateCard} py-18px m-y-18px>
                    <div class={s.eventDateCardIcon} ml-20px onClick={(ev) => { onClickIcon(ev, ed) }}>
                      <Icon name={ed.iconName || 'elephant'} w-44px h-44px fill={ed.iconColor || DEFAULT_ICON_COLOR}></Icon>
                    </div>
                    <div class={s.eventDateCardTitleAndDate} ml-12px>
                      <div class={s.eventDateCardTitle} text-16px>
                        {ed.eventName}{time(ed.happenAt).notBefore(today.date) ? '还要' : '过了'}
                      </div>
                      <div class={s.eventDateCardDate} text-14px>{ed.happenAt}</div>
                    </div>
                    <div class={s.eventDateCardDaysBetweenWrapper}>
                      <div class={s.eventDateCardDaysBetweenShadow}></div>
                      <div class={s.eventDateCardDaysBetween} text-32px>
                        {time(ed.happenAt).calcNaturalDaysBetween(time())}天
                      </div>
                    </div>
                    <div class={s.eventDateCardOperate} p-12px >
                    </div>
                  </div>)
                })}

              </div>)
          }
        </div>
        <Modal title="挑选图标"
          v-slots={{
            default: () => (<EventIconSelector
              initialVal={ refCurrentEditEvent.value as EventDatesTypes }
              loadEventDates={ loadEventDates }
              close={() => refChangeIconModalVisible.value = false}
            />)
          }}
          close={() => refChangeIconModalVisible.value = false} modalVsible={refChangeIconModalVisible.value}>
        </Modal>
        <Modal title="录入" v-slots={{
          default: () => (<EventDateEditForm
            initialVal={ refCurrentEditEvent.value as EventDatesTypes }
            loadEventDates={ loadEventDates }
            close={() => refEditModalVisible.value = false}
          />)
        }}
          close={() => refEditModalVisible.value = false} modalVsible={refEditModalVisible.value}>
        </Modal>
      </>
    )
  }
})