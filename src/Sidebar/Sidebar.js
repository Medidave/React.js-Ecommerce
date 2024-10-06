import "./Sidebar.css";
import { TiShoppingCart } from "react-icons/ti";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";


function Sidebar({handleChange}) {
  // console.log([{handleChange}])
  
  return <>
  <section className="sidebar">
    <div className="logo-container">
        <h1><TiShoppingCart /></h1>
    </div>
    
    <Category handleChange={handleChange}/>
    <Price handleChange={handleChange}/>
    <Colors handleChange={handleChange}/>
  </section>
  </>
}


export default Sidebar;
