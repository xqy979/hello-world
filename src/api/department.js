import service from "../untils/request";


/**
 * 获取验证码
 */
export function DepartmentApi(data){
    return service.request({
        url: "/department/add/",
        method: "post",
        data, // 请求类型为 post 时
    })
}
/**
 * 
 */
export function GetList(data){
    return service.request({
        url: "/department/list/",
        method: "post",
        data, // 请求类型为 post 时
    })
}