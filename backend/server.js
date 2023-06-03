const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//env config
dotenv.config();

const userRouter = require("./routes/userController");
const blogsRouter = require("./routes/blogController");

//DB connection
connectDB();
const app = express();

//middleweres

app.use(cors());
app.use(express.json());

//Routes

app.use("/user", userRouter);
app.use("/blog", blogsRouter);
//Port
const PORT = process.env.PORT || 8080;
//Listen
app.listen(PORT, () => {
  console.log(`Server is running on port no. ${PORT}`);
});
