import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import './App.scss'
import vhCheck from "vh-check";
import 'virtual:uno.css'

vhCheck()
export const App = defineComponent({
  setup() {
    return () => {
      return (<>
        <RouterView />
      </>)
    }
  }
})