import React from 'react'

function index() {

  const controller = {
    cnt: 1,
    value: "a",
    add: function () {  
      this.cnt += 1
    },
    setValue: function (string: string) {
      this.value = string
    },
    show: function () {
      console.log(this.cnt, this.value)
    }
  } 

  return (
    <>
      <h1>최적화 테스트</h1>
      <button onClick={() => controller.show()}>테스트</button>
      <button onClick={() => controller.add()}>더하기</button>
    </>
  )
}

export default index