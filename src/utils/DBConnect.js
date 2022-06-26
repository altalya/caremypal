import mongoose from 'mongoose';

const ConnectDB = async () =>
  mongoose.connect(
    'mongodb+srv://systems:Vanguard23@cmp.9tzmo.mongodb.net/CMP?retryWrites=true&w=majority'
  );

export default ConnectDB;
