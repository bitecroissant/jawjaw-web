import { defineComponent, ref, Teleport, Transition } from 'vue';
import s from './Modal.module.scss';
import { onClickOutside } from '@vueuse/core';
import { Icon } from './Icon';
export const Modal = defineComponent({
  props: {
    title: String,
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
          <div v-show={props.modalVsible} class={s.modalBg} h-100vh>
            <div ref={refModal} class={s.modal}>
              <header class={s.header} py-4px px-8px>
                <span class={s.title}>{props.title}</span>
                <span class={s.gap}></span>
                <span onClick={() => props.close?.()}>
                  <Icon name="close" fill='#fff'></Icon>
                </span>
              </header>
              <div p-24px>
                {slots.default?.()}
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>
    )
  }
})