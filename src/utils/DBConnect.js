import mongoose from 'mongoose';

const ConnectDB = async () => mongoose.connect(process.env.MONGO_URI);

export default ConnectDB;
