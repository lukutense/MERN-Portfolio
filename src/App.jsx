import React from 'react'
import './App.css'
import {Header,Footer,Intro,Jobs,Education,Skills,Form} from './pages'




function App() {

  return (
    <div className="App">
      <Header />           
      <Intro />
      <Jobs />
      <Education />
      <Skills />
      <Form />
      <Footer />
    </div>
  )
}

export default App
