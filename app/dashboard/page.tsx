
import React from 'react'

const page = () => {
  const  number:number = Math.random();
 console.log(number);
  if( number<0.1) {
    throw new Error("Error on dashboard page");
  }
  return (
    <div> dashboard page</div>
  )
}

export default page