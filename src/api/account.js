import service from '../until/request'

/**
 * 登录接口
 */
export function Login(data){
    return service.request({
        url: "/login/",
        method: "post",
        data, // 请求类型为 post 时
        // params: data // 请求类型为 get 时
    })
}
