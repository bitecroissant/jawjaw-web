import { defineComponent, PropType, ref, watch } from 'vue';
import s from './EventIconSelector.module.scss';
import { iconNameList } from '../shared/iconNameList';
import { Icon } from '../shared/Icon';
import { useAjax } from '../shared/ajax';

const DEFAULT_ICON_COLOR = '#2084F8'

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

    const onPickColor = (ev: Event) => {
      const color = (ev.target as HTMLInputElement).value

      refLocalForm.value = { ...refLocalForm.value, iconColor: color }
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
                  <Icon fill={refLocalForm.value.iconColor || DEFAULT_ICON_COLOR} name={name}
                    class={s.icon}></Icon>
                </div>
              )
            })
          }
        </div>

        <div mt-16px flex justify-center items-center>
          <input 
            value={refLocalForm.value.iconColor || DEFAULT_ICON_COLOR}
            onChange={onPickColor}
            class={s.colorPicker} type="color" />
        </div>

        <div class={s.actionWrapper}>
          <button onClick={submit} disabled={refLoading.value} class={[s.button, s.buttonPrimary]}>
            提交 {refLoading.value ? (
              <Icon name="spinner" text-18px fill-white ml-8px class={s.spin} />
            ) : null}
          </button>
        </div>
        
      </div>
    )
  }
})