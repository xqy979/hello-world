// 正则
export const reg_password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
export const reg_email = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
// 密码验证
export const validate_password = reg_password;
// 验证邮箱
export function validate_email(value){
    return reg_email.test(value)
}
// 密码验证
export function validate_pass(value){
    return reg_password.test(value)
}