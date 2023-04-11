// components/Board.tsx

import Link from "next/link";
import React, { useState } from "react";

const Board = () => {

  return (
    <div>
      <h1>관리자 홈</h1>
      <nav>
        <Link href={'/board'}>Home</Link>
        <Link href={'/board/admin/chart'}>Chart</Link>
        <Link href={'/board/admin/account'}>Account</Link>
      </nav>
    </div>
  );
};

export default Board;