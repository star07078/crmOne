<template>
    <div class="modal-box">
        <div class='modal-header'>
            <h4>填写跟进</h4>
            <i class="iconfont iconzu999" @click='cancel(false)'></i>
        </div>
        <div class="modal-content" v-if='Switch'>
            <div>
                <span class="name">客户评级</span>
                <ul>
                    <li class='active'>A级</li>
                    <li>B级</li>
                    <li>C级</li>
                    <li>D级</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>标签</li>
                    <li>标签</li>
                    <li>自定义</li>
                </ul>
            </div>
            <div>
                <span class="name">意向阶段</span>
                <ul>
                    <li class='active'>第一阶段</li>
                    <li>第二阶段</li>
                    <li>第三阶段</li>
                    <li>第四阶段</li>
                </ul>
            </div>
            <div>
                <span class="name">沟通时间</span>
                <span>
                    <el-select v-model="value" size="small" placeholder="城市">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            size='mini'
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </span>
            </div>
            <div>
                <span class="name">姓名</span>
                <span>
                    <input type="text" placeholder="请输入姓名">
                </span>
            </div>
            <div>
                <span class="name">城市</span>
                <span>
                    <el-select v-model="value" size="small" placeholder="城市">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            size='mini'
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </span>
            </div>
            <div>
                <span class="name">行业</span>
                <span>
                    <el-select v-model="value" size="small" placeholder="城市">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            size='mini'
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </span>
            </div>
            <div>
                <span class="name">本次沟通方式</span>
                <span>
                    <label>
                        <input type="radio" name='name'>电话
                    </label>
                    <label>
                        <input type="radio" name='name'>拜访
                    </label>
                </span>
            </div>
            <div>
                <span class="name">以前是否拜访</span>
                <span>
                    <el-select v-model="value" size="small" placeholder="城市">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            size='mini'
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </span>
            </div>
            <div class='textarea'>
                <span class="name">沟通情况</span>
                <textarea>

                </textarea>
            </div>
            <div class='textarea'>
                <span class="name">沟通计划</span>
                <textarea>

                </textarea>
            </div>
            <div class="submit">
                <button class="fillin" @click='Switch = false'>成交填写</button>
                <span>
                    <button @click='cancel(false)'>取消</button>
                    <button>提交</button>
                </span>
            </div>
        </div>
        <div class="modal-content two" v-else>
             <div>
                <span class="name">成交时间</span>
                <span>
                    <el-select v-model="value" size="small" placeholder="城市">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            size='mini'
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </span>
            </div>
            <div class='textarea'>
                <span class="name">成交信息备注</span>
                <textarea>

                </textarea>
            </div>
            <div>
                <span class="name">成交金额</span>
                <span>
                    <input type="text" placeholder="填写金额">
                </span>
                <i>元</i>
            </div>
            <div class="submit">
                <span>
                    <button @click='Switch = true'>返回</button>
                    <button>提交</button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                Switch: true
            }
        },
        methods: {
            cancel(bool){
                this.$emit('close', bool)
            }
        }
    }
</script>

<style lang='less' scoped>
    .modal-content{
        height: 50rem;
        display: flex;
        flex-direction: column;
        color: #888;
        font-size: 1.4rem;
        div{
            margin: 1rem 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            .name{
                display: inline-block;
                width: 12rem;
                &:before{
                    content: '*';
                    color: red;
                    font-size: 2.2rem;
                    margin: 4px 1rem 0 -1.2rem;
                }
            }
            ul{
                display: flex;
                flex-direction: row;
                li{
                    width: 6rem;
                    height: 2.6rem;
                    text-align: center;
                    line-height: 2.6rem;
                    background: #f2f2f2;
                    margin-right: 1.8rem;
                    color: #666;
                    border-radius: 4px;
                    &.active{
                        background: #f3f9ff;
                        color: #0079fe
                    }
                }
            }
            label{
                margin-right: 2rem;
            }
            span{
                // &:last-of-type{
                //     width: 20rem;
                // }
                input[type='text']{
                    width: calc(100% - 1em);
                    height: 3.6rem;
                    padding-left: 1em;
                    border: 1px solid #dcdfe6;
                    border-radius: 0.3rem;
                    &:focus{
                        border: 1px solid #0079fe;
                    }
                }
            }
            &.textarea{
                align-items: flex-start;
                .name{
                    flex: 0 0 12rem;
                }
                textarea{
                    padding: 1em 1em 0;
                    border: 1px solid #ccc;
                    flex-grow: 1;
                    height: 12rem;
                    border-radius: 1rem;
                }
            }
            &.submit{
                margin-top: 2rem;
                justify-content: space-between;
                button{
                    width: 8rem;
                    line-height: 3rem;
                    text-align: center;
                    border-radius: 4px;
                    background: #fff;
                    color: #777;
                    border: 1px solid #777;
                }
                .fillin{
                    background: #169bd5;
                    color: #fff;
                    border: none;
                }
            }
        }
    }
    .two{
        i{
            margin-left: 1em;
        }
        .submit{
            position: absolute;
            bottom: 2rem;
            right: 2rem;
        }
    }
</style>

