import React,{useRef,useCallback} from "react";

function Card({ data}) {
  return (
    <>
      
      <div className=' w-screen md:w-[25rem] h-auto px-3 py-3 flex flex-col gap-2 items-center shadow-md shadow-black/50 cursor-pointer hover:bg-black/10 rounded-sm'>
        <img
          src={data.image_link}
          className='w-full h-[10rem] object-cover'
        ></img>
        <p className='font-serif text-lg'>
          {data.name.length > 40 ? data.name.slice(0, 40) : data.name}
        </p>
        <small className='texy-sm font-serif'>
          {data.description.length > 350
            ? data.description.slice(0, 350)
            : data.description}
          <span className='font-bold text-blue-500 font-serif'>More</span>
        </small>
      </div>
      
    </>
  );
}

export default Card;
