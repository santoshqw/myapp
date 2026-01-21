// app/product/[id]/[reviewid]/page.tsx
import React from "react";

type Props = {
  params: Promise<{ reviewid: string }>; 
};

const Page = async ({ params }: Props) => {
  const { reviewid } = await params; 

  return <div>Review ID: {reviewid}</div>;
};

export default Page;
