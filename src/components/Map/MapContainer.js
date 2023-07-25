import React, {useEffect,useState} from 'react';

const {kakao} = window;

const MapContainer = ({searchPlace}) => {
  //받아온 위도,경도 상태변경
  const [latitude , setLatitude] = useState(null);
  const [longitude , setLongitude] = useState(null);

  // 검색 결과 상태변경

  const [Places , setPlaces] = useState([]);


  useEffect(() => {
    
    // 현재 위치 받아오기  (리액트에 내장된 api)
    const getLocation = () =>{
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
          (position)=>{
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error)=>{
            console.error('cannot find location',error);
          }
        )
      }else{
        console.error('Geolocation is not supported by this browser.');
      }
    };
    getLocation();

    
    // 카카오 맵 API
    let infowindow = new kakao.maps.InfoWindow({zIndex: 1});
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),//현재위치 입력
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        setPlaces(data)
        console.log(Places)
      }
    }

    

    // 지도 마커 표시 
    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트 등록
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭시 장소명 인포윈도우에 표출
        infowindow.setContent(
          '<div style="padding:5px;font-ize:12px;">' +
            place.place_name +
            '</div>'
        );
        infowindow.open(map, marker);
      });
    }
  }, [searchPlace,latitude,longitude]);

  return (
    <>
    <div
      id="myMap"
      style={{
        width: '500px',
        height: '500px',
      }}
    ></div>
    <div id="result-list">
        {Places.map((item, i) => (
          <div key={i} style={{ marginTop: '20px' }}>
            <span>{i + 1}</span>
            <div>
              <h5><a href={item.place_url}>{item.place_name}</a></h5>
              {item.road_address_name ? (
                <div>
                  <span>{item.road_address_name}</span>
                  <a href={item.place_url}></a>
                  <span>{item.address_name}</span>
                </div>
              ) : (
                <span>{item.address_name}</span>
              )}
              <span>{item.phone}</span>
            </div>
          </div>
        ))}
        <div id="pagination"></div>
      </div>
      </>
  );
};

export default MapContainer;


// import React, { useEffect, useState } from 'react';

// const { kakao } = window;

// const MapContainer = ({ searchPlace }) => {
//   const [places, setPlaces] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const mapRef = React.useRef(null); // useRef를 사용하여 지도 DOM 엘리먼트를 참조합니다.

//   useEffect(() => {
//     const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
//     const markers = [];
//     const options = {
//       center: new kakao.maps.LatLng(33.450701, 126.570667),
//       level: 3,
//     };
//     const map = new kakao.maps.Map(mapRef.current, options); // useRef로 참조한 지도 DOM 엘리먼트를 전달합니다.

//     const ps = new kakao.maps.services.Places();

//     ps.keywordSearch(searchPlace, placesSearchCB);

//     function placesSearchCB(data, status, pagination) {
//       if (status === kakao.maps.services.Status.OK) {
//         const bounds = new kakao.maps.LatLngBounds();

//         data.forEach((place) => {
//           displayMarker(place);
//           bounds.extend(new kakao.maps.LatLng(place.y, place.x));
//         });

//         map.setBounds(bounds);
//         setCurrentPage(pagination.current);
//         setPlaces(data);
//       }
//     }

//     function handlePageClick(pageNumber) {
//       ps.keywordSearch(searchPlace, (data, status, pagination) => {
//         if (status === kakao.maps.services.Status.OK) {
//           const bounds = new kakao.maps.LatLngBounds();

//           data.forEach((place) => {
//             displayMarker(place);
//             bounds.extend(new kakao.maps.LatLng(place.y, place.x));
//           });

//           map.setBounds(bounds);
//           setCurrentPage(pageNumber);
//           setPlaces(data);
//         }
//       });
//     }

//     function displayMarker(place) {
//       const marker = new kakao.maps.Marker({
//         map: map,
//         position: new kakao.maps.LatLng(place.y, place.x),
//       });

//       kakao.maps.event.addListener(marker, 'click', function () {
//         infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
//         infowindow.open(map, marker);
//       });
//     }
//   }, [searchPlace]);

//   return (
//     <div>
//       <div
//         ref={mapRef} // useRef로 참조한 DOM 엘리먼트를 ref로 설정합니다.
//         style={{
//           width: '500px',
//           height: '500px',
//         }}
//       ></div>
//       <div id="result-list">
//         {places.map((item, i) => (
//           <div key={i} style={{ marginTop: '20px' }}>
//             <span>{i + 1}</span>
//             <div>
//               <h5>{item.place_name}</h5>
//               {item.road_address_name ? (
//                 <div>
//                   <span>{item.road_address_name}</span>
//                   <span>{item.address_name}</span>
//                 </div>
//               ) : (
//                 <span>{item.address_name}</span>
//               )}
//               <span>{item.phone}</span>
//             </div>
//           </div>
//         ))}
//         <div id="pagination">
//           {Array.from({ length: pagination.last }).map((_, i) => (
//             <a
//               key={i}
//               href="#"
//               className={currentPage === i + 1 ? 'on' : ''}
//               onClick={() => handlePageClick(i + 1)}
//             >
//               {i + 1}
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MapContainer;