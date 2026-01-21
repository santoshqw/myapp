import React from 'react'

type Props ={
    params:Promise<{slug:string[]}>
};

const page = async({params}:Props) => { 
    const {slug} =await params;
  return (
    <>
    <div>{slug.join("/")}</div>
     <p>Array of segments: {JSON.stringify(slug)}</p>
    </>
  )
}

export default page