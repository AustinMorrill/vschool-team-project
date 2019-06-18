import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
require("dotenv").config()
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.19,
      lng: -111.97
    },
    zoom: 15
  };
 
  render() {
    return (
			// Important! Always set the container height explicitly
			<div style={{ height: "60vh", width: "90%" }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyDDtcmzlvN0yHY6MSXvch_EkzOP97SdTwA" }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				>
					<AnyReactComponent lat={41.19} lng={-111.97} text='Criddles Cafe' />
				</GoogleMapReact>
			</div>
		)
  }
}
 
export default SimpleMap;