/*
 * @Author: 曹捷
 * @Date: 2019-08-01 14:25:13
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-03-05 16:22:57
 * @Description: file content
 */
import api from './api/api'
import common from './api/common-api'
console.log('common', common)
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