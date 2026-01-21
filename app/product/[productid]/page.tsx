import React from 'react'

const page = async({params}:{params:Promise<{productid:string}>}) => {
   const productid = (await params).productid;
    return (
    <div>this is product {productid}</div>
  )
};

export default page