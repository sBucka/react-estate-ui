import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import { listData } from "../../lib/dummyData";
import "./listPage.scss";

function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div class="listContainer">
        <div class="wrapper">
          <Filter></Filter>
          {data.map((item) => {
            return <Card key={item.id} item={item}></Card>;
          })}
        </div>
      </div>
      <div class="mapContainer">Map</div>
    </div>
  );
}

export default ListPage;
