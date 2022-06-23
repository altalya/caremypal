import { Schema, model, models } from 'mongoose';

const workForceSchema = new Schema({
  name: String,
  phone: Number,
});

const Session = models.Test || model('cmpworkforces', workForceSchema);

export default Session;
