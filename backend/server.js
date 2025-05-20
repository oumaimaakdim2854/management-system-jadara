require("dotenv").config();

const connectDB=require("./config/db.js");
const adminRoutes = require('./routes/adminRoutes');

connectDB()

const express =require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/programs', require('./routes/programRoutes'));
app.use('/api/groups', require('./routes/groupRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

app.listen(port, () => {
    console.log(`Serverur demarre sur le port : ${port}`);
});