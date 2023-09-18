import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:presentedeDeus23@cluster0.qgnoo6v.mongodb.net/ehoje");
// A função connect guarda a string de conexão dentro dos parênteses.

let db = mongoose.connection;
//Agora criamos uma variável que guarda a ação de conectar nosso usuário com o mongoDB.

export default db;
