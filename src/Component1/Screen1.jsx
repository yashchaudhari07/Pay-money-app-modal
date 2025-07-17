import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../Components/Card/Card';
import Icon from '../Components/Card/Assets/user.png';
export const Screen1 = () => {
  const person1 = {
    name: 'Riya',
    age: 15,
    path:'/main',
    image:Icon,
  };
  const person2 =
  {
    name: 'Aaditi',
    age: 20,
    path:'/main',
    image:Icon,
  };
  const person3 =
  {
    name: 'mansi',
    age: 17,
    path:'/main',
    image:Icon,
  };

  return (
    <>
      <Link to="/screen2" state={{ Student: person1 }}>
        <button>Student1</button>
      </Link>
      <Link to="/screen2" state={{ Student: person2 }}>
        <button>Student2</button>
      </Link>
      <Link to="/screen2" state={{ Student: person3 }}>
        <button>Student3</button>
      </Link>
      <>
      <Card data={person1}/>
      <Card data={person2}/>
      <Card data={person3}/>
      </>
    </>
  )
}
