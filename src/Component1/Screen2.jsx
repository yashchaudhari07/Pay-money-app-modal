import React from 'react'
import { useLocation } from 'react-router-dom';

export const Screen2 = () => {
     let {state} = useLocation();
     const data = state.Student;
     console.log(data)

  return (
    <div>
     <p>{data.name}</p>
     <p>{data.age}</p>
    </div>
  )
}






