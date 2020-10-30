const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const cors = require('cors');
const Contact = require('./models/Contact')
const ContactRouter = require('./routes/contactRouter')(Contact)

const app = express();
// body parser
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
// load the config
dotenv.config({ path: './config/config.env'});
connectDB();
// middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('we are on home')
})

// routes
app.use('/api', ContactRouter);
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running on port ${PORT}`))