// import React from "react";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// import { RSC_GOOGLE_API_KEY } from '../../config';

// import MyMap from "./map";

// const render = (status: Status): ReactElement => {
//   if (status === Status.LOADING) return <h1>Spinner</h1>;
//   if (status === Status.FAILURE) return <h1>Error</h1>;
//   return null;
// };

// const GoogleMap = ({ GYM }) => {
//   const center = GYMS[GYM].info.map.center
//   const zoom = GYMS[GYM].info.map.zoom
//   let markers;
//   let gyms
//   if (GYMS[GYM].info.map.lots) {
//     markers = GYMS[GYM].info.map.lots
//   }
//   if (GYM === 'rsc') {
//     gyms = GYMS[GYM].info.map.gyms
//   }

//   return (
//     <Wrapper apiKey={RSC_GOOGLE_API_KEY} render={render}>
//       <MyMap
//         center={center}
//         zoom={zoom}
//         markers={markers}
//         gyms={gyms}
//       />
//     </Wrapper>
//   )
// };

// export default GoogleMap