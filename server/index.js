// const express = require('express')
// const app = express()
// const cors = require("cors");
// app.use(express.json())
// app.use(cors())
// const port = process.env.PORT || 1337;

// const URI = "mongodb+srv://nidhi_trial:nidhi@cluster0.i31xu.mongodb.net/sample_guides?retryWrites=true&w=majority"
// const mongoose = require('mongoose');
// const listingsAndReviews = require('./model/listingsAndReviews');

// try{
//     mongoose.connect(
//     URI, {useNewUrlParser: true, useUnifiedTopology: true },
//     () => {console.log(" Mongoose is connected")
//             // console.log(client)
// });
//     }catch(e){
//         console.log("ERROR!");
//     }
// let alldata;

// app.get("/api/info", (req, res)=>{
//     // console.log(alldata)
//     // console.log("in heree")
//     try{
//         return res.send({success: true, alldata: alldata})
//     }catch(exception){
//         return res.send({success: false});
//     }
// })

// setTimeout(async()=>{
//     // const data = mongoose.connection;
//     // console.log(data.models);
//     alldata = await listingsAndReviews.find();
//     // console.log(alldata)

// }, 5000)

// app.get("/", (req, res)=>{
//     res.send({success: true, msg: "Hello World"});
// })

// // heroku

// if (process.env.NODE_ENV == "production"){
//     app.use(express.static("frontend/build"));
// }

// app.listen(port, ()=>{
//     console.log(`Server started on ${port}`)
// })


const express = require('express')
const app = express()
const cors = require("cors");
app.use(express.json())
app.use(cors())
app.use(express.static(__dirname + "/frontend/build"));

const port = process.env.PORT || 1337;

const URI = "mongodb+srv://nidhi_trial:nidhi@cluster0.i31xu.mongodb.net/sample_guides?retryWrites=true&w=majority"
const mongoose = require('mongoose');
const listingsAndReviews = require('./model/listingsAndReviews');

try{
    mongoose.connect(
    URI, {useNewUrlParser: true, useUnifiedTopology: true },
    () => {console.log(" Mongoose is connected")
            // console.log(client)
});
    }catch(e){
        console.log("ERROR!");
    }


app.get("/api/info",async (req, res)=>{
    // console.log(alldata)
    console.log("in heree")
    try{
        let alldata = await listingsAndReviews.find();
        return res.json({success: true, alldata: alldata})
    }catch(exception){
        return res.json({success: false});
    }
})

setTimeout(async()=>{
}, 5000)

app.get("/api/", (req, res)=>{
    console.log("BASIC MSG")
    res.send({success: true, msg: "Hello World"});
})

app.get("/*", async (req, res) => {
    console.log("Going through frontend build")
    res.sendFile(process.cwd() + "/frontend/build/index.html");
  });



// heroku

if (process.env.NODE_ENV == "production"){
    app.use(express.static("frontend/build"));
}

app.listen(port, ()=>{
    console.log(`Server started on ${port}`)
})
