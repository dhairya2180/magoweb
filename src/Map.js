
import React, { Component } from "react";
import { Map, GoogleApiWrapper,Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

class MapContainer extends Component {
  render() {
    return (
      <div
        className="bg-dark mx-5 my-5"
        style={{ height: "400px", border: "7px solid #c6984b" }}
      >
        <Map
        
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 28.656240,
            lng:-81.365620,
          }}
        >
          <Marker
         
  position={{ lat: 28.656240, lng: -81.365620 }}
  icon={{
    url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
  }}
/>

          </Map>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCSA546UYCU54h7RL6C9XWvTEg0FZmTfIg",
})(MapContainer);
