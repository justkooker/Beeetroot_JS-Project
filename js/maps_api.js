'use strict';

function initMap() {
    const center = $(window).width() > 768? new google.maps.LatLng(50.36968457809214, 30.683847138131):new google.maps.LatLng(50.4077310072876, 30.61236895693407);
    const point = new google.maps.LatLng(50.4077310072876, 30.61236895693407);
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "fc7ec2deeb9b1e25",
        zoom: 12,
        center: center,
        disableDefaultUI: true,
    });

    const imgMarker = './assets/svg/map-marker.svg';
    new google.maps.Marker({
        position: point,
        icon: imgMarker,
        anchor: point,
        map: map,
        width: '12px'
    });
}

window.initMap = initMap;