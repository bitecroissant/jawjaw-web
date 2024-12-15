import { defineComponent, PropType, ref, watch } from 'vue';
import s from './EventDateEditForm.module.scss';
import { time } from '../shared/time';
import { Icon } from '../shared/Icon';
import { useAjax } from '../shared/ajax';
export const EventDateEditForm = defineComponent({
  props: {
    initialVal: {
      type: Object as PropType<EventDatesTypes>
    },
    loadEventDates: Function,
    close: Function,
  },
  setup: (props, _context) => {
    const { post } = useAjax()

    const refLocalForm = ref({ ...props.initialVal, happenAt: time().format() })

    const refLoading = ref(false)

    const onChangeDate = (ev: Event) => {
      const txt = (ev.target as HTMLInputElement).value
      if(time(txt).isInvalid()) {
        refLocalForm.value = { ...refLocalForm.value, happenAt: time(txt).format() }
      } else {
        alert('🐟 本鱼塘禁止炸鱼 --.')
      }
    }

    const createEvent = async (newEventDate: EventDatesTypes) => {
      try {
        newEventDate.id = newEventDate.id.toString()
        await post('/event_date', newEventDate)
        await props.loadEventDates?.()
      } catch (ex) {
      } finally {
        refLoading.value = false
        props.close?.()
      }
    }

    const onSubmit = () => {
      refLoading.value = true
      createEvent(refLocalForm.value as  EventDatesTypes)
    }

    watch(() => props.initialVal, (newEventDate) => {
      refLocalForm.value = ({ ...newEventDate, happenAt: time().format() })
    })

    return () => (
      <div class={s.wrapper}>
        <div class={s.formItem}>

          <label>分组</label>
          <input disabled placeholder='瓜、陆或田'
            value={refLocalForm.value.group}></input>
        </div>
        <div class={s.formItem}>
          <label>事情</label>
          <input disabled placeholder='理头发或换床单'
            value={refLocalForm.value.eventName}></input>
        </div>
        <div class={s.formItem}>
          <label>发生时间</label>
          <input placeholder='格式为: 2025-01-01'
            onChange={onChangeDate}
            value={refLocalForm.value.happenAt}></input>
        </div>
        <div class={s.actionWrapper}>
          <button disabled={refLoading.value} onClick={onSubmit} class={[s.button, s.buttonPrimary]}>
            提交 { refLoading.value ? (
              <Icon name="spinner" text-18px fill-white ml-8px class={s.spin} />
            ) : null }
          </button>
        </div>
      </div>
    )
  }
})