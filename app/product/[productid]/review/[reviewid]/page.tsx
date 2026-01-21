// app/product/[id]/[reviewid]/page.tsx
import React from "react";
import NotFound from "../not-found";


type Props = {
  params: Promise<{ reviewid: string }>; 
};

const Page = async ({ params }: Props) => {
 
  const { reviewid } = await params; 
 
  if(parseInt(reviewid) >1000) {
   return NotFound();
  }

  return <div>Review ID: {reviewid}</div>;
};

export default Page;
