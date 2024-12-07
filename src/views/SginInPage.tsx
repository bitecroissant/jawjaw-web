import { defineComponent } from 'vue'
import { Otp } from '../components/Otp'
import s from './SignInPage.module.scss'

export const SignInPage = defineComponent({
  setup: () => {
    return () => (
      <div h-vhcheck flex flex-col relative min-h="500px"
        class={s.signinPage}>
        <header text-36px text-center mt-66px>欢迎登陆昭昭</header>
        <Otp />
        <div absolute left-0 w-100vw h-140px bottom="0" z-1
          bg-gradient-to-b from="#ffffff" to="#fc919c"></div>
        <div flex flex-1 flex-col justify-center items-center z-2>
          <div flex-1></div>
          <p text-24px>昭 昭 如 愿 · 岁 岁 安 澜</p>
          <p text-16px mt-20px mb-44px>昭昭笔记 ，记录人生大小事。</p>
        </div>
      </div>
    )
  }
})