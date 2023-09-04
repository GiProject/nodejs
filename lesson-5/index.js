const http = require('http')
const url = require('url')
const { apiKey } = process.env
const { config } = require('./config')
const serverPort = process.env.serverPort ? process.env.serverPort : config.port 

const server = http.createServer((req, res) => {
    const urlParsed = url.parse(req.url, true);
    const { query } = urlParsed;
    const city = query.city ? query.city : config.city
    const reqUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`

    res.setHeader('Content-type', 'application/json; charset=utf-8')

    http.get(reqUrl, (reqRes) => {
        const {statusCode} = reqRes
        if (statusCode !== 200) {
            console.log(`Error code: ${statusCode}`)
        }

        reqRes.setEncoding('utf8');
        let result = '';
        reqRes.on('data', (chunk) => {
            result += chunk
        })
        reqRes.on('end', () => {
            res.write(result);
            res.end()
        })
    })
    
});

server.listen(serverPort);

