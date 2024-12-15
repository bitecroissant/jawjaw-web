import { defineComponent, PropType, ref, watch } from 'vue';
import s from './EventIconSelector.module.scss';
import { iconNameList } from '../shared/iconNameList';
import { Icon } from '../shared/Icon';
export const EventIconSelector = defineComponent({
  props: {
    initialVal: {
      type: Object as PropType<Partial<EventDatesTypes>>
    }
  },
  setup: (props, _context) => {
    const refLocalForm = ref({ ...props.initialVal })
    const refLoading = ref(true)

    watch(() => props.initialVal, (newEventDate) => {
      console.log('run once')
      console.log(newEventDate)
      refLocalForm.value = ({ ...newEventDate })
    })
    const x = (name: string) => {
      refLocalForm.value = ({ ...refLocalForm.value, iconName: name })
    }
    return () => (
      <div class={s.wrapper}>
        <div class={s.iconListWrapper}>
          {
            iconNameList.map(name => {
              return (
                <div 
                onClick={() => x(name)}
                class={[s.iconWrapper, name === refLocalForm.value.iconName ? s.selected : '']}>
                  <Icon fill={`#2084F8`} name={name}
                    class={s.icon}></Icon>
                </div>
              )
            })
          }
        </div>
        <div class={s.actionWrapper}>
          <button disabled={refLoading.value} class={[s.button, s.buttonPrimary]}>
            提交 { refLoading ? (
              <Icon name="spinner" text-18px fill-white ml-8px class={s.spin} />
            ) : null }
          </button>
        </div>
        <div class={s.tooltip}>
        🍗 图标颜色定义开发中，投喂鸡腿加速
        </div>
      </div>
    )
  }
})