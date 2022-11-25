const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const cluster = require('cluster');
const os  = require('os');

const app = express();
const port = 5000;
const numCpu = os.cpus().length;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body, new Date());
    for (let i = 0; i < 1e8; i++) { 

    }
    console.log(new Date());
    res.send({code: 200, pid: process.pid})
    //cluster.Worker.kill(); 
});

if (cluster.isMaster) {
    console.log({numCpu});
    for (let i = 0; i < numCpu; i++) {
        cluster.fork();    
    }
    // cluster.on('exit', (worker, code, signal)=>{
    //     console.log(`worker ${worker.process.pid} died`);
    //     cluster.fork() // crete new one after exit 1
    // })
}else{
    app.listen(port, () => { console.log(`server ${process.pid} and app listening on port!`, port) });
}

// app.listen(port, () => { console.log(`server ${process.pid} and app listening on port!`, port) });