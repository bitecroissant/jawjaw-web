import { defineComponent, PropType, ref, watch } from 'vue';
import s from './EventIconSelector.module.scss';
import { iconNameList } from '../shared/iconNameList';
import { Icon } from '../shared/Icon';
import { useAjax } from '../shared/ajax';
export const EventIconSelector = defineComponent({
  props: {
    initialVal: {
      type: Object as PropType<EventDatesTypes>,
      required: false
    },
    loadEventDates: Function,
    close: Function,
  },
  setup: (props, _context) => {
    const refLocalForm = ref({ ...props.initialVal })
    const refLoading = ref(false)

    const { patch } = useAjax()

    watch(() => props.initialVal, (newEventDate) => {
      refLocalForm.value = ({ ...newEventDate })
    })

    const changeIcon = (name: string) => {
      refLocalForm.value = ({ ...refLocalForm.value, iconName: name })
    }

    const updateEventDateIconName = async (newEventDate: EventDatesTypes) => {
      try {
        newEventDate.id = newEventDate.id.toString()
        await patch('/event_date', newEventDate)
        await props.loadEventDates?.()
      } catch (ex) {
      } finally {
        refLoading.value = false
        props.close?.()
      }
    }

    const submit = () => {
      refLoading.value = true
      updateEventDateIconName(refLocalForm.value as  EventDatesTypes)
    }

    return () => (
      <div class={s.wrapper}>
        <div class={s.iconListWrapper}>
          {
            iconNameList.map(name => {
              return (
                <div
                  onClick={() => changeIcon(name)}
                  class={[s.iconWrapper, name === refLocalForm.value.iconName ? s.selected : '']}>
                  <Icon fill={`#2084F8`} name={name}
                    class={s.icon}></Icon>
                </div>
              )
            })
          }
        </div>
        <div class={s.actionWrapper}>
          <button onClick={submit} disabled={refLoading.value} class={[s.button, s.buttonPrimary]}>
            提交 {refLoading.value ? (
              <Icon name="spinner" text-18px fill-white ml-8px class={s.spin} />
            ) : null}
          </button>
        </div>
        <div class={s.tooltip}>
          🍗 图标颜色定义开发中，投喂鸡腿加速
        </div>
      </div>
    )
  }
})