import BoardAdmin from "@/components/Board/Board_admin";
import BoardPartner from "@/components/Board/Board_partner";
import BoardUser from "@/components/Board/Board_user";
import LoginForm from "@/components/LoginForm";
import useLoginStore from "@/store/loginStore";
import styles from '@/styles/Home.module.css';
import { useEffect } from "react";

export default function Home() {
  const login = useLoginStore((state: any) => state.login);

  return (
    <main className={styles.main}>
      {
        login.code === '00' && (
          <BoardAdmin></BoardAdmin>
        )
      }
      {
        login.code === '01' && (
          <BoardPartner></BoardPartner>
        )
      }
      {
        login.code === '02' && (
          <BoardUser></BoardUser>
        )
      }
    </main>
  )
}
