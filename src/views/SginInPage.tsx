import { defineComponent } from 'vue';
import { Otp } from '../components/Otp';
export const SignInPage = defineComponent({
  setup: () => {
    return () => (
      <div>
        登录 page

        <br />

        <Otp />
      </div>
    )
  }
})