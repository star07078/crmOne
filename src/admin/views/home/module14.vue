<template>
    <div class="modal-box">
        <div class='modal-header'>
            <div class="title">
                <h4>各城市数据对比</h4>
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
            <div id="myChart14" style="width:auto; height:35rem"></div>
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
                var myChart = this.$echarts.init(document.getElementById('myChart14'));
                // 绘制图表
                myChart.setOption({
                     xAxis: {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月','12月'],
    
                    },
                    yAxis: {
                        type: 'value',
                    },
                    series: [{
                        data: [200, 160, 100, 155, 142, 180, 50, 80, 90, 133, 55,78],
                        type: 'bar',
                        barWidth: 30,
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
                                color: '#ccc'
                            }
                        }
                    }]
                })
            },
        },
        mounted(){
            this.drawLine();
        }
    }
</script>