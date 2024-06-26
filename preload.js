console.log("预加载脚本", process.version);
const { contextBridge ,ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('myApi', {
    version: process.version,
    
})