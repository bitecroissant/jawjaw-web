import { defineComponent } from "vue";
import { Otp } from "./components/Otp";

export const App = defineComponent({
  setup() {
    return () => {
      return (<>
        <header class="signin-header">欢迎登陆昭昭</header>
        <Otp />
      </>)
    }
  }
})