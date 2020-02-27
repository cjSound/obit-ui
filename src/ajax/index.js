/*
 * @Author: 曹捷
 * @Date: 2019-08-01 14:25:13
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-02-27 14:58:24
 * @Description: file content
 */

import common from './api/common-api'
class obitAjax {
    constructor(apis) {
        this.defultApi = apis
        this.methods = {
            ...apis
        }
    }
    init(list) {
        this.methods = {
            ...this.defultApi,
            ...list
        }
    }
}
console.log('99999999999999999999999999')

export default new obitAjax(common)
// export default {
//     ...common
// }