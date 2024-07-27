import React from 'react';
import './App.css';
import nav from "./assets/image 55.png"
import keyk from "./assets/Image.png"
import img2 from "./assets/Image (6).png"
import kebab from "./assets/kebab 1.png"
import pizza from "./assets/pizza 1.png"
import salmon from "./assets/salmon 1.png"
import doughnut from "./assets/doughnut 1.png"
function App() {
  const arr = [
  {
    img:keyk,title:"Cupcake",num:"22-items"
  },
  {
    img:kebab,title:"kebab",num:"3-items"
  },
  {
    img:pizza,title:"pizza",num:"5-items"
  },
  {
    img:salmon,title:"salmon",num:"12-items"
  },
  {
    img:doughnut,title:"doughnut",num:"78-items"
  }
  ]
  return (
    <>
      <div className="wrapper">
        <div className="wrapper-nav">
          <img src= {nav} alt="lagatip" />
        </div>
        <div className="wrapper-navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Promotions </li>
            <li>Blogs</li>
            <li>Contact Us</li>
            <div className="wrapper-btn">
            <p>Masuk</p>
            <button>Daftar Sekarang</button>
           </div>
          </ul>
        </div>
      </div>
      <div className="wrappers">
        <div className="wrappers-text">
          <h1>Good Food Us Good Mood</h1>
          <p>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
          <button>Daftar Sekarang</button>
          <button className='wrappers-btn'>About Us</button>
        </div>
        <div className="wrappers-img">
          <img src={img2} alt="main" />
        </div>
        
      </div>
      <div className="wrappers-texts">
        <h2>Browser Our Category 
        <span>Receipt</span></h2>
        <div className='cards'>
        {arr.map((item,index) =>
        <div key={index} className='card'>
          <img src={item.img} alt=""  className=''/>
          <h3>{item.title}</h3>
          <p>{item.num}</p>
        </div>
        )}
      </div>
      </div>
   
    </>
  );
}

export default App;
