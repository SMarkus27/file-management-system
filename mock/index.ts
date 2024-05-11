import cors from "cors";
import express from "express";
import {filesRouter} from "./src/routes/files/route";

const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/v1/", filesRouter)
app.listen(3001, () => {
    console.log("Server running on PORT 3000")
})