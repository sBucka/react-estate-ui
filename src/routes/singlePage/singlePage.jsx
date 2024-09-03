import Slider from "../../components/slider/Slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/dummyData";
import Map from "../../components/map/Map";

function SinglePage() {
  return (
    <div className="singlePage">
      <div class="details">
        <div class="wrapper">
          <Slider images={singlePostData.images}></Slider>
          <div class="info">
            <div class="top">
              <div class="post">
                <h1>{singlePostData.title}</h1>
                <div class="address">
                  <img src="/pin.png" />
                  <span>{singlePostData.address}</span>
                </div>
                <div class="price">$ {singlePostData.price}</div>
              </div>
              <div class="user">
                <img src={userData.img} />
                <span>{userData.name}</span>
              </div>
            </div>
            <div class="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>

      <div class="features">
        <div class="wrapper">
          <p class="title">General</p>
          <div class="listVertical">
            <div class="feature">
              <img src="/utility.png" alt="" />
              <div class="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div class="feature">
              <img src="/pet.png" alt="" />
              <div class="featureText">
                <span>Pet policy</span>
                <p>Pets allowed</p>
              </div>
            </div>
            <div class="feature">
              <img src="/fee.png" alt="" />
              <div class="featureText">
                <span>Property Fees</span>
                <p>Must have 3x tthe rent in total household income</p>
              </div>
            </div>
          </div>
          <p class="title">Sizes</p>
          <div class="sizes">
            <div class="size">
              <img src="/size.png " alt="" />
              <span>80sqm</span>
            </div>
            <div class="size">
              <img src="/bed.png " alt="" />
              <span>2 beds</span>
            </div>
            <div class="size">
              <img src="/bath.png " alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p class="title">Nearby Places</p>
          <div class="listHorizontal">
            <div class="feature">
              <img src="/utility.png" alt="" />
              <div class="featureText">
                <span>School</span>
                <p>200m away</p>
              </div>
            </div>
            <div class="feature">
              <img src="/pet.png" alt="" />
              <div class="featureText">
                <span>Bus Stop</span>
                <p>200m away</p>
              </div>
            </div>
            <div class="feature">
              <img src="/fee.png" alt="" />
              <div class="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p class="title">Location</p>
          <div class="mapContainer">
            <Map items={[singlePostData]}></Map>
          </div>
          <div class="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
