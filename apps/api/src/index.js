import express from 'express'

const app = express();

app.get("/test", (req, res) => {
    res.json({
        msg: "ok"
    })
})

app.listen(8080, () =>{
    console.log("App started on port 8080");
})