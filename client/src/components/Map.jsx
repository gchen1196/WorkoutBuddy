import React from 'react';
import GoogleMap from './GoogleMap.jsx';
import data from '../../../database/sample.js';

const Map = (props) => {

  const addMarkers = data => map => {
    data.businesses.forEach((gym, index) => {
      const marker = new window.google.maps.Marker({
        map,
        position: { lat: gym.coordinates.latitude, lng: gym.coordinates.longitude },
        label: `${index + 1}`,
        name: gym.name,
        key: gym.id,
        photo: gym.image_url,
        address: gym.location.display_address.join(' ')
      })
      marker.addListener(`click`, () => {
        props.getGymInfo(marker.key, marker.name, marker.address, marker.photo);
      })
    })
  }

  var mapProps = {
    options: {
      center: { lat: 37.774929, lng: -122.419418 },
      zoom: 13,
    },
    onMount: addMarkers(data),
    className: 'google-maps'
  }



  return (
    <GoogleMap {...mapProps} />
  )
}

export default Map; 