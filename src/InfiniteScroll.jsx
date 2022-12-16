import React from "react";
import { useEffect,useRef,useCallback } from "react";
import { useState } from "react";
import axios from "axios";
import Card from "./Card";
function InfiniteScroll() {
  const [brand, setBrand] = useState(1);
  const [state, setState] = useState([]);
  const [multiple,setMultiple]=useState(1)
  const FetchData = async () => {
    const res = await axios.get(
      "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    );
    if (res.status == 200) {
      setState([...state,...res.data]);
    }
  };
  useEffect(() => {
    FetchData();
  }, [brand]);
  
  window.onscroll=()=>{
    if(window.innerHeight + document.documentElement.scrollTop > 6400 * brand){
        setBrand( brand + 1)
    }
  }
  
  return (
    <div className="flex w-screen flex-wrap items-center justify-center gap-3">
        {
            state&& state.length>0&& state.map((product,index)=>(
                <Card data={product} index={index} length={state.length} />
            ))
        }
    </div>
  );
}

export default InfiniteScroll;
