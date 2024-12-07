import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export const Home = defineComponent({
  setup: () => {
    const router = useRouter()
    const logout = () => {
      router.replace('/sign_in')
    }
    return () => (
      <div h-vhcheck flex justify-center items-center>
        <button p-24px onClick={logout}>退出登录</button>
      </div>
    )
  }
})