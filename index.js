const express = require('express')
const app = express()
app.get('/',(req, res) => res.sendFile(__dirname+'/index.html'))
app.use("/css", express.static(__dirname + "/css"));

app.get('/invite', (req, res) => res.redirect('https://discord.com/oauth2/authorize?client_id=876828669522374696&scope=applications.commands%20bot&permissions=27648860222')

    )
    
app.listen(3000)
