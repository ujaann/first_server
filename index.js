const express=require('express');
const connectDB = require('./config/db');
const app = express();
const userRoute=require('./routes/user_route');

const PORT = 5000;

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));  

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());

app.use('/user',userRoute);