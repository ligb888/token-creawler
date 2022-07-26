const { app, Menu, BrowserWindow, ipcMain, dialog } = require('electron')
const requestUtil = require('./util/reqeustUtil')
const Store = require('electron-store')
const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
const index = './pages/index.html'
const title = "XXXXXXXXXXX"
let win = {}

// 初始化缓存配置
Store.initRenderer()

// 允许使用https
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

async function createWindow () {
    win = new BrowserWindow({
        title: title,
        width: 1440,
        height: 900,
        show: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        userAgent: userAgent,
        icon: "./assets/favicon.ico",
    })
    try{
        // 授权判断
        // let ret = await requestUtil.get("https://spinach-common.oss-cn-heyuan.aliyuncs.com/electron/token-crawler/config20220608.json?ttt="+new Date().getTime())
        // JSON.parse(ret)

        // 打开首页
        win.loadFile(index).then()

        // 调试模式
        // win.webContents.openDevTools()
        // win.loadURL("http://localhost:8001", {userAgent: userAgent}).then()

        win.once('ready-to-show', () => {
            win.show()
        })
    }catch (e){
        dialog.showMessageBox({
            type: 'warning',
            title: '提示',
            message: '未授权，请联系作者',
            buttonLabel: '退出',
        }).then(res => {
            app.quit()
        })
    }
}

//接收渲染线程的消息
ipcMain.on('message', async (event, arg) => {
    let returnValue = ""
    if(arg.method === "getUserAgent"){
        returnValue = userAgent
    }
    event.returnValue = returnValue
})

// 接受渲染线程的消息
ipcMain.handle('openLogin', async (event, arg) => {
    return new Promise(function (resolve, reject) {
        const child = new BrowserWindow({
            title: title,
            parent: win,
            width: 1680,
            height: 900,
            modal: true,
            show: false,
            userAgent: userAgent,
            icon: "./assets/favicon.ico",
        })
        // child.webContents.openDevTools()
        child.loadURL(arg.loginUrl, {userAgent: userAgent}).then()
        child.once('ready-to-show', () => {
            child.show()
        })

        child.once('close', async () => {
            const session = child.webContents.session
            // 查询cookies
            session.cookies.get({domain: arg.domain}).then((cookies) => {
                resolve(cookies)
            }).catch((error) => {
                reject(error)
            })
        })
    })
})

const createContextMenu = () => {
    const template = [];
    const appMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(appMenu);
    return appMenu;
}

app.whenReady().then(() => {
    createContextMenu()
    createWindow().then()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow().then()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})