import { defineComponent, ref } from 'vue';

const OTP_LEN = 5
// One time password
export const Otp = defineComponent({
  setup: () => {
    const refCodeInputs = ref<HTMLInputElement[]>([])
    const refLoading = ref(false)
    const refLoadingText = ref<HTMLParagraphElement | null>(null)

    const _setOneInputValue = (index: number, val: string) => {
      refCodeInputs.value[index].value = val.toUpperCase()
    }

    const _getCodes = () => {
      return refCodeInputs.value.map(i => i.value).join('').toLowerCase()
    }

    const handleCodeInput = (e: Event, index: number) => {
      const t = (e.target as HTMLInputElement)
      t.value = t.value.toUpperCase()
      if (refCodeInputs.value[index] && refCodeInputs.value[index].value) {
        if (index < OTP_LEN - 1) {
          refCodeInputs.value[index + 1].focus()
        }
      }
      if (_getCodes().trim().length === OTP_LEN) {
        submit()
      }
    }

    const handleFocus = (e: FocusEvent) => {
      (e.target as HTMLInputElement)?.select()
    }

    const handlekeydown = (e: KeyboardEvent, index: number) => {
      const key = e.key
      if (key === 'Delete' || key === 'Backspace') {
        if (index === OTP_LEN - 1 && refCodeInputs.value[OTP_LEN - 1].value) {
          _setOneInputValue(OTP_LEN - 1, '')
          refCodeInputs.value[OTP_LEN - 1].focus()
        } else if (index > 0) {
          _setOneInputValue(index - 1, '')
          refCodeInputs.value[index - 1].focus()
        }
      }
    }

    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault()
      const pasteText = e.clipboardData?.getData('text') ?? ''
      if (pasteText.length !== OTP_LEN) { return }
      const formattedPastText = pasteText.slice(0, OTP_LEN)
      refCodeInputs.value.forEach((_input, index) => {
        _setOneInputValue(index, formattedPastText[index])
      })
      submit()
    }

    const submit = () => {
      console.log('submit', _getCodes())
      refLoadingText.value?.focus()
      refLoading.value = true
      setTimeout(() => {
        refLoading.value = false
      })
    }

    return () => (
      <>
        <div class="tmp-wrapper">
          {Array.from({ length: OTP_LEN }).map((_, index) => {
            return <input ref={(el: any) => refCodeInputs.value[index] = el} key={index}
              type="text" class="otp-input" maxlength="1"
              onInput={(e) => handleCodeInput(e, index)}
              onKeydown={(e) => handlekeydown(e, index)}
              onFocus={handleFocus}
              onPaste={handlePaste}
            />
          })}

          <button ref={refLoadingText} class="txt-btn">123</button>
        </div>
      </>
    )
  }
})