<template>
    <div class="modal-box module1">
        <div class='modal-header'>
            <div class="title">
                <h4>数据简报</h4>
            </div>
            <div class="option">
                <el-cascader 
                    :options="options" 
                    :show-all-levels="false"
                    size='mini'
                ></el-cascader>
                
                <el-select v-model="value2" size="mini" placeholder="服务商">
                    <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-select v-model="value3" size="mini" placeholder="销售员">
                    <el-option
                        v-for="item in options3"
                        :key="item.value"
                        :label="item.label"
                        size='mini'
                        :value="item.value">
                    </el-option>
                </el-select>
                <!-- <el-date-picker
                    v-model="value4"
                    type="date"
                    size='small'
                    clearable='false'
                    placeholder="选择日期">
                </el-date-picker> -->
                <el-date-picker
                    v-model="value4"
                    type="daterange"
                    size='mini'
                    range-separator="至"
                    start-placeholder="开始"
                    end-placeholder="结束">
                </el-date-picker>
            </div>
        </div>
        <div class="modal-content">
            <ul class='ul'>
                <li><p>新增客户</p><span>33222</span></li>
                <li><p>新增跟进</p><span>33222</span></li>
                <li><p>销售员</p><span>33222</span></li>
                <li><p>服务商</p><span>33222</span></li>
                <li><p>成交量</p><span>33222</span></li>
                <li><p>成交金额</p><span>33222</span></li>
                <li><p>成交转化率</p><span>33222</span></li>
                <li><p>跟进总量</p><span>33222</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import elementCity from '../../../global/js/element-city.json'
    export default {
        name: 'index',
        data(){
            return {
                options: elementCity,
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
    }
</script>
