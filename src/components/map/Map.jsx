import { MapContainer,  TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

function Map({ items }) {
  const position = [52.4797, -1.90269];
  return (
    <MapContainer
      className="map"
      center={position}
      zoom={7}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => {
        return <Pin item={item} key={item.id}></Pin>;
      })}
    </MapContainer>
  );
}

export default Map;
