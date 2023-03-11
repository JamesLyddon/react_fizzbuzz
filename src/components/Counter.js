import { useEffect } from 'react'
import { useCount, useCountUpdate } from '../CountContext'

const Counter = () => {
  const { count, fizzBuzzDisplay } = useCount()
  const { handleClick, handleChange } = useCountUpdate()

  useEffect(() => {
    handleChange()
  }, [count, handleChange])

  return (
    <>
      <div className="container">
        <button onClick={handleClick}>-</button>
        <p className="text" onChange={handleChange}>
          {count}
        </p>
        <button onClick={handleClick}>+</button>
      </div>
      <div className="container">
        <p className="text fizz-display">{fizzBuzzDisplay}</p>
      </div>
    </>
  )
}

export default Counter
