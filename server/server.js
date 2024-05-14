// password  - ZpnMrGA5uyspLnnn
// username - shrishti0301
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

var router = express.Router();
router.use(express.static(__dirname+"./public/"));

const PORT = 5000;


app.use(bodyParser.json());
app.use(cors());

var corsOptions = {
	origin: "http://localhost:3000",
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

mongoose.connect(
  'mongodb+srv://shrishti0301:ZpnMrGA5uyspLnnn@cluster0.ad1gnwm.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;
connection.on('open', () => {
  console.log('Connected to MongoDB');
});

const PeopleSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  speciality:{
    type:String,required:true,
  },
  contact:{
    type:Number,required:true,
  },
  email:{
    type:String,required:true,
  },
  caption:{
    type:String,
  },
  details:{
    type:String, required:true,
  },
  image:{
    type:String,
  }
})

//  const userSchema = new mongoose.Schema({
// 	name: { type: String, required: true },
// 	email: { type: String, required: true },
// 	password: { type: String, required: true },
// 	//token:{ type: String, required: true },
// });

const People = mongoose.model("People", PeopleSchema);

app.post("/people", cors(corsOptions),async(req,res) =>{
  const {name, speciality, contact, email, caption, details,image} = req.body;
  console.log(req.body);
  const newPeople = new People({
    name:name,
    speciality:speciality,
    contact:contact,
    email:email,
    caption:caption,
    details:details,
    image:image.myFile
  });
  try{
    res.json("newPerson");
    const response = await People.create(newPeople);
    console.log(response);
  }catch(error){
    res.json("alreadyexist")
  }
});


app.get('/api/data', cors(corsOptions),async (req, res) => {
  try {
    const data = await People.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});



//newshrisht
// shrishtinew03
app.listen(5000, () => {
  console.log(`Server is running on 5000`);
});
