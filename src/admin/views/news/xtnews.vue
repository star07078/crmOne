<template>
    <div class="content">
        <div class="head">
            <div class='headshow'>
                <div class="filter">
                    <input type="text" v-model='kw' class='int' placeholder="搜索关键词">
                    <el-date-picker
                        v-model="value"
                        type="daterange"
                        size='mini'
                        unlink-panels
                        value-format='yyyy-MM-dd'
                        range-separator="至"
                        start-placeholder="开始"
                        end-placeholder="结束">
                    </el-date-picker>
                    <button class='blue' @click='inquire'>查询</button>
                    <button @click='clear'>清空</button>
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
                <div class="page" v-if='showPage'>
                    <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[3, 6, 9]"
                        page-size="5"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total"
                    >
                    </el-pagination>
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
                    {{ msgObj.created_at }}
                    <hr>
                    {{ msgObj.content }}
                </div>
            </div>
        </Alert>
    </div>
</template>


<script>
    // 在这声明额原因是想请求一次后保存起来，等下来到这个页面的时候就不用请求了
    var tableData = [], total = '';
    var p = function(obj){
        return new Promise((res, rej)=>{
            axios.get('/index.php/crm/admin/news/system',{
                params: obj,
            })
            .then((data)=>{
                res(data)
            })
            .catch(()=>{
                rej();
            })  
        })
    }
    export default {
        data() {
            return {
                kw: '',                 //关键字
                value: '',              //时间
                //  当前页码的数值
                currentPage: 1,
                // 数据的总条数
                total: total,
                // 每页的条数
                pageSizes: 3,
                // 是否在查询状态下显示数据的开关
                isInquire: false,
                // 刷新page组件
                showPage: true,
                // 查看消息的开关
                msgSwitch: false,
                // 查看消息的内容
                msgObj: {},
                // 绑定反选
                anti: false,
                tableData: tableData,
                columns: [
                    {thwidth: '5%', type: 'selection' },
                    {thwidth: '60%', field: 'content', title: '消息内容', },
                    {thwidth: '15%', field: 'created_at', title: '接收时间', },
                    {thwidth: '10%', field: 'peruser', title: '状态',
                        formatter: function (rowData,rowIndex) {
                            return rowData.peruser
                            ? '<span class="yes">已读</span>'
                            : '<span class="no">未读</span>'
                        }
                    },
                    {thwidth: '10%', field: 'operating', title: '操作', componentName: 'xtnews-operation', titleAlign: 'center', columnAlign: 'center'},
                ]
            }
        },
        created(){
            p({
                page_size: 3
            })
            .then(data=>{
                var data = data.data.data.data;
                tableData = this.tableData = data.data;
                total = this.total = data.total;
            })
            .catch(()=>{
                this.$message.error('请求数据失败');
            })
        },
        methods:{
            // 重置
            clear(){
                this.value = this.kw = "";
                this.isInquire = false;
            },
            // 查询
            inquire(){
                // this.showPage = false;
                // this.$nextTick(()=>{
                //     this.isInquire = true;
                //     this.showPage = true;
                // })
                // p({
                //     title: this.kw,
                //     start: this.value[0],
                //     end: this.value[1],
                //     page: 1,
                //     page_size: this.pageSizes
                // })
                // .then(data=>{
                //     this.currentPage = 1;
                //     var data = data.data.data.data;
                //     this.tableData = data.data;
                //     this.total = data.total;
                // })
                // .catch(()=>{
                //     this.$message.error('请求数据失败');
                // })
            },
            // 查看具体消息
            tableOperating(rowData, rowIndex){
                this.msgSwitch = true;
                this.msgObj = rowData
                this.tableData[rowIndex].peruser = true;
                this.$axios.get('/index.php/crm/admin/news/peruser?id='+this.msgObj.id)
                .then(()=>{})
                .catch(()=>{})
            },
            // 一键已读
            allYes(){
                this.tableData.forEach(item=>item.peruser = true)
            },
            // 每页显示的条数改变时触发
            handleSizeChange(val) {
                this.pageSizes = val;
                var obj = {
                    page_size: this.pageSizes,
                }
                this.showPage = false;
                this.$nextTick(()=>{
                    this.showPage = true;
                    if(this.isInquire){
                        obj = {
                            page_size: this.pageSizes,
                            title: this.kw,
                            start: this.value[0],
                            end: this.value[1],
                        }
                    }
                    p(obj)
                    .then(data=>{
                        this.tableData = data.data.data.data.data;
                    })
                    .catch(()=>{
                        this.$message.error('请求数据失败')
                    })
                })
            },
            // 页码改变时触发
            handleCurrentChange(val) {
                var obj = {
                    page: val,
                    page_size: this.pageSizes,
                }
                // if(this.isInquire){
                //     obj = {
                //         page: val,
                //         page_size: this.pageSizes,
                //         title: this.kw,
                //         start: this.value[0],
                //         end: this.value[1],
                //     }
                // }
                p(obj)
                .then(data=>{
                    this.tableData = data.data.data.data.data;
                })
                .catch(()=>{
                    this.$message.error('请求数据失败')
                })
            },
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
            see(){
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
                    .el-date-editor{
                        width: 26rem;
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
                        margin-right: 1rem;
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
                                color: #fff;
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