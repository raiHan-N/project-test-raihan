"use client";

import Image from "next/image";

const CardItem = ({image,title,body}) => {
  return (
    <div className="shadow-xl flex flex-col w-72 rounded-md overflow-clip">
        <div className="w-72 h-40 relative">
        <Image className="object-cover" src={`https://picsum.photos/seed/${image}/200/200`} alt={image} fill/>
        </div>
        <div className="bg-white p-4 flex flex-col gap-1">
            <h4 className="text-sm text-slate-400 font-medium">{title}</h4>
            <div className="w-full min-h-7">
            <p className="text-ellipsis font-semibold w-full  overflow-hidden">{body}</p>
            </div>
        </div>
    </div>
  )
}

export default CardItem;
