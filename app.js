const express = require("express")
const app = express()
const Products = require("./product")
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
require('./conn')
const path = require('path');
app.use(express.static(path.join(__dirname,'public')))


app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'register.html'))
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'home.html'))
})
 app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'login.html'))
 })


app.post('/register', async (req, res) => {
    
    const data = {
        
        username: req.body.username,
        password: req.body.password
    }
        await Products.insertMany([data])
        res.send('home') 
})

app.post('/login', async (req, res) => {
    try {
        const check = await Products.findOne({username: req.body.username })
        if (check.password === req.body.password) {
            res.send('home')
        }
        else {
            res.send("incorrect password")
        }
    } 
    catch (e) {
        res.send("wrong details")
        console.log(e);
    }
})
app.listen(2300, () => {
    console.log('port connected');
})



