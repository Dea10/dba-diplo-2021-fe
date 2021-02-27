const axios = require('axios');

export const stopDaemon = () => {
    axios.get('http://192.168.100.56:3000/stopDaemon')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log('DAEMON STOP INTENT!');
      });
}

export const startDaemon = () => {
    axios.get('http://192.168.100.56:3000/startDaemon')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log('DAEMON RISE INTENT!');
      });
}