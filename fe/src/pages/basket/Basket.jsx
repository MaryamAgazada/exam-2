import {useContext,React}  from 'react'
import { MainContext } from '../../context/MainProvider';
import { Helmet, HelmetProvider } from "react-helmet-async";
function Basket() {
  const {basket,addBasket,decreaseBtn,removeBasket}=useContext(MainContext)
  return (
    <div>
       <Helmet>
        <title>home</title>
      </Helmet>
      {basket.map((x) => {
        return (
          <>
            <div className="cards" key={x._id}>
              <div className="card">
                <h2>{x.title}</h2>
                <p>{x.desc}</p>
                <div className="mini-card">
                  <img src={x.img} alt="" />
                  <span>{x.name}</span>
                  <p>{x.price}</p>
                  <p>{x.count}</p>
                </div>
                <button onClick={()=>removeBasket(x)}>remove</button>
                <button onClick={()=>addBasket(x)}>+</button>
                <button onClick={()=>decreaseBtn(x)}>-</button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  )
}

export default Basket
