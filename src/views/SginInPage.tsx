import { defineComponent } from 'vue';
import { Otp } from '../components/Otp';
export const SignInPage = defineComponent({
  setup: () => {
    return () => (
      <div class="signin-page">
        <header class="signin-header">欢迎登陆昭昭</header>
        <br />
        <Otp />
        <div class="slogan-wrapper">
          <div class="page-loading-wrapper-bottom-section-top"></div>
          <p class="page-loading-wrapper-bottom-section-title">昭 昭 如 愿 · 岁 岁 安 澜</p>
          <p class="page-loading-wrapper-bottom-section-context">昭昭笔记 ，记录人生大小事。</p>
        </div>
        <div class="bottom-bg"></div>
      </div>
    )
  }
})