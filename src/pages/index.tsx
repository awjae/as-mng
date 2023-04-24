import LoginForm from "@/components/LoginForm"
import useLoginStore from "@/store/loginStore"
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const setLogin = useLoginStore((state: any) => state.setLogin)

  const loginHandler = (data: any) => {
    if (data.message === "success") {
      setLogin(data.result)
      router.push('/board')
    }
  }

  return (
    <main className={styles.main}>
      <LoginForm loginHandler={loginHandler}></LoginForm>
    </main>
  )
}
