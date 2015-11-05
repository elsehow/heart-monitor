var SerialPort = require("serialport").SerialPort
  , Kefir = require('kefir')
  , request = require('request-json')
  , client = request.createClient('http://indra.webfactional.com')
  , post = function (b) { 
      var d = {
        type: 'heartrate',
        ibi: b
      }
      client.post('/', d, function () {}) 
    }

//var serialPort = new SerialPort("/dev/tty.usbmodem1421", {
var serialPort = new SerialPort("/dev/ttyACM0", {
  baudrate: 115200
});

function stringifyBuff (b) {
  return b.toString()
}

serialPort.on("open", function () {
  readings = Kefir.fromEvents(serialPort, 'data')
  readings.map(stringifyBuff).log().onValue(post)
})
