import { defineComponent, PropType } from 'vue';
import { iconNameList } from './iconNameList';
import s from './Icon.module.scss';

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<typeof iconNameList[number]>,
    },
    fill: String
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon} fill={props.fill}>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    )
  }
})