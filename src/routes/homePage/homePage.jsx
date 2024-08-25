import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div class="textContainer">
        <div class="wrapper">
          <h1 className="title">Find real Estate & get your dream place </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic iure
            dolor, nulla dignissimos consectetur, magnam voluptatum nihil
            excepturi quas amet voluptatibus perferendis, nam ipsa doloribus!
          </p>
          <SearchBar></SearchBar>

          <div class="boxes">
            <div class="box">
              <h1>16</h1>
              <h2>Years of Experience</h2>
            </div>
            <div class="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div class="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
