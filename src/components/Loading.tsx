import { defineComponent } from 'vue';
import s from './Loading.module.scss';

export const Loading = defineComponent({
  setup: () => {
    return () => (
      <div class={[s.loading, s.black]}></div>
    )
  }
})