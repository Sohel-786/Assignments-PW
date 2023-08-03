const mongoose = require('mongoose');
const http = require('http');

const connect = ()=>{
    return mongoose.connect('mongodb+srv://ss1036425:Ugd6dMQIgQVhVNPY@products.v1gygmp.mongodb.net/products?retryWrites=true&w=majority');
}

const productSchema = mongoose.Schema({
    id: {type:Number, required:true},
    name: {type:String, required:true},
    brand: {type:String, required:true},
    price: {type:Number, required:true},
    color: {type:String, required:true},
    size: {type:String, required:true},
    gender: {type:String, required:true},
    category:{type:String, required:true}
}, {
    versionKey:false,
});

const Pro_info = mongoose.model('pro_info',productSchema);

const server = http.createServer( (req,res)=>{
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Welcome to Men & Women Dummy Data</h1>')
    }

    else if(req.url == '/men'){

        try{

            async function getData(){
                let pro_info = await Pro_info.find({gender:'Male'}, {_id:0, gender:0}).limit(10).lean().exec();
                
                console.log(pro_info);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(pro_info));
            }

            getData();

        }catch(err){
            res.end('Some Error Occured');
        }
        
    }

    else if(req.url == '/women'){

        try{

            async function getData(){
                let pro_info = await Pro_info.find({gender:'Female'}, {_id:0, gender:0}).limit(10).lean().exec();
                
                console.log(pro_info);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(pro_info));
            }

            getData();

        }catch(err){
            res.end('Some Error Occured');
        }
        
    }

    else if(req.url == '/other'){
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1 style="color:red">page not found</h1>')

    } 
    
    else {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1 style="color:red">page not found</h1>')
    }
})

server.listen(2345,()=>{
    connect();
    console.log('Listening on 2345 ☺');
})