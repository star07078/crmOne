<template>
    <div class="modal-box">
        <div class='modal-header'>
            <div class="title">
                <h4>客户初次跟进等级标签分布</h4>
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
        <div class="modal-content flex">
            <span>
                <div id="myChart13-1" style="width:auto; height:35rem"></div>
            </span>
            <span>
                <div id="myChart13-2" style="width:auto; height:35rem"></div>
            </span>
            <span>
                <div id="myChart13-3" style="width:auto; height:35rem"></div>
            </span>
            <span>
                <div id="myChart13-4" style="width:auto; height:35rem"></div>
            </span>
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
                var myChart1 = this.$echarts.init(document.getElementById('myChart13-1'));
                var myChart2 = this.$echarts.init(document.getElementById('myChart13-2'));
                var myChart3 = this.$echarts.init(document.getElementById('myChart13-3'));
                var myChart4 = this.$echarts.init(document.getElementById('myChart13-4'));
                // 绘制图表
                myChart1.setOption({
                    title: {
                        text: 'A类客户',
                        bottom: 0,
                        left: '30%'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: 0,
                        top: 40,
                        itemGap: 30,
                        textStyle: {
                            fontSize: 16,
                            lineHeight: 50
                        },
                        data: [ '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['40%', '60%'],
                            label: {
                                show: false
                            },
                            data: [
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1048, name: '搜索引擎'}
                            ]
                        }
                    ]
                })
                myChart2.setOption({
                    title: {
                        text: 'B类客户',
                        bottom: 0,
                        left: '30%'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: 0,
                        top: 40,
                        itemGap: 30,
                        textStyle: {
                            fontSize: 16,
                            lineHeight: 50
                        },
                        data: [ '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['40%', '60%'],
                            label: {
                                show: false
                            },
                            data: [
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1048, name: '搜索引擎'}
                            ]
                        }
                    ]
                })
                myChart3.setOption({
                    title: {
                        text: 'C类客户',
                        bottom: 0,
                        left: '30%'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: 0,
                        top: 40,
                        itemGap: 30,
                        textStyle: {
                            fontSize: 16,
                            lineHeight: 50
                        },
                        data: [ '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['40%', '60%'],
                            label: {
                                show: false
                            },
                            data: [
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1048, name: '搜索引擎'}
                            ]
                        }
                    ]
                })
                myChart4.setOption({
                    title: {
                        text: 'D类客户',
                        bottom: 0,
                        left: '30%'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        right: 0,
                        top: 40,
                        itemGap: 30,
                        textStyle: {
                            fontSize: 16,
                            lineHeight: 50
                        },
                        data: [ '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['40%', '60%'],
                            label: {
                                show: false
                            },
                            data: [
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1048, name: '搜索引擎'}
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

<style scoped>
    .flex span{
        display: inline-block;
        width: 24%;
        height: 50%;
    }
</style>