const shortid = require('shortid');
const URL = require("../Models/url");


async function genNewUrl(req, res) {

    const body = req.body;

    if (!body.url)
        return res.status(400).json({ error: "url is required" });

    const shortID = shortid();
    await URL.create({
        shortId: shortID,
        redUrl: body.url,
        visitHistory: [],
    });

    return res.json({ id: shortID });
}

module.exports = genNewUrl;