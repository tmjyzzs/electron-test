const {app,BrowserWindow} = require("electron")
const path = require("path")

console.log(process.version);
console.log("123");
app.on('ready',()=>{
    const win = new BrowserWindow({
        width:800,
        height:600,
        autoHideMenuBar:true,
        webPreferences:{
            preload:path.resolve(__dirname,'./preload.js')
        }
    })
    win.loadFile("./pages/index.html")
})