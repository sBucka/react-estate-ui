import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import { listData } from "../../lib/dummyData";
import "./listPage.scss";

function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter></Filter>
          {data.map((item) => {
            console.log(item)
            return <Card key={item.id} item={item}></Card>;
          })}
        </div>
      </div>
      <div className="mapContainer"><Map items= {data}></Map></div>
    </div>
  );
}

export default ListPage;
