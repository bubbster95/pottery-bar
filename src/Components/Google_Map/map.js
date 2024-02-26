// import React, {useRef, useEffect} from 'react'
// import './map.scss'

// function MyMap({ center, zoom, markers, gyms }) {
//   const ref = useRef();

//   const makeMarkers = (map) => {
//     // Set Main gym logo on Map
//     if (!gyms) {
//       const gym = {
//         url: 'assets/RSC_LOGO_Icon.png',
//         size: new window.google.maps.Size(50, 50),
//         scaledSize: new window.google.maps.Size(50, 50)
//       };
//       new window.google.maps.Marker({
//         position: center,
//         map,
//         title: 'Gym Location',
//         icon: gym,
//         size: '10px',
//       })
//     };
//     // Set parking Lot logos
//     if (markers) {   
//       const image = {
//         url: 'assets/Parking.png',
//         size: new window.google.maps.Size(25, 25),
//         scaledSize: new window.google.maps.Size(25, 25)
//       };
//       markers.map(marker => {
//         return new window.google.maps.Marker({
//           position: marker,
//           map,
//           title: 'Lot Location',
//           icon: image
//         });
//       })
//     };
//     // Set logos for global gyms if no gym chosen
//     if (gyms) {   
//       const logo = {
//         url: 'assets/RSC_LOGO_Icon.png',
//         size: new window.google.maps.Size(50, 50),
//         scaledSize: new window.google.maps.Size(50, 50)
//       };
//       gyms.map(marker => {
//         return new window.google.maps.Marker({
//           position: marker,
//           map,
//           title: 'Rock Spot Location',
//           icon: logo
//         });
//       })
//     };
//   }

//   const setMapStyle = (map) => {
//     /*
//       Turn off all markers except our own.
//       Change all the colors of the map
//       Documentation on how to change styles:
//       https://developers.google.com/maps/documentation/android-sdk/style-reference
//     */
//     const styles = [
//     { featureType: 'poi',
//       stylers: [{ visibility: "off" }]
//     },
//     {
//       featureType: "water",
//       stylers: [{ color: "#85C8DB" }]
//     },
//     {
//       featureType: "road.highway",
//       elementType: "geometry.fill",
//       stylers: [{ color: "#FD851C" }, {"saturation": -25}]
//     },
//     {
//       featureType: "road.arterial",
//       elementType: "geometry.fill",
//       stylers: [{ color: "#0678B3" }, {"saturation": -50}, {'gamma': 1.5}]
//     },
//     {
//       featureType: "landscape",
//       stylers: [{ "color": "#000" }]
//     }]
//     map.setOptions({ styles: styles})
//   }

//   useEffect(() => {
//     let map = new window.google.maps.Map(ref.current, { center, zoom });
//     makeMarkers(map);
//     setMapStyle(map)
//   });

//   return <div ref={ref} id="map" />;
// }

// export default MyMap
