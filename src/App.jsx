import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {

  const actors = ['Sakib', 'Rakib', 'Sharuk'];
  
  const singers = [
    { name: 'Araf babu', age: '4 Years', liveIn: 'BD' },
    { name: 'Kalid hasan', age: '54 Years', liveIn: 'BD' },
    { name: 'Bappa Mojumdar', age: '64 Years', liveIn: 'BD' }
  ]

  return (
    <>
      <h1>Vite + React</h1>

      {
        singers.map(singer => <Singer singerName={singer.name} singerAge={singer.age}></Singer>)
      }

      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      <Todo task='Learn React' isDone={true} ></Todo>
      <Todo task='Core concept' isDone={false}></Todo>
      <Todo task='Try JSX' isDone={true}></Todo>
      <Todo task='JavaScript' isDone={true}></Todo>

      <Person number='One'></Person>
      <Person number='Two'></Person>

      <Device name='Laptop' price='45k'></Device>
      <Device name='Mobile' price='26k'></Device>
      <Device name={'Mouse'} price={700}></Device>
      <Device name={'Mouse'}></Device>

      <Student></Student>
    </>
  )
}

function Device({ name, price = 0 }) {
  return <h2>This is : {name} - Price : {price}</h2>
}

function Person({ number }) {
  const myStyle = {
    padding: '20px', border: '4px solid blue', margin: '10px'
  }
  return (
    <div style={myStyle}>
      <h2>I am a person number : {number}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

function Student() {
  return (
    <div className='student'>
      <h2> This is a Student</h2>
      <h4>Name : </h4>
      <h4>Age : </h4>
    </div>
  )
}









export default App
