<template>
    <div class="modal-box">
        <div class='modal-header'>
            <div class="title">
                <h4>客户等级变化趋势</h4>
            </div>
            <div class="option">
                <label><input type="radio" name='module10'>A类客户</label>
                <label><input type="radio" name='module10'>B类客户</label>
                <label><input type="radio" name='module10'>C类客户</label>
                <label><input type="radio" name='module10'>D类客户</label>
                <label><input type="radio" name='module10'>E类客户</label>
                <el-select v-model="value1" size="small" placeholder="城市">
                    <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                
                <el-select v-model="value2" size="small" placeholder="服务商">
                    <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value3" size="small" placeholder="销售员">
                    <el-option
                        v-for="item in options3"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-date-picker
                    v-model="value4"
                    type="date"
                    size='small'
                    placeholder="选择日期">
                </el-date-picker>
                
            </div>
        </div>
        <div class="modal-content">
            <div>
                规则：从客户起始状态到客户最后状态的等级变化
            </div>
            <div id="myChart10" style="width: auto; height:35rem"></div>
        </div>
        <Alert v-if='labelSwitch' @close='labelSwitch = false'>
            <Block>
                <template v-slot:header>
                    <h4>{{ title }} 标签标记情况</h4>
                    <i class='iconfont iconzu999' @click='labelSwitch = false'></i>
                </template>
                <template v-slot:content>
                    <dl>
                        <dd>
                            <span>标签1</span><em>合计出现{{56}}次</em>
                            <p>标签话数文本标签话数文本标签</p>
                        </dd>
                        <dd>
                            <span>标签1</span><em>合计出现{{56}}次</em>
                            <p>标签话数文本标签话数文本标签</p>
                        </dd>
                    </dl>
                </template>
            </Block>
        </Alert>
    </div>
</template>

<script>
    import Alert from '../../../global/components/alert.vue'
    import Block from '../../../global/components/block.vue'
    export default {
        name: 'index',
        components: {
            Alert,
            Block
        },
        data(){
            return {
                labelSwitch: false, //标签显示开关
                title: '', //标签标题
                options1: [
                    {
                        value: '选项1',
                        label: '石家庄'
                    }, 
                    {
                        value: '选项2',
                        label: '邢台'
                    },
                ],
                value1: '',
                options2: [
                    {
                        value: '选项1',
                        label: '服务商A'
                    }, 
                    {
                        value: '选项2',
                        label: '服务商B'
                    },
                ],
                value2: '',
                options3: [
                    {
                        value: '选项1',
                        label: '销售员1'
                    }
                ],
                value3: '',
                value4: ''
            }
        },
        methods: {
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('myChart10'));
                // 绘制图表
                myChart.setOption({
                     xAxis: {
                        type: 'category',
                        data: ['A-A', 'A-B','A-C','A-D','A-E'],
                        offset: 8,
                        axisLabel: {
                            inside: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: 22
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 20
                    },
                    yAxis: {
                        type: 'value',
                        show: false
                    },
                    series: [{
                        data: [2234, 1927, 1700, 897, 1673],
                        type: 'bar',
                        itemStyle:{
                            normal:{
                                color: '#ccc'
                            }
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontSize: 20,
                                color: '#000'
                            }
                        },
                        markPoint: {
                            symbol: 'rect',
                            symbolSize: [80,24],
                            symbolOffset: [0, -40],
                            animation: false,
                            label: {
                                color: '#000',
                            },
                            itemStyle: {
                                color: '#fff',
                            },
                            data: [
                                { value: '查看标签', xAxis: 0, yAxis: 0},
                                { value: '查看标签', xAxis: 1, yAxis: 0},
                                { value: '查看标签', xAxis: 2, yAxis: 0},
                                { value: '查看标签', xAxis: 3, yAxis: 0},
                                { value: '查看标签', xAxis: 4, yAxis: 0}
                            ]
                        },
                    }]
                })
                myChart.on('click',(params)=>{
                    if (params.componentType === 'markPoint') {
                        this.labelSwitch = true;
                        this.title = params.name;
                    }
                })
            },
        },
        mounted(){
            this.drawLine();
        }
    }
</script>

<style scoped>
    .option label{
        width: 12rem;
        padding: 0;
        margin: 0;
    }
    dd span{
        display: inline-block;
        padding: 0.8rem 2.6rem;
        background: #ccc;
        font-size: 1.6rem;
        border-radius: 0.6rem;
    }
    dd p{
        padding: 0.8rem 2.6rem;
        background: #aaa;
        font-size: 1.6rem;
        color: #fff;
        margin: 1rem 0 2rem;
    }
    em{
        margin: 0 2rem;
        color: red;
    }
</style>