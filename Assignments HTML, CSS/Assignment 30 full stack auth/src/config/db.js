const mongoose = require('mongoose');

module.exports = async ()=>{

    try {
        await mongoose.connect(process.env.mongodb_uri);
        console.log('connected to db');   

    } catch (err) {
        console.log(err.message);
        process.exit(1)
}
}