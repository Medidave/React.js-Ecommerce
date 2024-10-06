import "./Colors.css"
import Input from "../../components/Input";

 function Colors({handleChange}) {
  // console.log(handleChange)

  return <div className="ml">
    <h2 className="sidebar-title color-title">Colors</h2>

    <label className="sidebar-label-container">
        <input type="radio" name="test3" value="" onChange={handleChange}/>
        <span className="checkmark all"></span>All
    </label>

    
    <Input 
      handleChange={handleChange}
      value="black"
      title="Black"
      name="test3"  
      color="black"
    /> 

    
    <Input 
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test3"   
          color="blue"  
    /> 

    
    <Input 
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test3"   
          color="red"
    /> 

    
    <Input 
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test3" 
          color="green"   
    /> 

    
  <label className="sidebar-label-container">
        <input type="radio"
        name="test3"
        value="white"
        onChange={handleChange}
        />
        <span className="checkmark" style={{
          background: "white",
          border: "2px solid black",
        }}></span>White
  </label>



  {/* <label className="sidebar-label-container color-title">
      <input type="radio" name="test3"/>
      <span className="checkmark"></span>All
    </label>

    <label className="sidebar-label-container">
      <input type="radio" name="test3"/>
      <span className="checkmark"></span>Black
    </label>


    <label className="sidebar-label-container">
      <input type="radio" name="test3"/>
      <span className="checkmark"></span>Blue
    </label>


    <label className="sidebar-label-container">
      <input type="radio" name="test3"/>
      <span className="checkmark"></span>Red
    </label>

    <label className="sidebar-label-container">
      <input type="radio" name="test3"/>
      <span className="checkmark"></span>Green
    </label>

    <label className="sidebar-label-container">
      <input type="radio" name="test3"/>
      <span className="checkmark"></span>White
    </label> */}


</div>
}

export default Colors;
