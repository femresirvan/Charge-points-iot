const mqtt = require('mqtt');
const Point = require('../models/point');
const chalk = require('chalk');
class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = 'mqtt://broker.hivemq.com';
    // this.username = 'YOUR_USER'; // mqtt credentials if these are needed to connect
    // this.password = 'YOUR_PASSWORD';
    this.topic = 'deneme';
  }
  
  connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(this.host);

    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log('%s MQTT client connected.', chalk.yellow('✓'));
    });

    // mqtt subscriptions
    this.mqttClient.subscribe(this.topic, {qos: 0});

    // When a message arrives, console.log it
    this.mqttClient.on('message', async (topic, message) => {
      message = JSON.parse(message.toString());
      console.log(message);
      try{
        const filter = { '_id': message._id , 'slots.slotName': message.slotName};
        const update = {'$set': {'slots.$.isFull': message.isFull}};
        let doc = await Point.updateOne(filter, update);
        console.log(doc);
        let result = await Point.findOne({'id': message._id});
        const io = require('../configs/socketio').getIO();
        io.emit('istasyon',result);
      }catch(err){
        console.error(err);
      }
      
      
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to spesific topic
  sendMessage(message) {
    this.mqttClient.publish(this.topic, message);
  }
}

module.exports = MqttHandler;