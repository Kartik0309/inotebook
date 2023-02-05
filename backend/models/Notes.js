import mongoose from 'mongoose';
const { Schema } = mongoose;

const NotesSchema = new Schema({
  title:{
    type: 'string',
    required: true,
  },
  description:{
    type:string,
    required: true,
  },
  tag:{
    type:string,
    default:'General'
  },
  date:{
    type:date,
    default:Date.now
  },
});
modulde.exports=mongoose.model('notes',NotesSchema);