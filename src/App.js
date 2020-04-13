import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [data, setData] = useState({ id: 1, name: 'Kiet' })
  // RESULT: data thay đổi vùng nhớ => useEffect vẫn triger lại => shallow Equal
  useEffect(() => {
    console.log('%c%s', 'color: #ec0202; background: yellow; font-size: 10px', JSON.stringify('Triggered action', null, 2))
  }, [data])

  const setTheSameValue = () => {
    console.log(
      '%c%s',
      'color: ##0e0091; background: yellow; font-size: 10px',
      JSON.stringify('setTheSameValue', null, 2)
    )
    setData({ id: 1, name: 'Kiet' })
  }

  // RESULT: works => useEffect watching 1 biến thì vẫn xài shallowEqual
  const [binaryData, setBinaryData] = useState('Kiet')
  useEffect(() => {
    console.log(
      '%c%s',
      'color: #ec0202; background: yellow; font-size: 10px',
      JSON.stringify('Triggered action', null, 2)
    )
  }, [binaryData])

  const setTheSameValueBinary = () => {
    console.log(
      '%c%s',
      'color: ##0e0091; background: yellow; font-size: 10px',
      JSON.stringify('setTheSameValueBinary', null, 2)
    )
    setBinaryData('Kiet')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={setTheSameValue}>
          Click to edit data to the same object
        </button>
        <button onClick={setTheSameValueBinary}>
          Click to edit data to the same binary data
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
