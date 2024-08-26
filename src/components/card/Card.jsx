import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} />
      </Link>
      <div class="textContainer">
        <h2 class="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p class="address">
          <img src="/pin.png" />
          <span>{item.address}</span>
        </p>
        <p class="price">$ {item.price}</p>
        <div class="bottom">
          <div class="features">
            <div class="feature">
              <img src="/bed.png" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div class="feature">
              <img src="/bath.png" />
              <span>{item.bathroom } bathroom</span>
            </div>
          </div>
          <div class="icons">
            <div class="icon">
              <img src="/save.png" />
            </div>
            <div class="icon">
              <img src="/chat.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
