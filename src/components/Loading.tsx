import { defineComponent } from 'vue';
export const Loading = defineComponent({
  setup: () => {
    return () => (
      <div class="page-loading-wrapper-loading black small"></div>
    )
  }
})