import { defineComponent } from "vue";
import { Otp } from "./components/Otp";

export const App = defineComponent({
  setup() {
    return () => {
      return (<>
        <div>OTP(one time password)</div>
        <Otp />
      </>)
    }
  }
})