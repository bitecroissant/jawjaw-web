import { defineComponent, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import s from "./Home.module.scss";
export const Home = defineComponent({
  setup: () => {
    const pageData = reactive({ text: '🧨 昭昭如愿，岁岁安澜' })
    const router = useRouter()
    const logout = () => {
      router.replace('/sign_in')
    }
    onMounted(() => {
      // setTimeout(() => {
      //   pageData.text = '人生海海，山山而川，不过尔尔'
      // }, 2300)
    });
    return () => (
      <div h-vhcheck flex justify-center items-center flex-col>
        <div></div>
        <button p-24px mb-48px onClick={logout}>退出登录</button>
        <div class={s.greetingTextWrapper}>
          <h3 data-glitch={pageData.text} class={s.greetingText} >
            {pageData.text}
          </h3>
        </div>
      </div>
    )
  }
})