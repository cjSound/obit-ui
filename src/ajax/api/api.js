/*
 * @Author: 曹捷
 * @Date: 2019-08-01 14:25:13
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-03-11 13:07:59
 * @Description: file content
 */
import request from './request'
import {
    Message
} from "element-ui"
var instance = function () {
    return {
        disposeData(response) {
            if (response.code === '0000') {
                return response.data
            } else {
                Message({
                    type: "error",
                    message: response.errorMsg
                });
                return Promise.reject()
            }
        },
        async get(url, data = {}) {
            const response = await request({
                url: url,
                method: 'get',
                params: data
            })
            return this.disposeData(response)
        },
        async post(url, data = {}) {
            const response = await request({
                url: url,
                method: 'post',
                data: data
            })
            return this.disposeData(response)
        },
        async tablePost(url, data = {}) {
            const response = await request({
                url: url,
                method: 'post',
                data: data
            })
            return response
        },
        async upload(url, data = {}) {
            const response = await request({
                url: url,
                method: 'post',
                isFile: true,
                data: data
            })
            return this.disposeData(response)
        },
        async download(url, data = {}, config = {}) {
            const response = await request({
                url: url,
                method: 'get',
                type: 'download',
                responseType: "blob",
                params: data
            })
            let a = document.createElement("a");
            let blob = new Blob([response.data], {
                type: config.mimeType || ''
            });
            a.href = URL.createObjectURL(blob);
            let filename = response.headers['filename']
            if (filename) {
                filename = decodeURIComponent(filename)
            }
            a.download = config.fileName || filename
            a.click();
        }
    }
}
export default new instance()

// export default class {}