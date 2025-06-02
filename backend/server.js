require("dotenv").config();

const connectDB=require("./config/db.js");
const adminRoutes = require('./routes/adminRoutes');

connectDB()

const express =require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT;

app.use(express.json());

// Autoriser le frontend à accéder au backend
app.use(cors());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/programs', require('./routes/programRoutes'));
app.use('/api/groups', require('./routes/groupRoutes'));
app.use('/api/admin',    require('./routes/adminRoutes'));
app.use('/api/users', require('./routes/adminRoutes'));


app.listen(port, () => {
    console.log(`Serverur demarre sur le port : ${port}`);
});