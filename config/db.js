const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log(`Connected Successfully ${mongoose.connection.host}`);
}).catch((err)=>{
    console.log(err.message);
})