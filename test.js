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

        var element_lon = document.querySelector('.container_error');

        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.log("El usuario negó el permiso para obtener la ubicación.");
                element_lon.innerHTML = `<p>El usuario negó el permiso para obtener la ubicación.</p>`;
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("La información de ubicación no está disponible.");
                element_lon.innerHTML = `<p>La información de ubicación no está disponible.</p>`;
                break;
            case error.TIMEOUT:
                console.log("La solicitud para obtener la ubicación ha expirado.");
                element_lon.innerHTML = `<p>La solicitud para obtener la ubicación ha expirado.</p>`;
                break;
            default:
                console.log("Se produjo un error desconocido al obtener la ubicación.");
                element_lon.innerHTML = `<p>Se produjo un error desconocido al obtener la ubicación.</p>`;
                break;
        }


        
    });
} else {
    console.log('El navegador no soporta la geolocalización.');
    var element_lon = document.querySelector('.container_error');
    element_lon.innerHTML = `<p>El navegador no soporta la geolocalización.</p>`;
}



var userAgent = navigator.userAgent;
console.log('User Agent:', userAgent);


