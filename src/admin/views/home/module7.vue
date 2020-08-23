<template>
    <div class="modal-box">
        <div class='modal-header'>
            <div class="title">
                <h4>各城市数据对比</h4>
            </div>
            <div class="option">
                
                <label><input type="radio" name='module7'>成交金额</label>
                <label><input type="radio" name='module7'>成交量</label>
                <label><input type="radio" name='module7'>跟进</label>
                <label><input type="radio" name='module7'>A类客户</label>
                <label><input type="radio" name='module7'>B类客户</label>
                <label><input type="radio" name='module7'>C类客户</label>
                <label><input type="radio" name='module7'>D类客户</label>
                <label><input type="radio" name='module7'>E类客户</label>
                <el-date-picker
                    v-model="value"
                    type="date"
                    size='small'
                    placeholder="选择日期">
                </el-date-picker>
                
            </div>
        </div>
        <div class="modal-content">
            <div id="myChart7" style="width:auto; height:35rem"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data(){
            return {
                value: ''
            }
        },
        methods: {
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('myChart7'));
                // 绘制图表
                myChart.setOption({
                     xAxis: {
                        type: 'category',
                        data: ['城市', '城市', '城市', '城市', '城市', '城市', '城市', '城市', '城市', '城市'],
    
                    },
                    yAxis: {
                        type: 'value',
                    },
                    series: [{
                        data: [200, 160, 100, 155, 142, 180, 50, 80, 90, 133],
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