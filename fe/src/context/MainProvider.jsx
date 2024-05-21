import React from 'react'
import { useState } from 'react'
import {createContext} from "react"
import UseLocalStorage from '../hooks/UseLocalStorage'
export const MainContext=createContext()

function MainProvider({children}) {
 const [basket,setBasket]=UseLocalStorage("basket",[])
 function addBasket(item) {
     console.log(item)
     const index=basket.findIndex(x=>x._id===item._id)
     if(index!==-1){
basket[index].count++
setBasket([...basket])
     }
     else{
        setBasket([...basket,{...item,count:1}]) 
     }
 }
 function decreaseBtn(item) {
    const index=basket.findIndex(x=>x._id===item._id)
    const elem=basket[index]
    if(index!==-1){
elem.count--
setBasket([...basket]) 
    }
 }
 function removeBasket(item) {
    setBasket(basket.filter(x=>x._id!==item._id)) 
 }
  return (
    <div>
      <MainContext.Provider value={{basket,addBasket,decreaseBtn,removeBasket}}>
          {children}
      </MainContext.Provider>
    </div>
  )
}

export default MainProvider
