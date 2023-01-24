import { connect, set } from "mongoose";
import { MONGODB_URI } from "./config";

(async () => {
  try {
    set("strictQuery", true);
    const db = await connect(MONGODB_URI);
    console.log("Database is connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
