const express = require('express')
const app = express()
app.get('/',(req, res) => res.sendFile(__dirname+'/index.html'))
app.use("/css", express.static(__dirname + "/css"));

app.get('/invite', (req, res) => res.redirect('https://discord.com/oauth2/authorize?client_id=876828669522374696&scope=bot%20applications.commands&permissions=805314622')

    )
    
app.listen(3000)
