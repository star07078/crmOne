<template>
    <div class="modal-box">
        <div class='modal-header'>
            <div class="title">
                <h4>客户类型成交转化率</h4>
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
                <div id="myChart8" style="width:60%; height:35rem"></div>
                <ul>
                    <li>
                        <span>X类客户总量</span>
                        <p>83334400客户</p>
                    </li>
                    <li>
                        <span>B类客户已签单</span>
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
                var myChart = this.$echarts.init(document.getElementById('myChart8'));
                // 绘制图表
                myChart.setOption({
                    // tooltip: {
                    //     trigger: 'item',
                    //     formatter: '{a} <br/>{b}: {c} ({d}%)'
                    // },
                    // legend: {
                    //     orient: 'vertical',
                    //     left: 10,
                    //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    // },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1548, name: '搜索引擎'}
                            ]
                        }
                    ]
                })
            },
        },
        mounted(){
            this.drawLine();
        }
    }
</script>