const city = document.getElementById('city-input');
const station = document.getElementById('station-input');
const applyFilter = document.getElementById('apply-filter');
const clearFilter = document.getElementById('clear-filter');
const type1Radio = document.getElementById('type1-radio');
const type2Radio = document.getElementById('type2-radio');
const type3Radio = document.getElementById('type3-radio');
const freeRadio = document.getElementById('free-radio');
const fullRadio = document.getElementById('full-radio');
let sonuc;

applyFilter.addEventListener('click', () => {

    let selectedType;
let selectedSlot;
if (type1Radio.checked) {
    selectedType = type1Radio.value;
}else if (type2Radio.checked) {
    selectedType = type2Radio.value;
}else if (type3Radio.checked) {
    selectedType = type3Radio.value;
}
if (freeRadio.checked) {
    selectedSlot = freeRadio.value;
}else if (fullRadio.checked) {
    selectedSlot = fullRadio.value;
}

let req = {};
if(city.value) {req.city = city.value;
req.city = req.city.toLowerCase();}
if(station.value) {req.name = station.value;
    req.city = req.city.toLowerCase();}
if(selectedType) req.type = selectedType;
if(selectedSlot) req.state = selectedSlot;

    axios.get('/api/points', { params: req }).then((res) => {
        sonuc = res;
        console.log(res);
        initMap();
        
    }).catch((err) => {
        console.log(err);
    });
})
clearFilter.addEventListener('click', () => {
    sonuc = undefined;
    initMap();
    city.value = "";
    station.value="";
    type1Radio.checked = false;
    type2Radio.checked = false;
    type3Radio.checked = false;
    freeRadio.checked = false;
    fullRadio.checked = false;
})