import Board from "@/components/Board"
import LoginForm from "@/components/LoginForm"
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Board></Board>
    </main>
  )
}
