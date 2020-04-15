import React, { useState, useMemo, useEffect, useCallback } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [selectedItem, setSelectedItem] = useState('Apple')
  let [counter, setCounter] = useState(0)

  const countLetter = (word, a) => {
    alert(a)
    for (let index = 0; index < 10000; index++) {
      console.log('delay')
    }
    return <div>{word.length}</div>
  }

  // thử cách khác với useEffect
  // let counterLetter = 0
  // useEffect(() => {
  //   console.log("App -> useEffect")
  //   counterLetter = countLetter(selectedItem)
  //   console.log("App -> counterLetter INSIDE", counterLetter)
  //   setTimeout(() => {
  //     setCounter(0)
  //   }, 5000);
  // }, [selectedItem])
  // console.log("App -> counterLetter OUTSIDE", counterLetter)

  // version 1: counterLetter rất chậm delay ~3s khi click chọn item do hàm countLetter được chạy mỗi lần render lại
  // const counterLetter = countLetter(selectedItem)
  // console.log("App -> counterLetter", counterLetter)

  // version 2: counterLetter sẽ chạy rất nhanh nếu khi selectedItem giống với lần trước, nó sẽ ko execute lại hàm countLetter
  // giá trị của counterLetter được sử dụng lại từ lần tính toán trước đó nên sẽ tốt hơn
  // Nếu sử dụng cách này thì khi biến counter thay đổi sẽ không bị lag do value counterLetter không cần phải tính toán lại, chỉ tính toán lại khi selectedItem thay đổi
  const counterLetter =  useCallback((a) => countLetter(selectedItem, a), [selectedItem])

  // Mỗi lần render lại tất cả các dòng code ngoài return cũng sẽ được chạy
  return (
    <div className="App">
      <header className="App-header">
        <span>
          {selectedItem} have {counterLetter('asdf')} letters
        </span>
        <div>
          <button onClick={() => setSelectedItem('Apple')}>Apple</button>
          <button onClick={() => setSelectedItem('Orange')}>Orange</button>
          <button onClick={() => setSelectedItem('Watermelon')}>
            Watermelon
          </button>
        </div>
        <span>My Counter Value: {counter}</span>
        <div>
          <button onClick={() => setCounter(++counter)}>
            Increase Counter
          </button>
        </div>
        <div>
          <button onClick={() => alert(counterLetter + 1)}>
            GET counterLetter
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
