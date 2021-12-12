async function initMap() {
    // let locationX;
    // let locationY;

    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    // } else {
    //     alert("Geolocation is not supported by this browser.");
    // }
    // function showPosition(position) {
    //     locationX = position.coords.latitude;
    //     locationY = position.coords.longitude;
    // }
    const istanbul = {
        lat: 41.0097636,
        lng: 28.804111
    };

    const imageFull = "https://img.icons8.com/color/48/000000/marker--v1.png";
    const imageFree = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFDUlEQVRogdWZW2xUVRSGv3VmWtomBUwwJqUzQmGmFVDjJVYTookgAokSotEHE4OKhgQEwUtLpzUVWi6R8KQxGPtgTHioPAgPYAIBAxGU9MFIymVahHamNIhR0EBpO3OWD3JR7Dmzzsxg4v82Wf9a6/+z19lz9j7wP4cUq1Bbb1VE3PACVXe2iMwEosBEQIGLCH2qdDuih0JZ2dNQlzpXjL4FG9jYWz1fXWlQeBxwjGku6AEXZ1NLvH9fIf3zNrCxt3q+68oHwCOFCAA54sL7+RoJbGDT6ZoJbjbzsaIv5dPQCwqfl7hDbzbU/fJHkLxABtafro45WXaB1AWTZ8Zxx9FFa6ene60JZgPrTlTfGwrJXuCuvKTZMejizGmJ952wkE0GNp+MVGUcvgeqC5Jmx7mwuPUNsYF0LmLOXWNb10MlmRA7+e/EA1Rl1NnReoBwLmJOAxcqLzSjPFwcXYFQXzI5sjYXyXeENp2uimazoVNAmbWrCMdUpSMr7Cu/MnwWYKhi3JSQMhd0KTDLWgu4oqrx5tr0gBfBd4mymVADYhY/LMLqkempba2Ce0usG+juVD7qSUaWIWwFSg01KxzhPWCVF8FzBTafnFSZcSoGQCst4nHcBYnpAwcMXNafvPtJx3H3YDNxqXRoZPK795+/PFbQ8xkYdcrmGcWj8JZVPEBLXd9+VX3bSJ8wXFE61yvoaUCQpyzVRTiWiaU+NYq5gXg8/Yn8NVq5eyhPe8X8dqEHLMVdlc/GmPmceEHIqtBhIgv3eYX8DEy11HaE/N8mhb0WmrpM8+zvkzfeUnxkZKjfwhsL4cxQn4Unwh1eMT8DWUvx8pDm/Uo+FJpozR31CvgZ+NlSORuqiBhF/AslMhw1Uj21+BkwjYYqpt1q7GRjrornqHkbEL41qljaqYRs3JvoVEIoS01k0cNeIW8Drh4yapnVk4wsM3JvINkTXQ7MMJEFTy2eBiqdsv3Ab8YGW9tPReeYuMD6ZHSuoFuM9F9HR8Z7/st7GlgZ6x1WkR3GJqWI7m47Vb3Cb5w6lVBbMrrSQXcDJcbaX7bO7B7xCvpuYxuS1fWKfGdsdL1gtwodCHtHh6+eBSgZVzZFs8wT4TWsY3MNqlrfXJs+6tPPH+3JyCFgdpCmRcTBRDz1hB8h54lMhA+LpycYVCTnc2L6J2xPRg+DPla4pEA42hRLPSqC+pFMV4GKNhZHUwA4bmMu8WA00BxPHUTZWbgqI4SvrAck62UsoXB2JTDmsa7IuOJmnTVWstlA47Rz/SLSlp+mABBZ11LXd8ZKNxsAGEn3bwE5ElyVEULXpEt3bg2WEhAbk9EaF36wHvgD4LJk3Qeb7hlIBkkKtAIAa+P9PwHvBM3LBVFdHVQ8FPCBoz0Z2QU8k2/+36HK14l4aqFl27wVgVfgBsLh14HBvPNvYlBKwkvyEQ8FGEjUnDkv4j4HeL4pGjAqyouJmjPn8y2Q/woATbGBIyjmPftWiLCqqTZlPTiNXaOQ5OtoT0Y6gFeD5KjqF8216ZcL7V3QClxHebmuQOgyJwhdmdLwG8XoXRQDayLpIUadZ1G1XFQNhHEXt049e7UYvYtiACAxo29QHGchcNGH9juuLrR8+7KiaAYAmmL9x13RxYy9M42CPJ+oS/9YzJ5FNQDQEkt/A/oK/OPG2gVdkoj3my5zg6DoBgAS8fR2EVZc+6kKyxPx9Pbb0eu2YkNPtHFDT/S2nub+BDilnuUsAD9+AAAAAElFTkSuQmCC"

    // const currentLocation = {
    //     lat: locationX,
    //     lng: locationY
    // }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: istanbul,
    });

    let data;
    if(sonuc){
        data = sonuc.data.data; 
    }else{
        const result = await axios.get('/api/points').then((docs) => {
            // console.log(docs.data.data);
            data = docs.data.data;
    
        }).catch(err => console.log(err)) 
    }
    
    // console.log(data);
    let markers = new Array();
    let infoWindows = new Array();
    let state;
    for (var i = 0; i < data.length; i++) {
        
        for (var j = 0; j < data[i].slots.length; j++) {
            if(!data[i].slots[j].isFull){state = true; break;} 
            else state = false;
        }

        if(state){
            markers[i] = new google.maps.Marker({
                position: {
                    lat: data[i].locationx,
                    lng: data[i].locationy
                },
                map: map,
                title: data[i].name,
                icon: imageFree
            });
        }else{
            markers[i] = new google.maps.Marker({
                position: {
                    lat: data[i].locationx,
                    lng: data[i].locationy
                },
                map: map,
                title: data[i].name,
                icon: imageFull
            });
        }
        

        markers[i].index = i; //add index property
        markers[i]._id = data[i]._id;
        let content;
        content = "<div>\n"
        content += `${data[i].name}</br>`;
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
            if(markers[i]._id == message._id){
                
                for (var j = 0; j < message.slots.length; j++) {
                    if(!message.slots[j].isFull){state = true; break;} 
                    else state = false;
                }
                console.log(state);
                if(state) markers[i].setIcon(imageFree);
                else markers[i].setIcon(imageFull);
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
        }
    })
}