<template>
    <div class="content">
        <div class="head">
            <div class='headshow'>
                <div class="filter">
                    <input type="text" class='int' placeholder="搜索关键词">
                    <el-select size='small' v-model="formInline.region" placeholder="选择城市">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>

                    <el-select size='small' v-model="formInline.region" placeholder="选择服务商">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>

                    <el-select size='small' v-model="formInline.region" placeholder="销售员">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <button class='blue'>查询</button>
                    <button>重置</button>
                </div>
                <span class='fr' @click='filterSwitchFn'>高级筛选</span>
            </div>
            <HighFilter v-if="filterSwitch" />
        </div>
        <div class="section">
            <div class="table_top">
                <div>
                    <span @click='exportsSwitchFn'>导出</span>
                    <span @click='paiFaSwitchFn'>派发客户</span>
                    <span @click='garbageSwitch = true'>变为垃圾客户</span>
                </div>
                <div>
                    <div class="rule">
                        <i>公海规则说明</i>
                        <div>
                            <em></em>
                            <table border='1'>
                                <thead>
                                    <tr>
                                        <th>客户评级</th>
                                        <th>未成交天数</th>
                                        <th>未跟进天数</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>A-C级</td>
                                        <td>45</td>
                                        <td>30</td>
                                    </tr>
                                    <tr>
                                        <td>D-E级</td>
                                        <td>30</td>
                                        <td>15</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>超过N天“未成交”和“未跟进”的客户，由系统定时划入公海。从开启公海或获得客户（新增、转移、从公海抢到客户）开始来计算客户多久未达到“成交”和“跟进”状态。</p>
                        </div>
                    </div>
                    <span>排序</span>
                </div>
            </div>
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
                    <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[5, 10, 20]"
                        page-size="5"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total"
                    >
                    </el-pagination>
                </div>
            </div>
        </div>
        <!-- 导出 -->
        <Alert v-if="exportsSwitch" @close='exportsSwitch = false'>
            <Exports
                @close="exportsSwitch = false" :exportsTableData='exportsTableData'
            />
        </Alert>
        <!-- 转入垃圾客户 -->
        <Alert v-if="garbageSwitch" @close='garbageSwitch = false' width="70rem">
            <GarbageClient @close='garbageSwitch = false'/>
        </Alert>
        <!-- v-if="paiFaSwitch" @close='paiFaSwitch = false' -->
        <Alert v-if="paiFaSwitch" @close='paiFaSwitch = false'>
            <PaiFaClient @close='submitPaiFaClient' :selectTableData='selectTableData'/>
        </Alert>
    </div>
</template>

