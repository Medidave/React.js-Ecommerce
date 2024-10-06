import Navigation from "./Navigation/Navigation"
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
// import Category from "./Sidebar/Category/Category";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import { useState } from "react";
import "./index.css";

// Database
import products from "./db/data"


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //---------- Input Filter --------------
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);

  //---------- Radio Filter --------------
  const handleChange = event => {
    setSelectedCategory(event.target.value);
  }

  //---------- Buttons Filter --------------
  const handleClick = event => {
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selected, query){
    let filteredProducts = products;

    //filtering Input Items
    if (query){
      filteredProducts = filteredItems;
    }

    //Selected Filter 
    if (selected){
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => 
       category === selected ||
       color === selected || 
       company === selected ||
       newPrice === selected || 
       title === selected);
    }

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => (
      < Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
      />
    ))
  } 

  const result = filteredData(products, selectedCategory, query);

  return <>
  <Sidebar handleChange={handleChange}/>
  <Navigation query={query} handleInputChange={handleInputChange}/> 
  <Recommended handleClick={handleClick}/>
  <Products result={result}/>
  </>
}

export default App;
