const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const expenseRoutes = require('./routes/expenseRoutes');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

app.use('/api', expenseRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
