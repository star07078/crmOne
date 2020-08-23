<template>
    <div class="content">
        <div class="head">
            <div class='headshow'>
                <div class="filter">
                    <input type="text" class='int' placeholder="搜索关键词">
                    <el-date-picker
                        v-model="value1"
                        type="date"
                        size='small'
                        placeholder="选择日期">
                    </el-date-picker>
                    <button class='blue'>查询</button>
                    <button>重置</button>
                    <button @click='allYes'>一键已读</button>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="table">
                <vTable
                    style="width:100%"
                    title-bg-color="#eee"
                    :columns="columns"
                    :table-data="tableData"
                    row-hover-color="#eee"
                    row-click-color="#edf7ff"
                    :tableOperating='tableOperating'
                ></vTable>
            </div>
            <div class="table_foot">
                <div>
                    <label>
                        <span>
                            <input name="radio" id="add" type="checkbox" v-model='anti'>
                            反选
                        </span>
                    </label>
                </div>
                <div class="page">
                    <v-pagination :total="600" size="large"></v-pagination>
                </div>
            </div>
        </div>
       <Alert v-if="msgSwitch" @hide='msgSwitch = false'>
            <div class="modal-box">
                <div class='modal-header'>
                    <h4>消息详情</h4>
                    <i class="iconfont iconzu999" @click='msgSwitch = false'></i>
                </div>
                <div class="modal-content">
                    {{ msgObj.time }}
                    <hr>
                    {{ msgObj.msg }}
                    <router-link to=''>
                        立即前往私库查看
                    </router-link>
                </div>
            </div>
        </Alert>
    </div>
</template>


<script>
    import Alert from '../../../global/components/alert.vue'
    import Block from '../../../global/components/block.vue'
    export default {
        components: {
            Alert,
            Block
        },
        data() {
             return {
                value1: '',
                msgSwitch: false,
                msgObj: {},
                // 绑定反选
                anti: false,
                tableData: [
                    {
                        "checked": false,
                        "msg": "三方推送 20个服务商已进行比例分配",
                        "time": "2019-12-30",
                        "isSee": true
                    },
                    {
                        "checked": false,
                        "msg": "三方推送 20个服务商已进行比例分配",
                        "time": "2019-12-30",
                        "isSee": false
                    },
                    {
                        "checked": false,
                        "msg": "三方推送 20个服务商已进行比例分配",
                        "time": "2019-12-30",
                        "isSee": false
                    },
                    {
                        "checked": false,
                        "msg": "三方推送 20个服务商已进行比例分配",
                        "time": "2019-12-30",
                        "isSee": false
                    },
                    {
                        "checked": false,
                        "msg": "三方推送 20个服务商已进行比例分配",
                        "time": "2019-12-30",
                        "isSee": false
                    },
                    {
                        "checked": false,
                        "msg": "三方推送 20个服务商已进行比例分配",
                        "time": "2019-12-30",
                        "isSee": true
                    }
                ],
                columns: [
                    {thwidth: '5%', type: 'selection' },
                    {thwidth: '65%', field: 'msg', title: '消息内容', },
                    {thwidth: '10%', field: 'time', title: '接收时间', },
                    {thwidth: '10%', field: 'status', title: '状态',
                        formatter: function (rowData,rowIndex) {
                            return rowData.isSee
                            ? '<span class="yes">已读</span>'
                            : '<span class="no">未读</span>'
                        }
                    },
                    {thwidth: '10%', field: 'operating', title: '操作', componentName: 'xtnews-operation', titleAlign: 'center', columnAlign: 'center'},
                ]
            }
        },
        methods:{
            tableOperating(rowData, rowIndex){
                this.msgSwitch = true;
                this.msgObj = rowData
                this.tableData[rowIndex].isSee = true;
            },
            // 一键已读
            allYes(){
                this.tableData.forEach(item=>item.isSee = true)
            }
        },
        watch: {
            // 监听反选
            anti(){
                this.tableData.forEach(item => item.checked = !item.checked);
            }
        },
    }
    Vue.component('xtnews-operation',{
        template:`<span>
        <a href="" @click.stop.prevent="see">查看</a>&nbsp;
        </span>`,
        props:{
            rowData:{
                type: Object
            },
            rowIndex:{
                type: Number
            },
            tableOperating: Function,
        },
        methods:{
            see(obj, index){
                // 改变topnav中第三个得信息
                this.tableOperating && this.tableOperating(this.rowData, this.rowIndex);
            }
        }
    })
</script>

<style lang='less' scoped>
    hr{
        border: none;
        border-top: 1px solid #ccc;
    }
    .content{
        .head{
            padding: 4rem 2rem;
            background: #fff;
            display: flex;
            flex-direction: column;
            border: 1px solid #ccc;
            box-sizing: border-box;
            margin-bottom: 2rem;
            .headshow{
                display: flex;
                flex-direction: row;  
                justify-content: space-between;
                align-items: center;
                .filter{
                    display: flex;
                    align-items: center;
                    input, .el-select, .el-input{
                        margin-right: 1rem;
                    }
                    .int{
                        width: 22rem;
                        box-sizing: border-box;
                        padding-right: 3rem;
                        border: 1px solid;
                        border-radius: 4px;
                        border: 1px solid #DCDFE6;
                        height: 3.5rem;
                        line-height: 3.5rem;
                        color: #606266; 
                        padding-left: 3rem;
                    }
                    button{
                        border: 1px solid #eee;
                        background: #fff;
                        height: 3.6rem;
                        padding: 0 2rem;
                        display: inline-block;
                        text-align: center;
                        line-height: 3rem;
                        color: #222;
                        margin-right: 1rem;
                        &.blue{
                            background: #0079fe;
                            color: #fff;
                            border: none;
                            box-sizing: border-box;
                            &:hover{
                                border: none;
                            }
                        }
                        &:hover{
                            border: 1px solid #0079fe;
                            color: #0079fe;
                        }
                    }
                }
                span{
                    color: #0079fe;
                    margin: 0 1rem;
                    font-weight: 800;
                    cursor: pointer;
                }
            }
        }
        .section{
            padding: 2rem;
            margin: 1rem 0;
            flex-grow: 1;
            background: #fff;
            border: 1px solid #ccc;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            .table_top, .table_foot{
                flex: 0 1 8rem;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                span{
                    border: 1px solid #eee;
                    background: #fff;
                    padding: 0 2rem;
                    height: 3.6rem;
                    display: inline-block;
                    text-align: center;
                    line-height: 3.6rem;
                    color: #222;
                    cursor: pointer;
                }
            }
        }
    }
</style>