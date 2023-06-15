if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        console.log('Latitud:', latitude);
        console.log('Longitud:', longitude);

        var element_lat = document.querySelector('.container_lat');
        element_lat.innerHTML = `<p>Latitud: ${latitude}</p>`;

        var element_lon = document.querySelector('.container_lon');
        element_lon.innerHTML = `<p>Longitud: ${longitude}</p>`;

    }, function (error) {
        console.log('Error al obtener la ubicación:', error.message);

        var element_lon = document.querySelector('.container_error');
        element_lon.innerHTML = `<p>Error, no estoy funcionando :(</p>`;
    });
} else {
    console.log('El navegador no soporta la geolocalización.');
}



var userAgent = navigator.userAgent;
console.log('User Agent:', userAgent);


