// import {AiFillStar} from "react-icons/ai";
import {BsFillBagHeartFill} from "react-icons/bs"


 function Card({img, title, star, reviews, prevPrice, newPrice}) {
  return (
    <section className="card">
      <img src={img} className="card-image" alt="{title}"/>
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star}
          {star}
          {star}
          {star}
          
          {/* <AiFillStar className="rating-start"/>
          <AiFillStar className="rating-start"/>
          <AiFillStar className="rating-start"/>
          <AiFillStar className="rating-start"/> */}
          <span className="total-reviews">{reviews}</span>
        </section>

        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del><span> </span>{newPrice}
          </div>

          <div className="bag">
            <BsFillBagHeartFill className="bag-icon"/>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Card;
