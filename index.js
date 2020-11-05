var app = require('express')();
var http = require('http').createServer(app);
var fs = require('fs');
const io = require('socket.io')(http);
const { exec } = require("child_process");
app.get('/', (req, res) => {
  //res.writeHead(200);
  let html = fs.readFileSync("./index.html", "utf-8");
  res.write(html);
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
io.on('connect', socket => {
  console.log(socket.id);
  socket.on('pressed', (text)=>{
    console.log(`${text}, and button got pressssssssssssed`);
    exec("python ButtonPress.py", (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    } 
    console.log(`stdout: ${stdout}`);
    socket.emit("Temp", stdout);
    });
  });
});
