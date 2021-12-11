const mqttHandler = require('../utils/mqtt_handler');

var mqttClient = new mqttHandler();
mqttClient.connect();

// mqttClient.sendMessage('hayırdır oglem');