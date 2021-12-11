async function initMap() {
    const istanbul = {
        lat: 40.9969423,
        lng: 29.0789563
    };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: istanbul,
    });

    let data;

    const result = await axios.get('/api/points').then((docs) => {
        // console.log(docs.data.data);
        data = docs.data.data;

    }).catch(err => console.log(err))
    // console.log(data);
    let markers = new Array();
    let infoWindows = new Array();
    for (var i = 0; i < data.length; i++) {
        markers[i] = new google.maps.Marker({
            position: {
                lat: data[i].locationx,
                lng: data[i].locationy
            },
            map: map,
            title: "SA"
        });

        markers[i].index = i; //add index property
        markers[i]._id = data[i]._id;
        let content;
        content = "<div>\n"
        content += `Name: ${data[i].name}</br>`;
        content += `Charge Type: ${data[i].type}</br>`;
        for (var j = 0; j < data[i].slots.length; j++) {

            content += `SlotName: ${data[i].slots[j].slotName}`;
            if (data[i].slots[j].isFull) content += `<span style="color:red;"> State: Full</span></br>`;
            else content += `<span style="color:green;"> State: Free</span></br>`;
        }
        content += "</div"
        infoWindows[i] = new google.maps.InfoWindow({
            content: content,
            maxWidth: 300
        });

        google.maps.event.addListener(markers[i], 'click', function () {
            infoWindows[this.index].open(map, markers[this.index]);
            map.panTo(markers[this.index].getPosition());
        });
    }

    socket.on('istasyon', (message) => {
        console.log(message);
        for (var i = 0; i < markers.length; i++) {
            markers[i]._id = message._id;

            content = "<div>\n"
            content += `${message.name}</br>`;
            content += `Charge Type: ${message.type}</br>`;
            for (var j = 0; j < message.slots.length; j++) {

                content += `SlotName: ${message.slots[j].slotName}`;
                if (message.slots[j].isFull) content += `<span style="color:red;"> State: Full</span></br>`;
                else content += `<span style="color:green;"> State: Free</span></br>`;
            }
            content += "</div"
            infoWindows[i].setContent(content);


            // google.maps.event.addListener(markers[i], 'click', function() {

            //         infoWindows[this.index].close();

            //     infoWindows[this.index].open(map,markers[this.index]);
            //     map.panTo(markers[this.index].getPosition());
            // });  
        }
    })
}