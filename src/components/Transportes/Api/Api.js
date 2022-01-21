// import { useState , useEffect } from 'react';

// export default function Api(){

//     const url = "https://services5.arcgis.com/UxADft6QPcvFyDU1/arcgis/rest/services/Red_Metro/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";
//     const [{multiData}, setMultiData] = useState();

//     const fetchApi = async () => {
//         const response = await fetch(url);
//         const responseJson = await response.json();
//         setMultiData(responseJson);
//     }

//     useEffect(()=>{
//         fetchApi();
//     }, []);

//     return (
//         <ul>
//             {   multiData ? multiData.map((data) => {
//                 return <li>{data}</li>
//             }) : 'Cargando...'
//             }
//         </ul>
//     );
// }