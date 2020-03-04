/*
 * @Author: 曹捷
 * @Date: 2019-08-01 14:25:13
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-03-05 00:06:18
 * @Description: file content
 */
import api from './api/api'
import common from './api/common-api'
class obitAjax {
    constructor(apis) {
        this.defultApi = apis
        this.api = api
        this.methods = {
            ...apis
        }
    }
    init(list, router) {
        this.methods = {
            ...this.defultApi,
            ...list
        }
        this.router = router
    }
}

export default new obitAjax(common)
// export default {
//     ...common
// }