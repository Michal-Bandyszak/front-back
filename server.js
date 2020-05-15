const http = require('http');
//import http from 'http';   --> pierwsze pytanie czy node to juz //wspiera i czy tak robiły.
const fs = require('fs');

fs.readFile('index.html', (err, html ) => {
    if(err){
        throw err;
    }
    
    const server = http.createServer((request, response) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write(html);
        response.end();
    });

    server.listen(5400, '127.0.0.1', () => console.log("serwer wystartował"))
});
 

const users = [
    {
      id: 1,
      avatar: {
        id: 1,
        title: "avatar1",
        url: "https://google.com"
      },
      email: "asd@gmail.com",
      profile: {
        name: "Jan",
        surname: "Niezbedny"
      }
    },
    {
      id: 2,
      avatar: {
        id: 2,
        title: "avatar2",
        url: "https://google.com"
      },
      email: "zbychu@wp.pl",
      profile: {
        name: "Zbychu",
        surname: "Ciemiezny"
      }
    },
    {
      id: 3,
      avatar: {
        id: 3,
        title: "avatar3",
        url: "https://google3.com"
      },
      email: "rysiu@gmail.com",
      profile: {
        name: "Rysiu",
        surname: "Włodarczyk"
      }
    },
    {
      id: 4,
      avatar: {
        id: 4,
        title: "avatar4",
        url: "https://google4.com"
      },
      email: "brachu@gmail.com",
      profile: {
        name: "Adam",
        surname: "Adamiak"
      }
    }
  ];
