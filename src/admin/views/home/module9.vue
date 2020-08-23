<template>
    <div class="modal-box">
        <div class='modal-header'>
            <div class="title">
                <h4>沟通频次成交占比</h4>
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
            <div class="block_content_title">
                <label><input type="radio" name="module8">A类客户</label>
                <label><input type="radio" name="module8">B类客户</label>
                <label><input type="radio" name="module8">C类客户</label>
                <label><input type="radio" name="module8">D类客户</label>
            </div>
            <div class="font_echarts">
                <div id="myChart9" style="width:60%; height:35rem"></div>
                <ul>
                    <li>
                        <span>客户总量</span>
                        <p>83334400客户</p>
                    </li>
                    <li>
                        <span>客户总量</span>
                        <p>83334400客户</p>
                    </li>
                    <li>
                        <span>客户总量</span>
                        <p>83334400客户</p>
                    </li>
                </ul>
            </div>
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
                var myChart = this.$echarts.init(document.getElementById('myChart9'));
                // 绘制图表
                myChart.setOption({
                     xAxis: {
                        type: 'category',
                        data: ['成交金额', '金额成本'],
                        axisLabel: {
                            inside: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: 24
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
                        data: [200, 100],
                        type: 'bar',
                        itemStyle:{
                            normal:{
                                color: function(params){
                                    var color = ['#aaa', '#ccc'];
                                    return color[params.dataIndex]
                                }
                            }
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontSize: 20
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