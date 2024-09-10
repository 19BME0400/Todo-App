const mongoose = require("mongoose");


main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb+srv://shailesh6394514503:0xpk2YbrqcH08qBq@cluster0.fev23.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}; 

// "mongodb://127.0.0.1:27017/todo_list_db"