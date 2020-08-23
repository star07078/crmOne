<template>
    <div class="modal-box">
        <div class='modal-header'>
            <div class="title">
                <h4>公告</h4>
            </div>
            <div class="option">
                <span class="btn" @click='alertSwitch = placardSwitch = true'>发布公告</span>
                <span class="btn">查看更多></span>
            </div>
        </div>
        <div class="modal-content">
            <ul>
                <li v-for="(obj, i) in list" :key='i' @click='showMsg(i)'>
                    <strong>[公告]{{obj.title}}</strong>
                    <span>
                        <i class="iconfont iconios-shijian"></i>
                        2019-05-02 15:48
                    </span>
                </li>
            </ul>
        </div>
        <Alert v-if='alertSwitch' @close='alertSwitch = false'>
            <div class="modal-box" v-if="placardSwitch">
                <div class='modal-header'>
                    <strong>公告发布</strong>
                    <i class="iconfont iconzu999" @click='alertSwitch = false'></i>
                </div>
                <div class="modal-content module2-alert">
                    <div class="mb2">
                        <span>公告标题</span>
                        <span class="rightInput">
                            <input type="text" placeholder="请填写标题" v-model.lazy='title'>
                        </span>
                    </div>
                    <div class="mb2">
                        <span>公告分类</span>
                        <span class="rightInput">
                            <el-select v-model="value2" size="small" placeholder="服务商">
                                <el-option
                                    v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </span>
                    </div>
                    <div class="mb2">
                        <span>公告内容</span>
                        <textarea v-model.lazy='msg'></textarea>
                    </div>
                    <div class="mb2">
                        <span>发布时间</span>
                        <el-date-picker
                        v-model="time"
                        type="datetime"
                        size='mini'
                        format="yyyy-MM-dd H:m"
                        value-format="yyyy-MM-dd H:m"
                        placeholder="选择日期时间">
                        </el-date-picker>
                        <span>
                            <label>
                                <input type="checkbox" v-model='checked'>立即发布
                            </label>
                        </span>
                    </div>
                    <div class="btn">
                        <button @click='alertSwitch = false'>取消</button>
                        <button @click='sumbitAlertSwitchFn'>提交</button>
                    </div>
                </div>
            </div>
            <div class="modal-box" v-else>
                <div class='modal-header'>
                    <strong>{{ list[i].title }}</strong>
                    <i class="iconfont iconzu999" @click='alertSwitch = false'></i>
                </div>
                <div class="modal-content module2-alert">
                    <p>{{ list[i].msg }}</p>
                </div>
            </div>
        </Alert>
    </div>
</template>

<script>
    export default {
        name: 'module2',
        data(){
            return {
                alertSwitch: false,
                i: 0,   //记录查看的是当前那条公告的索引
                placardSwitch: true,  //打开的是发布公告 或者 查看公告的显示开关
                list: [
                    {
                        title: '如何建立好客户关系1',
                        time: '2020-05-13 13:02:51',
                        msg: '如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系'
                    },
                    {
                        title: '如何建立好客户关系2',
                        time: '2020-05-13 13:02:51',
                        msg: '如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系'
                    },
                    {
                        title: '如何建立好客户关系3',
                        time: '2020-05-13 13:02:51',
                        msg: '如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系如何建立好客户关系'
                    }
                ],
                title: '',
                msg: '',
                time: '',
                checked: false, //是否立即发布
            }
        },
        methods: {
            sumbitAlertSwitchFn(){
                switch(''){
                    case this.title:
                        this.$message.error('标题不能为空');
                        break;
                    case this.mag:
                        this.$message.error('内容不能为空');
                        break;
                    case this.time:
                        this.$message.error('时间不能为空');
                        break;
                    default:
                        {
                            if(this.checked){
                                this.list.unshift({
                                    title: this.title,
                                    msg: this.msg,
                                    time: this.time
                                })
                            }
                            this.$message({
                                type: 'success',
                                message: '提交成功'
                            });
                            this.alertSwitch = false;
                            this.title = this.msg = this.time = '';
                        }
                }
            },
            showMsg(i){
                this.alertSwitch = true;
                this.placardSwitch = false;
                this.i = i;
            }
        }
    }
</script>

<style lang="less" scoped>
    .modal-box{
        background: #fff;
    }
    li{
        border-bottom: 1px solid #ccc;
        height: 4.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        &:hover{
            color: #999;
        }
    }
    .module2-alert{
        height: auto;
        min-height: 40rem;
        padding-right: 10rem;
        p{
            text-indent: 2em;
        }
        .mb2{
            display: flex;
            flex-direction: row;
            margin: 2rem 0;
            span{   
                flex: 0 1 10rem;
                color: #999;
                line-height: 4rem;
                vertical-align: middle;
                input{
                    vertical-align: middle;
                    margin-left: 2rem;
                }
            }
            .rightInput{
                display: inline-block;
                width: 30rem;
            }
            input{
                border: 1px solid #DCDFE6;
                border-radius: 0.3rem;
                padding-left: 1rem;
                &[type=text]{
                    width: 30rem;
                    height: 4rem;
                }
            }
            textarea{
                flex: 1 1 auto;
                border: 1px solid #DCDFE6;
                height: 30rem;
                border-radius: 0.3rem;
                padding: 1rem;
            }
        }
        .btn{
            text-align: right;
            margin: 0 0 3rem 0;
            button{
                padding: 0.6rem 3rem;
                margin-left: 3rem;
                border: 1px solid #DCDFE6;
                border-radius: 0.3rem;
            }
        }
    }
</style>
