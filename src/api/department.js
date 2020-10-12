import service from "../untils/request";


/**
 * 新增部门
 */
export function DepartmentApi(data){
    return service.request({
        url: "/department/add/",
        method: "post",
        data, // 请求类型为 post 时
    })
}

/**
 * 删除
 */
export function Delete(data){
    return service.request({
        url: "/department/delete/",
        method: "post",
        data, // 请求类型为 post 时
    })
}
/**
 * 禁启用
 */
export function Status(data){
    return service.request({
        url: "/department/status/",
        method: "post",
        data, // 请求类型为 post 时
    })
}
/**
 * 详情
 */
export function Detailed(data){
    return service.request({
        url: "/department/detailed/",
        method: "post",
        data, // 请求类型为 post 时
    })
}
/**
 * 编辑
 */
export function Edit(data){
    return service.request({
        url: "/department/edit/",
        method: "post",
        data, // 请求类型为 post 时
    })
}