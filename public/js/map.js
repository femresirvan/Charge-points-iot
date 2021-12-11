async function initMap() {
    const istanbul = {
        lat: 40.9969423,
        lng: 29.0789563
    };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: istanbul,
    });
    let marker1 = new google.maps.Marker({
        position: {
            lat: 41.515137,
            lng: 28.979530
        },
        map: map
    });



    let InfoWindow1 = new google.maps.InfoWindow({
        content: `Sensorid: b\nVoltage: 0\nFlame: 0`
    });

    marker1.addListener('click', function () {
        InfoWindow1.open(map, marker1);
    });

    let data;

    const result = await axios.get('/api/points').then((docs) => {
        // console.log(docs.data.data);
        data = docs.data.data;

    }).catch(err => console.log(err))
    console.log(data);
    let markers = new Array();
    // data[0].locationx = Number(data[0].locationx)

    for (var i = 0; i < data.length; i++) {
        // console.log(data);
        markers[i] = new google.maps.Marker({
            position: {
                lat: data[i].locationx,
                lng: data[i].locationy
            },
            map: map
        });
    }

    
    socket.on('istasyon', (message) => {
        console.log(message);

    })
}