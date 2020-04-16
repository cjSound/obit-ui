<!--
 * @Author: 曹捷
 * @Date: 2020-04-16 16:01:48
 * @LastEditors: 曹捷
 * @LastEditTime: 2020-04-16 16:08:09
 * @Description: file content
 -->
<template>
    <div>
        <obit-org disabled v-model="orgId"></obit-org>
        <obit-org  v-model="orgId"></obit-org>
    </div>
  
</template>

<script>
import obitOrg from './../../../src/obit-org/obit-org'

export default {
    components:{obitOrg},
    data(){
        return{
            orgId:'85'
        }
    }
}
</script>

<style>

</style>