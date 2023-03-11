import { useState, useContext, createContext, useEffect } from 'react'

export const CountContext = createContext()
export const CountUpdateContext = createContext()

export function useCount() {
  return useContext(CountContext)
}

export function useCountUpdate() {
  return useContext(CountUpdateContext)
}

export function CountProvider({ children }) {
  const [count, setCount] = useState(0)
  const [fizzBuzzDisplay, setFizzBuzzDisplay] = useState()

  const handleClick = (e) => {
    if (e.target.innerText === '-') setCount(count - 1)
    if (e.target.innerText === '+') setCount(count + 1)
  }

  const handleChange = () => {
    if (count === 0) setFizzBuzzDisplay(0)
    else if (count % 3 === 0 && count % 5 === 0) setFizzBuzzDisplay('Fizz Buzz')
    else if (count % 3 === 0) setFizzBuzzDisplay('Fizz')
    else if (count % 5 === 0) setFizzBuzzDisplay('Buzz')
    else setFizzBuzzDisplay(count)
  }

  // useEffect(() => {
  //   handleChange()
  // }, [count, handleChange])

  return (
    <CountContext.Provider value={{ count, fizzBuzzDisplay }}>
      <CountUpdateContext.Provider value={{ handleClick, handleChange }}>
        {children}
      </CountUpdateContext.Provider>
    </CountContext.Provider>
  )
}
