<template>
    <div class="modal-box">
        <div class='modal-header'>
            <div class="title">
                <h4>客户新增</h4>
            </div>
            <div class="option">
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
            <div class='content-title'>
                <span></span>客户新增
            </div>
            <div id="myChart3" style="width:auto; height:35rem"></div>
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
                var myChart = this.$echarts.init(document.getElementById('myChart3'));
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        show: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['石家庄', '邢台', '北京', '深圳', '上海', '保定', '广州', '南京']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320, 400],
                        type: 'line',
                        areaStyle: {},
                        smooth:true
                    }]
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
        margin: 2rem 0 -1rem; 
        text-align: center;
        span{
            background: #fff;
            border: 0.5rem solid #d4716e;
        }
    }
</style>
