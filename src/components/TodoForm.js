import React from 'react'

export const TodoForm = () => {
  return (
    <form className='TodoForm'>
        <input type="text" className='todo-input' placeholder='오늘 일정은 무엇인가요?'/>
        <button type='submit' className='todo-btn'></button>
    </form>
  )
}
