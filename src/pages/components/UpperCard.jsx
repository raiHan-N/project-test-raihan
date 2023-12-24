"use client";

import Link from "next/link";
import { useRouter } from "next/router";



export default function UpperCard({page}) {


  const array = [...Array(10)]
  const router = useRouter();

  const handleSelect = (e) => {
    for (let index = 1; index <= 10; index++) {
      switch (parseInt(e.target.value)) {
        case index:
          router.push(`/?page=${index}`);  
        break;
        default:
          break;
      }
    }
  }

  return (
    <div className="w-full flex lg:flex-row flex-col lg:justify-between lg:px-[80px] px-5 lg:items-center gap-5">
        <p>Showing 1-10 of 100</p>
      <div className="flex gap-5">
        <div className="flex gap-2 items-center">
            <p>Show per page: </p>
            <select className="select_styling" name="pages" id="pages" onChange={handleSelect}>
                {array.map((e,i) => {
                  const num = i+1;
                  return  <option key={i} value={num}>{num}</option>
                })}
            </select>
        </div>
        <div className="flex gap-2 items-center">
            <p>Show by: </p>
            <select className="select_styling" name="pages" id="pages">
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
            </select>
        </div>
      </div>
    </div>
  )
}
