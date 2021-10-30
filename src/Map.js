import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div style={{ color: "#FF0000", fontSize: "24px" }}>{text}</div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 29.016625,
      lng: 77.76014,
    },
    zoom: 15,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "95%" }} id="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDgx3L_yOFvTTGrXebrfYOguxMOrkHYo4k" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={29.016625} lng={77.76014} text="shop" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
