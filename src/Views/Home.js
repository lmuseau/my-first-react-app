import React from 'react'
import HelloWorld from '../Components/HelloWorld'

function Home() {
  return (
    <div>
      <HelloWorld name="Leonard" />

      <h3 className="text-2xl">This is the home page</h3>
    </div>
  )
}

export default Home;