import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}

//const reactElement = {
  //type: 'a',
 // props: {
  //  href: "https://reactjs.org",
  //  target: "_blank",
  // },
 // children: "Learn React",
//}

const anotherElement = (
  <a href='https://reactjs.org' target='_blank'>
    Learn React</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)