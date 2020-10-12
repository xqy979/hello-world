import service from "../untils/request";
/**
 * 列表
 */
export function TableList(params){
    return service.request({
        url: params.url,
        method: params.methods || 'post',
        data:params.data, // 请求类型为 post 时
    })
}
