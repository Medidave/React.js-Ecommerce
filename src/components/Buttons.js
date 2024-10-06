
 function Buttons({onClickHundler, value, title}) {
  return <button  onClick={onClickHundler} value={value} className="btns">{title}</button>
}

export default Buttons;
