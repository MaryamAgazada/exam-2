import React, { useState } from "react";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useContext } from "react";
import { MainContext } from "../../context/MainProvider";
import "./Home.scss"
function Home() {
  const {basket,addBasket,}=useContext(MainContext)
  const [data, setData] = useState([]);

  async function getAllData(params) {
    const response = await fetch("http://localhost:3000");
    const movies = await response.json();
    // console.log(movies);
    setData(movies);
  }
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>home</title>
      </Helmet>
      <section className="hero">
        <h1 className="hero__title">Get your <span>Education</span>
        today!</h1>
        <div className="hero__cards">
          <div className="hero__card">
            <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
            <div className="card__texts">
            <h2 className="card__title">Online Courses</h2>
         <a href="" className="link">VIEW MORE</a>
            </div>
         
          </div>
          <div className="hero__card">
            <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
            <div className="card__texts">
            <h2 className="card__title">Online Courses</h2>
         <a href="" className="link">VIEW MORE</a>
            </div>
         
          </div>
          <div className="hero__card">
            <img src="https://preview.colorlib.com/theme/course/images/earth-globe.svg" alt="" />
            <div className="card__texts">
            <h2 className="card__title">Online Courses</h2>
         <a href="" className="link">VIEW MORE</a>
            </div>
         
          </div>
        </div>
      </section>
      <section className="popularCourse">
        <div></div>
        <h1>Popular Courses</h1>
        {data.map((x) => (
      
      <>
            <div className="cards" key={x._id}>
              <div className="card">
                <h2>{x.title}</h2>
                <p>{x.desc}</p>
                <div className="mini-card">
                  <img src={x.img} alt="" />
                  <span>{x.name}</span>
                  <p>{x.price}</p>
                </div>
                <button onClick={()=>addBasket(x)}>add basket</button>
              </div>
            
            </div>
            </>
      ))}
        <div className="register__cards">
        <div className="register__card__left">
          <h1>Register now and get a discount 50% discount until 1 January</h1>
          </div>
          <div className="register__card__right">
            <h1>Search for your course</h1>
 <div>
 <input type="text" id="fname" name="fname"/>
  <input type="text" id="lname" name="lname"/>
  <button>search of course</button>
 </div>
          </div>
        </div>
        
       

      </section>
     
    </div>
  );
}

export default Home;
