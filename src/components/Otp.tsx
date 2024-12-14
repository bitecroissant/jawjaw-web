import { defineComponent, onMounted, ref } from 'vue';
import { Loading } from './Loading';
import { ajax } from '../shared/ajax';
import s from './Otp.module.scss';
import { useRoute, useRouter } from 'vue-router';

const OTP_LEN = 5
// One time password
export const Otp = defineComponent({
  setup: () => {
    const refCodeInputs = ref<HTMLInputElement[]>([])
    const refLoading = ref(false)
    const refLoadingText = ref<HTMLParagraphElement | null>(null)
    const refValidateFail = ref(false)
    const refValidateSuccess = ref(false)
    const router = useRouter()
    const route = useRoute()

    const _setOneInputValue = (index: number, val: string) => {
      refCodeInputs.value[index].value = val.toUpperCase()
    }

    const _resetAllInputs = () => {
      refCodeInputs.value.forEach((v, i) => {
        if (i === 0) { v.focus() }
        v.value = ''
      })
    }

    const _getCodes = () => {
      return refCodeInputs.value.map(i => i.value).join('').toLowerCase()
    }

    const _resetLoading = () => {
      refLoading.value = true
      refValidateSuccess.value = false
      refValidateFail.value = false
    }

    const _setSucc = () => {
      refLoading.value = false
      refValidateSuccess.value = true
      setTimeout(() => {
        const returnTo = route.query.return_to?.toString()
        router.push(returnTo || '/')
      }, 800)
    }

    const _setFail = () => {
      refLoading.value = false
      refValidateFail.value = true
      _resetAllInputs()
    }

    const handleCodeInput = (e: Event, index: number) => {
      const t = (e.target as HTMLInputElement)
      if ((e as InputEvent).inputType === "insertCompositionText") {
        return;
      }
      t.value = t.value.toUpperCase().charAt(0);
      if (refCodeInputs.value[index] && refCodeInputs.value[index].value) {
        if (index < OTP_LEN - 1) {
          setTimeout(() => {
            refCodeInputs.value[index + 1].focus()
          }, 16)
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
        if (refCodeInputs.value[index].value) {
          _setOneInputValue(index, '')
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

    const submit = async () => {
      console.log('submit', _getCodes())
      refLoadingText.value?.focus()
      _resetLoading()
      refLoading.value = true
      try {
        const response = (await ajax.post<UserTokens>('/sessions', { token: _getCodes() })).data
        const jwt = response.jwt
        localStorage.setItem('jwt', jwt)
        _setSucc()
      } catch (err) {
        _setFail()
      }
    }

    onMounted(() => {
      refCodeInputs.value[0].focus()
    })

    return () => (
      <>
        <div mt-80px pl-20px text-16px>
          请输入你的口令
        </div>
        <div mt-24px flex justify-center>
          {Array.from({ length: OTP_LEN }).map((_, index) => {
            return <input ref={(el: any) => refCodeInputs.value[index] = el} key={index}
              type="text" maxlength="1" pattern="[A-Za-z0-9]*"
              onInput={(e) => handleCodeInput(e, index)}
              onKeydown={(e) => handlekeydown(e, index)}
              onFocus={handleFocus}
              onPaste={handlePaste}
              disabled={refLoading.value}
              class={[s.otpInput, refLoading.value ? 'invalid' : '']}
            />
          })}

        </div>
        <button ref={refLoadingText} class={s.txtBtn}>
          {refLoading.value}
          {
            refLoading.value ? (<><span class={s.txtBtnSpan}><Loading /></span> <span class={s.txtBtnSpan} >验证中</span></>)
              : ''
          }
          {
            refValidateSuccess.value ? (<><span class={s.txtBtnSpan} >✅</span> <span class={[s.txtBtnSpan, s.succ]} >登录成功，跳转中</span></>)
              : ''
          }
          {
            refValidateFail.value ? (<><span class={s.txtBtnSpan} >🙅🏻</span> <span class={[s.txtBtnSpan, s.fail]} >口令错误，禁止登陆</span></>)
              : ''
          }
        </button>
      </>
    )
  }
})