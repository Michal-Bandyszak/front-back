const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
;})

// Gets All Users
app.get('/users', (req, res) => res.json(users));

//Get single user
app.get('/users/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({mag: `No member with the id of ${req.params.id}`})
    }
})

//Update user
app.put('/users/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        const updateUser = req.body;
        users.forEach(user => {
            if(user.id === parseInt(req.params.id)) {
                user.name = updateUser.name ? updateUser.name : user.name,
                user.email = updateUser.email ? updateUser.email : user.email
            }
        })
        // res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({mag: `No member with the id of ${req.params.id}`})
    }
})

const PORT = 5000;

app.listen(PORT, () => console.log(`Server odpalony na porcie ${PORT}`));

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