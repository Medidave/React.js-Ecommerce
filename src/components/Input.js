
 function Input({handleChange, value, title, name, color}) {
  return (
<label className="sidebar-label-container">
        <input type="radio" name={name} onChange={handleChange} value={value}/>
        <span className="checkmark" style={{backgroundColor:color}}></span>{title}
  </label>
  )
}

export default Input;