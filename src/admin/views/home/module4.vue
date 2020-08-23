<template>
    <div class="modal-box">
        <div class='modal-header'>
            <div class="title">
                <h4>跟进与成交</h4>
            </div>
            <div class="option">
                <el-select v-model="value1" size="small" placeholder="城市">
                    <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        size='small'
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
            <div class='content-title'>
                <span></span>成交
                <span></span>跟进
            </div>
            <div id="myChart4" style="width:auto; height:35rem"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data(){
            return {
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
                var myChart = this.$echarts.init(document.getElementById('myChart4'));
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        show: true
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['石家庄', '邢台', '北京', '深圳', '上海', '保定', '广州', '南京']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '成交',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [120, 132, 100, 134, 90, 230, 210, 70],
                            smooth:true
                        },
                        {
                            name: '跟进',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [220, 182, 191, 234, 290, 330, 310, 40],
                            smooth:true
                        },
                    ]
                })
            },
        },
        mounted(){
            this.drawLine();
        }
    }
</script>

<style lang="less" scoped>
.content-title{
    margin: 10px 0 -10px 0; 
    text-align: center;
    span{
        &:nth-of-type(1){
            background: #fff;
            border: 5px solid #d4716e;
        }
        &:nth-of-type(2){
            background: #fff;
            border: 5px solid #ccc;
        }
    }
}
</style>
