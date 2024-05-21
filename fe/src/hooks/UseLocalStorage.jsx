
import React, { useState } from "react";
import { useEffect } from "react";
function UseLocalStorage(key,initial) {
  const [product,setProduct]=useState(localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)):initial)
  useEffect(()=>{
localStorage.setItem(key,JSON.stringify(product))
  },[product,setProduct])
  return (
    [product,setProduct]

  )
}

export default UseLocalStorage
