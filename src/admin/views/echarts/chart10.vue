<template>
    <div class="content">
        <div class="position">
            <Module12 />
        </div>
        <div class="modal-box">
            <div class='modal-header'>
                <strong>客户阶段分布</strong>
                <span class='export'>导出</span>
            </div>
            <div class="modal-content heightauto">
                <vTable
                    style="width:100%"
                    title-bg-color="#eee"
                    :columns="columns"
                    :table-data="tableData"
                    row-hover-color="#eee"
                    row-click-color="#edf7ff"
                    :is-loading='isLoading'
                    :tableOperating='tableOperating'
                ></vTable>
                <div class="modal-foot-right">
                    <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[5, 10, 20]"
                        page-size="5"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="tableData.length"
                    >
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Module12 from '../home/module12.vue'
    export default {
        components: {
            Module12
        },
        data(){
            return {
                value: '',
                //  当前页码的数值
                currentPage: 1,
                // 数据的总条数
                total: '',
                // 每页的条数
                pageSizes: 5,
                // 导出开关
                exportsSwitch: false,
                tableData: [
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                    {"time":"2019-06-18","number":"156*****1987","money":"5000","grow1":"10.4%","grow2":"16.6%","average":"656"},
                 ],
                columns: [
                    {field: 'time', title: '时间', titleAlign: 'center'},
                    {field: 'number', title: '成交数量', titleAlign: 'center'},
                    {field: 'money', title: '成交金额', titleAlign: 'center'},
                    {field: 'grow1', title: '成交金额环比增长', titleAlign: 'center'},
                    {field: 'grow2', title: '成交金额同比增长', titleAlign: 'center'},
                    {field: 'average', title: '平均客单价', titleAlign: 'center'}
                ]
            }
        }
    }
</script>

<style lang='less' scoped>
    .modal-content{
        height: auto;
    }
</style>