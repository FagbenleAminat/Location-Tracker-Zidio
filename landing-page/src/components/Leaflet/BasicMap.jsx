import { MapContainer,TileLayer, useMap } from "react-leaflet";
import LocationMarker from "./useGeolocation"
import 'leaflet/dist/leaflet.css'




function BasicMap() {

return (
  <MapContainer
    center={{ lat: 51.505, lng: -0.09 }}
    zoom={13}
    scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker />
  </MapContainer>
)

}
export default BasicMap;
