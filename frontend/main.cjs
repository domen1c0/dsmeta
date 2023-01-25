const { app, BrowserWindow} = require("electron");
const path = require('path')

function createWindow(){
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/logo.svg',
  });
  win.loadURL("http://127.0.0.1:5173/")
  icon: path.join(__dirname, '/src/assets/logo.svg');
}



app.whenReady().then(() => {
  createWindow();

  app.on("active", ()=>{
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});