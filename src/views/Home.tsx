import { defineComponent, onMounted, reactive, ref } from 'vue';
import s from "./Home.module.scss";
import Typed from 'typed.js';
import { Icon } from '../shared/Icon';
import { Modal } from '../shared/Modal';
import { useAjax } from '../shared/ajax';
import { time } from '../shared/time';
import { EventDateEditForm } from '../components/EventDateEditForm';
export const Home = defineComponent({
  setup: () => {
    const { get } = useAjax()
    const pageData = reactive({ text: '🧨 昭昭如愿，岁岁安澜' })
    const refTextWrapper = ref(null)
    const refModal1Visible = ref(false)
    const refModal2Visible = ref(true)
    const refCurrentEditEvent = ref<Partial<EventDatesTypes>>({})

    onMounted(async () => {
      const todayPoetryResult = (await get<PoetryLinesType>(`/poetry_line?showDate=${time().format()}`)).data
      pageData.text = todayPoetryResult.line
      new Typed(refTextWrapper.value, {
        strings: [pageData.text],
        typeSpeed: 20,
        onComplete: function (self) {
          // 打印完成后隐藏光标
          self.cursor.remove();
        }
      })
    });
    const x = (ev: MouseEvent) => {
      ev.stopPropagation()
      console.log('hi')
      refModal2Visible.value = true
    }
    const y = (ev: MouseEvent) => {
      ev.preventDefault()
      refCurrentEditEvent.value = {group: (Math.random() * 1000).toString(),
         eventName: (Math.random() * 1000).toString() }
      refModal1Visible.value = true
    }
    return () => (
      <>
        <div class={s.homePage} h-vhcheck pt-20px >
          <div class={s.greetingTextWrapper} pl-32px>
            <h3 ref={refTextWrapper} data-glitch={pageData.text} class={s.greetingText} >
              {pageData.text}
            </h3>
          </div>
          <div class={s.eventDateList} px-20px pb-200px>
            <div onClick={(ev) => { y(ev) }} class={s.eventDateCard} py-18px m-y-18px>
              <div class={s.eventDateCardIcon} ml-20px onClick={(ev) => { x(ev) }}>
                <Icon name="wine" w-44px h-44px fill="#2084F8"></Icon>
              </div>
              <div class={s.eventDateCardTitleAndDate} ml-12px>
                <div class={s.eventDateCardTitle} text-16px>去迪士尼还要</div>
                <div class={s.eventDateCardDate} text-14px>2024-12-14</div>
              </div>
              <div class={s.eventDateCardDaysBetweenWrapper}>
                <div class={s.eventDateCardDaysBetweenShadow}></div>
                <div class={s.eventDateCardDaysBetween} text-32px>
                  20天
                </div>
              </div>
              <div class={s.eventDateCardOperate} p-12px >

              </div>
            </div>

          </div>
        </div>
        <Modal v-slots={{ default: () => (<div>11111111</div>) }}
          close={() => refModal1Visible.value = false} modalVsible={refModal1Visible.value}>
          <div>xxxxx</div>
        </Modal>
        <Modal title="录入" v-slots={{
          default: () => (<EventDateEditForm
            initialVal={
              {
                group: refCurrentEditEvent.value.group,
                eventName: refCurrentEditEvent.value.eventName
              }
            } />)
        }}
          close={() => refModal2Visible.value = false} modalVsible={refModal2Visible.value}>
        </Modal>
      </>
    )
  }
})