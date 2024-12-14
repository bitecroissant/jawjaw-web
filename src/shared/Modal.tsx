import { defineComponent, ref, Teleport, Transition } from 'vue';
import s from './Modal.module.scss';
import { onClickOutside } from '@vueuse/core';
export const Modal = defineComponent({
  props: {
    modalVsible: Boolean,
    close: Function
  },
  setup: (props, context) => {
    const {slots} = context
    const refModal = ref(null)
    onClickOutside(refModal, () => {
      props.close && props.close()
    })
    return () => (
      <Teleport to="#modal">
        <Transition enter-from-class={s.modalEnterFrom}
          enter-active-class={s.modalEnterActive}
          leave-to-class={s.modalLeaveTo}
          leave-active-class={s.modalLeaveActive}
        >
          <div v-show={props.modalVsible} class={s.modalBg} h-vhcheck>
            <div ref={refModal} class={s.modal}>
              {slots.default?.()}
            </div>
          </div>
        </Transition>
      </Teleport>
    )
  }
})