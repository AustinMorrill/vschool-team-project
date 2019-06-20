import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css'
require("dotenv").config()
 
const AnyReactComponent = ({ text }) => <div className='mapPin'>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.19,
      lng: -111.97
    },
    zoom: 14
  };
 
  render() {
    return (
			// Important! Always set the container height explicitly
			<div className="map__container">
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyDDtcmzlvN0yHY6MSXvch_EkzOP97SdTwA" }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				>
					<AnyReactComponent lat={41.19} lng={-111.97} text=" " />
				</GoogleMapReact>
			</div>
		)
  }
}
 
export default SimpleMap;