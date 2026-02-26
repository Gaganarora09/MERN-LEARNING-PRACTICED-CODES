//Data base connection //Data base initialization
const db=require("mongoose");
const Schema=db.Schema;
const ObjectId=db.ObjectId;

const User=new Schema({
    name:String,
    email:String,
    password:String
})

const Todo=new Schema({
    title:String,
    status:Boolean,
    userId:ObjectId
})

const UserModel=db.model('users',User);
const TodoModel=db.model('todo',Todo);

module.exports={
    UserModel:UserModel,
    TodoModel:TodoModel
}