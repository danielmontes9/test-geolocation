if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        console.log('Latitud:', latitude);
        console.log('Longitud:', longitude);
    }, function (error) {
        console.log('Error al obtener la ubicación:', error.message);
    });
} else {
    console.log('El navegador no soporta la geolocalización.');
}



var userAgent = navigator.userAgent;
console.log('User Agent:', userAgent);

