import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

mongoose.connect('mongodb://0.0.0.0:27017/');

const UserSchema = new mongoose.Schema({
  name : {type : String, unique:true},
  email: String,
  password : String
})

const User = mongoose.model('users',UserSchema);
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json())

async function addUser(userData){
  try{
    const user = new User(userData);
    await user.save();
  }
  catch(e){
    console.log(e.message);
    return false;
  }
  return true;
}

async function getUser(name){
  let user={};
  try{
    user = await User.findOne({ name: name });
  } catch(e){
    console.log(e.message);
  }
  return user;
}

app.get('/',(req,res)=>{
  res.send("App is working");
})

//   /login/?userName = {whatever} ...
app.post('/login', async (req, res) => {
  const userName = req.body.name;
  const user = await getUser(userName);
  if(user)
    console.log(user);
  else
    console.log('Invalid username')
  if(user && req.body.password !== user.password){
    console.log("Wrong password!")
    res.send(false);
  }
  else res.send(user ? true : null); // if false , wrong credentials if null, username doesnt exists.
});

app.post('/signup',async (req,res) => {
  const userData = req.body;
  const response = await addUser(userData)
  if(response)
    console.log(`User with name ${userData.name} added to the database!`)
  res.send(response);
})

// Start the server 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
