import { Schema, model } from 'mongoose';

const workForceSchema = new Schema({
  fname: String,
  prof: String,
  phone: Number,
  wh: String,
  city: String,
  field: String,
  cook: String,
});

// const Session = models.Test || model('cmpworkforces', workForceSchema);

let Session;
try {
  Session = model('cmpworkforces');
} catch (error) {
  Session = model('cmpworkforces', workForceSchema);
}

const Doc = Session;

export default Doc;
