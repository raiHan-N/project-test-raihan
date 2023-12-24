"use client";

import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const BottomCard = ({page}) => {
  
  const [paging,setPaging] = useState(true);
  
  const router = useRouter();

  const doubleNextPage = () => {
    setPaging(false)
  };

  const doublePrevPage = () => {
    setPaging(true);
  }

  const nextPage = () => {
    if (page == 10) {
      return;
    }
    router.push(`/?page=${page + 1}`);
  };

  const prevPage = () => {
    if (page == 1) {
      return;
    }
    router.push(`/?page=${page - 1}`);
  };

  return (
    <div className='w-52 flex justify-between items-center'>
      <div className="flex gap-2">
        <MdKeyboardDoubleArrowLeft onClick={doublePrevPage} className="hover:cursor-pointer"/>
        <MdOutlineKeyboardArrowLeft onClick={prevPage} className="hover:cursor-pointer"/>
      </div>
      <div className="flex gap-3">
      {paging ? (
        <>    
            <Link href={'/?page=1'} className="rounded-md hover:cursor-pointer active:bg-primary active:text-white px-2 py-1 text-sm">1</Link>
            <Link href={"/?page=2"} className="rounded-md hover:cursor-pointer active:bg-primary active:text-white px-2 py-1 text-sm">2</Link>
            <Link href={"/?page=3"} className="rounded-md hover:cursor-pointer active:bg-primary active:text-white px-2 py-1 text-sm">3</Link>
            <Link href={"/?page=4"} className="rounded-md hover:cursor-pointer active:bg-primary active:text-white px-2 py-1 text-sm">4</Link>
            <Link href={"/?page=5"} className="rounded-md hover:cursor-pointer active:bg-primary active:text-white px-2 py-1 text-sm">5</Link>
        </>
            ) : (
                <>    
            <Link href={'/?page=6'} className="rounded-md hover:cursor-pointer active:bg-primary active:text-white px-2 py-1 text-sm">6</Link>
        <Link href={"/?page=7"} className="rounded-md hover:cursor-pointer active:bg-primary active:text-white px-2 py-1 text-sm">7</Link>
        <Link href={"/?page=8"} className="rounded-md hover:cursor-pointer active:bg-primary active:text-white px-2 py-1 text-sm">8</Link>
        <Link href={"/?page=9"} className="rounded-md hover:cursor-pointer active:bg-primary active:text-white px-2 py-1 text-sm">9</Link>
        <Link href={"/?page=10"} className="rounded-md hover:cursor-pointer active:bg-primary active:text-white px-2 py-1 text-sm">10</Link>
        </>
        )}
      </div>
      <div className="flex gap-2">
        <MdOutlineKeyboardArrowRight onClick={nextPage} className="hover:cursor-pointer"/>
        <MdKeyboardDoubleArrowRight onClick={doubleNextPage} className="hover:cursor-pointer"/>
      </div>
    </div>
  )
}

export default BottomCard;
