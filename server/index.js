const express = require("express");
const app = express();
const cors = require("cors");

//Middlewares
app.use(cors());
app.use(express.json());

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}...`);
})