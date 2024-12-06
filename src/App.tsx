import { defineComponent } from "vue";

export const App = defineComponent({
  setup() {
    return () => {
      return (<>
        <div>OTP(one time password)</div>
        <input />
      </>)
    }
  }
})