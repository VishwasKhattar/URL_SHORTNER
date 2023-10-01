const express = require("express");

//Getting Database Connected
require('./conn');

const app = express();
const PORT = 1234;

const URL = require('../Url_Shortner/Models/url');
const urlRoute = require("../Url_Shortner/routes/url");

app.use(express.json());


app.use("/url", urlRoute);

//Displaying Newly Created URL from Short ID
app.get('/:shortID', async(req, res) => {
    const shortId = req.params.shortID;
    const data = await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visitHistory : {
                timeStamp : Date.now(),
                }, 
            },
        }
    );

    res.redirect(data.redUrl);
})


app.listen(PORT, () => { console.log("Server started") });