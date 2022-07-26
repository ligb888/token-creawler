const { ipcRenderer } = require('electron')
const Store = require('electron-store')
const electronStore = new Store()

function initPlatformInfo(){
    return {
        platform10001: {
            platformId: "10001",
            platformName: "抖音",
            loginUrl: "https://creator.douyin.com/creator-micro/home",
            domain: "douyin.com",
        },
        platform10002: {
            platformId: "10002",
            platformName: "快手",
            loginUrl: "https://cp.kuaishou.com/article/publish/video",
            domain: "kuaishou.com",
        },
        platform10003: {
            platformId: "10003",
            platformName: "视频号",
            loginUrl: "https://channels.weixin.qq.com/platform",
            domain: "qq.com",
        },
        platform10004: {
            platformId: "10004",
            platformName: "懂车帝",
            loginUrl: "https://mp.dcdapp.com/profile_v2/home",
            domain: "dcdapp.com",
        },
        platform10005: {
            platformId: "10005",
            platformName: "小红书",
            loginUrl: "https://creator.xiaohongshu.com/creator/home",
            domain: "xiaohongshu.com",
        },
        platform10006: {
            platformId: "10006",
            platformName: "哔哩哔哩",
            loginUrl: "https://passport.bilibili.com/login",
            domain: "bilibili.com",
        },
    }
}
let platformInfo = electronStore.get("platformInfo")
if(platformInfo == null || platformInfo.length == 0){
    electronStore.set("platformInfo", initPlatformInfo())
}
