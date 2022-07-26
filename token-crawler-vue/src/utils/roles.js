const courseManageRole = [
    {
        pageName: "XXXXXXXXXXX",
        url: "document",
        icon:require("@/assets/images/nav/5.png"),
        iconSelect:require("@/assets/images/nav/5_select.png"),
        roles: ['teacher']
    },
    {
        pageName: "XXXXXXXXXXX",
        url: "lessonManage",
        icon:require("@/assets/images/nav/6.png"),
        iconSelect:require("@/assets/images/nav/6_select.png"),
        roles: ['teacher']
    },
    {
        pageName: "XXXXXXXXXXX",
        url: "techManage",
        icon:require("@/assets/images/nav/7.png"),
        iconSelect:require("@/assets/images/nav/7_select.png"),
        roles: ['teacher', 'student']
    },
]
const jituanRoles = {
    isTeacher: {
        remark: "XXXXXXXXXXX",
        roles: ['teacher']
    },
    isStudent: {
        remark: "XXXXXXXXXXX",
        roles: ['student']
    },
    score: {
        remark: 'XXXXXXXXXXX',
        roles: ['student','teacher']
    }
}
const settingBtnRole = [
    {
        pageName: "XXXXXXXXXXX",
        roles: ['teacher', 'admin', 'root']
    }
]
const techManage_workRole = [
    {
        pageName: 'XXXXXXXXXXX',
        url: 'techManage',
        roles: ['teacher', 'student']
    },
    {
        pageName: 'XXXXXXXXXXX',
        url: 'techManage_work',
        roles: ['teacher']
    },
    {
        pageName: 'XXXXXXXXXXX',
        url: 'teamLeader',
        roles: ['student']
    }
]
const bolones = [
    {
        id: 1,
        color: "#ff0000",
        name: 'XXXXXXXXXXX',
        router: 'document/1'
    },
    {
        id: 2,
        color: "#0036ff",
        name: 'XXXXXXXXXXX',
        router: 'document/2'
    },
    {
        id: 3,
        color: "#0036ff",
        name: 'XXXXXXXXXXX',
        // router: 'document_model'
        router: 'document/3'
    }
]
export {
    courseManageRole,
    techManage_workRole,
    settingBtnRole,
    jituanRoles,
    bolones
}
