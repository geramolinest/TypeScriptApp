import createServer from "./server";


createServer().listen(3000,()=>{
    console.log(`Listening at port ${3000}`)
});

