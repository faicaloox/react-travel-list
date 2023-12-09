import React from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

const initialItems = [
  {id: 1, description: "Passport", quantity: 2, packed: false},
  {id: 2, description: "Socks", quantity: 12, packed: true},
  {id: 3, description: "Charger", quantity: 1, packed: false}
]

const App = () => {
  return (
    <>
      <Logo />
      <Form />
      <PackingList initialItems={initialItems} />
      <Stats />
    </>
  )
}

export default App