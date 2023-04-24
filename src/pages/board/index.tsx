import BoardAdmin from "@/components/Board/Board_admin";
import BoardPartner from "@/components/Board/Board_partner";
import BoardUser from "@/components/Board/Board_user";
import LoginForm from "@/components/LoginForm";
import PostMeta from "@/components/PostMeta";
import useLoginStore from "@/store/loginStore";
import styles from '@/styles/Home.module.css';
import { PostMetaType } from "@/type";
import Head from "next/head";
import { GetServerSideProps } from "next/types";
import { useEffect } from "react";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // const { slug } = params;
  const post: PostMetaType = {
    title: "게시판 페이지",
    subTitle: "게시판 서브 페이지",
    description: "게시판 설명",
    imageURL: "..."
  }
  return {
    props:{
      post
    }
  }
}

export default function Home({ post }: { post: PostMetaType}) {
  const login = useLoginStore((state: any) => state.login)

  return (
    <>
      <PostMeta {...post}></PostMeta>
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
    </>
  )
}
