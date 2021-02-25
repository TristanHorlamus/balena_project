var five = require('johnny-five');
var BeagleBone = require('beaglebone-io');

var board = new five.Board({
  io: new BeagleBone()
});

board.on("ready", () => {
  // This requires OneWire support using ConfigurableFirmata
  const thermometer = new five.Thermometer({
    controller: "DS18B20",
    pin: 'P9_12'
  });

  thermometer.on("change", () => {
    const {address, celsius, fahrenheit, kelvin} = thermometer;
    console.log(`Thermometer at address: 0x${address.toString(16)}`);
    console.log("  celsius      : ", celsius);
    console.log("  fahrenheit   : ", fahrenheit);
    console.log("  kelvin       : ", kelvin);
    console.log("--------------------------------------");
  });
});
