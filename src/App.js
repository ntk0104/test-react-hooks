import React, { useState, useMemo, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [selectedItem, setSelectedItem] = useState('Apple')
  let [counter, setCounter] = useState(0)

  const countLetter = (word) => {
    for (let index = 0; index < 10000; index++) {
      console.log('delay')
    }
    return word.length
  }



  // version 1: counterLetter rất chậm delay ~3s khi click chọn item do hàm countLetter được chạy mỗi lần render lại
  // const counterLetter = countLetter(selectedItem)
  // console.log("App -> counterLetter", counterLetter)

  // version 2: counterLetter sẽ chạy rất nhanh nếu khi selectedItem giống với lần trước, nó sẽ ko execute lại hàm countLetter
  // giá trị của counterLetter được sử dụng lại từ lần tính toán trước đó nên sẽ tốt hơn
  // Nếu sử dụng cách này thì khi biến counter thay đổi sẽ không bị lag do value counterLetter không cần phải tính toán lại, chỉ tính toán lại khi selectedItem thay đổi
  const counterLetter =  useMemo(() => countLetter(selectedItem), [selectedItem])

  // Mỗi lần render lại tất cả các dòng code ngoài return cũng sẽ được chạy
  return (
    <div className="App">
      <header className="App-header">
        <span>
          {selectedItem} have {counterLetter} letters
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
      </header>
    </div>
  )
}

export default App
