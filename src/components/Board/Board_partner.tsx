// components/Board.tsx

import React, { useState } from "react"
import styles from '@/components/Board/Board.module.css'
import Link from "next/link"

const Board = () => {

  return (
    <main>
      <h1 className={styles.font_color_red}>파트너 홈</h1>
      <nav>
        <Link href={'/board'}>Home</Link>
      </nav>
      <div>
        소비자 게시물
      </div>
    </main>
  )
}

export default Board