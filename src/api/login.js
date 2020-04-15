/**
 * login模块接口列表
 */
import base from './base'
import axios from '../utils/http'
import qs from 'qs'

const login = {
    /**
     * 登录
     * @param account 用户名
     * @param pwd 密码
     */
    login(account, pwd) {
        let params = {
            authtype: 'FORM_AUTH',
            account: account,
            pwd: pwd
        }
        return axios.post(`${base.url}${base.login_in}`, qs.stringify(params));
    },

    /**
     * 获取用户信息
     */
    getUserInfo() {
        let param = {
            opt: 'if4UserInfo',
            fid: 'resource.integratedbis.system.user.UserCenter',
        }
        return axios.post(`${base.url}${base.function}`, qs.stringify(param))
    }
}

export default login;