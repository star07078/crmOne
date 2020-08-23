<template>
    <div class="modal-box">
        <div class='modal-header'>
            <h4>派发客户</h4>
            <i class="iconfont iconzu999" @click='cancel(false)'></i>
        </div>
        <div class="modal-content">
            <div class="msg">
                <h3>基本信息</h3>
                <ul>
                    <li>
                        <span>姓名</span>
                        <div>
                            李东东
                        </div>
                    </li>
                    <li>
                        <span>手机号</span>
                        <div>
                            15687954256
                        </div>
                    </li>
                    <li>
                        <span>性别</span>
                        <div>
                            男
                        </div>
                    </li>
                    <li>
                        <span>功能权限</span>
                        <div>
                            <ul>
                                <li>
                                    <span>23</span>
                                    <a href="">编辑</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <span>数据权限</span>
                        <div>
                            <ul>
                                <li>
                                    <span class="city">石家庄</span>
                                    <span>服务商A</span>
                                    <span>服务商A</span>
                                    <a href="">编辑</a>
                                </li>
                                <li>
                                    <span class="city">石家庄</span>
                                    <span>服务商A</span>
                                    <span>服务商A</span>
                                    <a href="">编辑</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="img">
                <h3>头像照片</h3>
                <img src="../../../global/assets/wan.jpeg" alt="">
            </div>
        </div>
        <div class="modal-foot">
            <div>
                <mark :class="{active: start}" @click="start = !start"><i></i></mark>
                启用中
            </div>
            <div>
                <span @click='cancel(false)'>取消</span>
                <span @click='cancel(true)' class='active'>保存</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                start: true,
            }
        },
        methods: {
            cancel(bool){
                this.$emit('close', bool)
            }
        }
    }
</script>

<style lang="less" scoped>
    .modal-content{
        height: 100%;
        display: flex;
        flex-direction: row;
        .msg{
            flex: 1 1 50%;
            h3{
                font-weight: 600;
            }
            ul{
                li{
                    display: flex;
                    flex-direction: row;
                    align-items: top    ;
                    margin: 2rem 0;
                    span{
                        flex: 0 0 10rem;
                    }
                    div{
                        flex: 1 0 auto;
                        li{
                            display: flex;
                            margin: 0 0 2rem 0;
                            a{
                                float: right;
                            }
                        }
                    }
                }
            }
        }
        .img{
            margin-left: 3rem;
            flex: 1 1 50%;
            img{
                width: 16rem;
                height: 16rem;
                margin-top: 2rem;
            }
        }
    }
    .modal-foot{
        justify-content: space-between;
        align-items: center;
        mark{
            vertical-align: middle;
            width: 6rem;
            height: 3rem;
            display: inline-block;
            border-radius: 2rem;
            background: #0079fe;
            position: relative;
            transition: 0.5s;
            i{
                width: 2.6rem;
                height: 2.6rem;
                background: #fff;
                border-radius: 50%;
                display: inline-block;
                position: absolute;
                top: 0.2rem;
                right: 0.2rem;
                transition: 0.5s;
            }
            &.active{
                transition: 0.5s;
                background: #ccc;
                i{
                    transform: translateX(-3rem);
                }
            }

        }
    }
</style>