const express = require("express");
const userRouter = require("./Routes/user");
require('./db/Index');

const app = express();


app.use(express.json());
app.use("/api/user",userRouter);

app.get("/about" , (req,res) => {
    res.send("<h1>hello i am from backened<h1>");



} );

app.listen(8000, () => {

    console.log(" the port is listening on port 8000");
});