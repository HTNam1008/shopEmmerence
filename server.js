const app = require("./src/app");

const PORT=3000

const server=app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

// phương thức quy trình trong nodejs
process.on('SIGINT',()=>{
    server.close(()=>{console.log('Server is closed')})
    
})