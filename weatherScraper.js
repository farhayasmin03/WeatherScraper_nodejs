const http = require('http');
const request = require('request');
var fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const apikey = '731c425cebbfb6aff47feacecdb57425';
var city = 'india';
const url = 'http://api.openweathermap.org/data/2.5/weather?q=city&appid=731c425cebbfb6aff47feacecdb57425';



const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('index.html', function (err, data) {
        myReadStream = fs.createReadStream('weather.html', 'utf8');
        myReadStream.pipe(res);

    });

    request(url, function (err, response, body) {

        if (err) {
            console.log('error:', error);
        } else {

            var weatherArray = JSON.parse(body);
            console.log(weatherArray);
            res.write('Temperature:' + weatherArray.main.temp + '</br>');
            res.write('Pressure:' + weatherArray.main.pressure + '</br>');
            res.write('City:' + city);
            res.end();



        }




    });


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});