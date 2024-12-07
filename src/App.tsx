import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import './App.scss'
import vhCheck from "vh-check";
import 'virtual:uno.css'

export const App = defineComponent({
  setup() {
    vhCheck()
    return () => {
      return (<>
        <RouterView />
      </>)
    }
  }
})