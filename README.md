# heart-monitor

here are some tools for reading data from the [amped pulse sensor](https://www.adafruit.com/products/1093)

## arduino

this .ino will read the IBI (inter beat interval) over the serial whenever a new value is calculated, usually about once per second.

load this script onto your board in the usual way.

## node

this script reads the data over serial and pushes it over [indra](http://github.com/indra-net/collection-server)

to run,

   npm install
   npm start

## python

this script uses pyserial to read the data over the serial port. good for exploration/tinkering
