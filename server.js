const express = require('express')
const app = express()

const shows = {
    'bridgerton': {
        seasons: 2,
        releaseYear: 2020,
        genre: "Romance"
    },
    'the white lotus': {
        seasons: 2,
        releaseYear: 2021,
        genre: "Comedy drama"
    },
    'the resort': {
        seasons: 1,
        releaseYear: 2022,
        genre: ["Comedy drama", "Mystery"]
    },
    'unknown': {
        seasons: "unknown",
        releaseYear: "unknown",
        genre: "unknown"
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) =>{
    const showName = req.params.name.toLowerCase()
    if (shows[showName]){
        res.json(shows[showName])
    } else {
        res.json(shows.unknown)
    }
})

const PORT = 8000
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}. You better go catch it!`)
})