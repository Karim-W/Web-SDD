// // import React from "react";
// // import ReactDOM from "react-dom";
// // import { compose, withProps } from "recompose";
// // import {
// //   withScriptjs,
// //   withGoogleMap,
// //   GoogleMap,
// //   Marker
// // } from "react-google-maps";

// // const MyMapComponent = compose(
// //   withProps({
// //     /**
// //      * Note: create and replace your own key in the Google console.
// //      * https://console.developers.google.com/apis/dashboard
// //      * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
// //      */
// //     googleMapURL:
// //       "https://maps.googleapis.com/maps/api/js?key=AIzaSyBZwXe-8jwfvBwSR4ZfngFJ7NfqXF91IPI&v=3.exp&libraries=geometry,drawing,places",
// //     loadingElement: <div style={{ height: `100%` }} />,
// //     containerElement: <div style={{ height: `400px` }} />,
// //     mapElement: <div style={{ height: `100%` }} />
// //   }),
// //   withScriptjs,
// //   withGoogleMap
// // )(props => (
// //   <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
// //     {props.isMarkerShown && (
// //       <Marker position={{ lat: -34.397, lng: 150.644 }} />
// //     )}
// //   </GoogleMap>
// // ));

// // export default Map

// import React from "react"
// import { compose, withProps } from "recompose"
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
//   </GoogleMap>
// ))

// class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }