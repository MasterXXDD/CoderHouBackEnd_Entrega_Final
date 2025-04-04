import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Stefano:coder123coder123@cluster0.ogvxom8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectado a la BBDD"))
    .catch((error) => console.log("Ocurrio un error", error));