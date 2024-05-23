import mongoose from "mongoose";
const MONGO_URL = "mongodb://127.0.0.1:27017/placemark?directConnection=true";
const mongoConnection = {
  isConnected: 0
};
const dbConnect = async () => {
  console.log("MONGO_URL", MONGO_URL);
  if (mongoConnection.isConnected === 1) {
    console.log("already connected");
    return;
  }
  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;
    if (mongoConnection.isConnected === 1) {
      console.log("using existing connection");
      return;
    }
    await mongoose.disconnect();
  }
  await mongoose.connect(MONGO_URL);
  mongoConnection.isConnected = 1;
  console.log("conected to ", MONGO_URL);
};
await dbConnect();
const handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  return response;
};
export {
  handle
};
