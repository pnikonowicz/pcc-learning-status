const fs = require('fs')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3002
const homeServiceUrl = process.env.HOME_SERVICE || "http://localhost:3000"

app.get('/', cors({origin: homeServiceUrl, credentials: true}), function (req, res) {
    fs.readFile('app.html', (err, html) => {
        if (err) throw err

        res.send(html.toString())
    })
})

app.listen(PORT,function(){
    console.log('Server is running at PORT:',PORT);
});
