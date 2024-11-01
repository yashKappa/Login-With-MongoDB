
/*******************  For Downloaded mongoDB Database ***************

const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/demo")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection

*/

/*******************  For online mongoDB Database ***********************/

const mongoose = require("mongoose");

const uri = "mongodb+srv://yashsaundalkar0:yash%402003@cluster0.zy9sv.mongodb.net/Mongo-Demo?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error('Connection failed:', err);
    });

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("User", newSchema);

module.exports = collection;


