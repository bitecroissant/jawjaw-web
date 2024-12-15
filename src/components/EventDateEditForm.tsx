import { defineComponent, PropType, ref, watch } from 'vue';
import s from './EventDateEditForm.module.scss';
import { time } from '../shared/time';
import { Icon } from '../shared/Icon';
export const EventDateEditForm = defineComponent({
  props: {
    initialVal: {
      type: Object as PropType<Partial<EventDatesTypes>>
    }
  },
  setup: (props, _context) => {
    const refLocalForm = ref({ ...props.initialVal, happenAt: time().format() })

    const refLoading = ref(true)

    const x = () => {
      console.log('hihi')
    }

    watch(() => props.initialVal, (newEventDate) => {
      console.log('run once')
      console.log(newEventDate)
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
            value={refLocalForm.value.happenAt}></input>
        </div>
        <div class={s.actionWrapper}>
          <button disabled={refLoading.value} onClick={x} class={[s.button, s.buttonPrimary]}>
            提交 { refLoading ? (
              <Icon name="spinner" text-18px fill-white ml-8px class={s.spin} />
            ) : null }
          </button>
        </div>
      </div>
    )
  }
})