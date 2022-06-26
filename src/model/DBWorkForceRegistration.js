import { Schema, model, models } from 'mongoose';

const workForceSchema = new Schema({
  fname: String,
  lname: String,
  phone: Number,
  wh: String,
  city: String,
  field: String,
  type: String,
});

const Session = models.Test || model('cmpworkforces', workForceSchema);

export default Session;