<script>
    import HighFilter from '../publicComponent/highFilter.vue'
    import PaiFaClient from '../publicComponent/paiFaClient.vue'
    import Exports from '../../export/exports.vue'
    import GarbageClient from '../publicComponent/garbageClient.vue'
    export default {
        components: {
            HighFilter,
            PaiFaClient,
            Exports,
            GarbageClient
        },
        data() {
             return {
                 //  当前页码的数值
                currentPage: 1,
                // 数据的总条数
                total: '',
                // 每页的条数
                pageSizes: 5,
                 //  高级筛选开关
                filterSwitch: false,
                // 派发客户控制开关
                paiFaSwitch: false,
                // 派发选中的客户
                selectTableData: [],
                // 数据
                tableData: [],
                tableData1: [
                    {
    "checked": false,
    "name": "公司名称2",
    "area": "广州",
    "date": "2020-05-02",
    "trade":"制造业",
    "rating": "",
    "intent": "",
    "person": "李四",
    "wx": "dfsb465153",
    "tel": "18274125896",
    "service": "",
    "sales": "",
    "baifang": "否",
    "qiandan": "否",
    "tiem": "",
    "money": "",
    "beizhu": ""
},
{
    "checked": false,
    "name": "公司名称3",
    "area": "深圳",
    "date": "2018-08-25",
    "trade":"娱乐",
    "rating": "",
    "intent": "",
    "person": "王五",
    "wx": "6454sedbs",
    "tel": "1371234568",
    "service": "",
    "sales": "",
    "baifang": "是",
    "qiandan": "否",
    "tiem": "",
    "money": "",
    "beizhu": ""
},
{
    "checked": false,
    "name": "公司名称4",
    "area": "北京",
    "date": "2019-10-12",
    "trade":"互联网",
    "rating": "",
    "intent": "",
    "person": "马六",
    "wx": "wxid648913",
    "tel": "13752684682",
    "service": "A",
    "sales": "",
    "baifang": "否",
    "qiandan": "否",
    "tiem": "",
    "money": "",
    "beizhu": "为人和气"
},
{
    "checked": false,
    "name": "公司名称5",
    "area": "北京",
    "date": "2017-12-22",
    "trade":"制造业",
    "rating": "B",
    "intent": "",
    "person": "张一",
    "wx": "wxifg48913",
    "tel": "13752684682",
    "service": "",
    "sales": "",
    "baifang": "否",
    "qiandan": "否",
    "tiem": "",
    "money": "",
    "beizhu": ""
},
{
    "checked": false,
    "name": "公司名称6",
    "area": "广州",
    "date": "2019-12-24",
    "trade":"教育",
    "rating": "C",
    "intent": "",
    "person": "张**",
    "wx": "wxid648913",
    "tel": "13752684682",
    "service": "服务商C",
    "sales": "",
    "baifang": "否",
    "qiandan": "否",
    "tiem": "",
    "money": "",
    "beizhu": ""
},
{
    "checked": false,
    "name": "公司名称7",
    "area": "太原7",
    "date": "2019-12-24",
    "trade":"互联网",
    "rating": "",
    "intent": "",
    "person": "张三",
    "wx": "wxid648913",
    "tel": "13752684682",
    "service": "",
    "sales": "",
    "baifang": "否",
    "qiandan": "否",
    "tiem": "",
    "money": "",
    "beizhu": ""
},
{
    "checked": false,
    "name": "公司名称8",
    "area": "太原8",
    "date": "2019-12-24",
    "trade":"互联网",
    "rating": "",
    "intent": "",
    "person": "张三",
    "wx": "wxid648913",
    "tel": "13752684682",
    "service": "",
    "sales": "",
    "baifang": "否",
    "qiandan": "否",
    "tiem": "",
    "money": "",
    "beizhu": ""
}
                ],
                // 导出开关
                exportsSwitch: false,
                // 垃圾客户开关
                garbageSwitch: false,
                // 绑定反选
                anti: false,
                formInline: {
                    user: '',
                    region: ''
                },
                columns: [
                    {titleAlign: 'center', thwidth: '3%', columnAlign:'center',type: 'selection'},
                    {field: 'name', thwidth: '9%', title: '公司名称', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'area', thwidth: '4%', title: '城市', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'date', thwidth: '7%', title: '录入日期', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'trade', thwidth: '5%', title: '所属行业', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'rating',thwidth: '5%', title: '客户评级', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'intent', thwidth: '5%', title: '意向阶段', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'person', thwidth: '5%', title: '联系人', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'wx', thwidth: '7%', title: '微信', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'tel', thwidth: '7%', title: '手机号码', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'service', thwidth: '5%', title: '服务商', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'sales', thwidth: '5%', title: '销售员', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'baifang', thwidth: '5%', title: '是否拜访', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'qiandan', thwidth: '5%', title: '是否签单', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'time', thwidth: '5%', title: '签订日期', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'money', thwidth: '5%', title: '签订金额', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'beizhu', thwidth: '5%', title: '签单备注', titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'operating', thwidth: '7%', title: '操作', componentName: 'publicd-privated', titleAlign: 'center', columnAlign: 'center',isResize:true},
                ]
            }
        },
        watch: {
            // 监听反选
            anti(){
                this.tableData.forEach(item => item.checked = !item.checked);
            }
        },
        methods:{
            // 控制高级筛选显示隐藏
            filterSwitchFn(){
                this.filterSwitch = !this.filterSwitch;
            },
            // 删除表格数据
            tableOperating(rowData, rowIndex){
                if(window.confirm('确定要删除这条数据吗')){
                    this.$axios.get('/api/')
                    .then(()=>{
                        this.tableData.splice(rowIndex, 1)
                        this.$message('删除成功');
                    })
                    .catch(()=>{
                        this.$message.error('删除失败');
                    })
                }
            },
            // 显示派发用户
            paiFaSwitchFn(){
                this.selectTableData = this.tableData.filter(item=>{
                    return item.checked == true;
                });
                if(this.selectTableData.length == 0){
                    this.$message.error('请选择派发用户');
                    return;
                }
                this.paiFaSwitch = true;
            },
            // 关闭或提交派发用户
            submitPaiFaClient(bool){
                if(!bool){
                    this.paiFaSwitch = false;
                }
            },
            // 导出数据
            exportsSwitchFn(){
                this.exportsTableData = this.tableData.filter(item=>{
                    return item.checked == true;
                });
                if(this.exportsTableData.length == 0){
                    this.$message.error('请选择导出数据');
                    return;
                }
                this.exportsSwitch = true;
            },
             // 每页显示的条数改变时触发
            handleSizeChange(val) {
                this.pageSizes = val;
                this.changeTableData();
            },
            // 页码改变时触发
            handleCurrentChange(val) {
                var num = (val-1) * this.pageSizes;
                this.changeTableData(num);
            },
            // 加载数据
            changeTableData(num=0){
                // this.$axios.post('/api/dayou/data.json')
                // .then((data)=>{
                    this.total = this.tableData1.length;
                    // this.tableData = data.data.slice(num,this.pageSizes+num);
                    this.tableData = this.tableData1.slice(num,this.pageSizes+num);
                // })
            }
        },
        created(){
            this.changeTableData();
        }
    }
    Vue.component('publicd-privated',{
        template:`<span>
        <a href="" @click.stop.prevent="jump">查看</a>&nbsp;
        <a href="" @click.stop.prevent="deleteRow">删除</a>
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
            jump(){
                // 改变topnav中第三个得信息
                this.$store.commit('topNavThree', this.rowData.name);
                this.$router.push('/admin/client/privated/details')
            },
            deleteRow(){
                this.tableOperating && this.tableOperating(this.rowData, this.rowIndex);
            }
        }
    })
</script>

<style lang='less' scoped>
    @import '../publicComponent/content.less';
</style>