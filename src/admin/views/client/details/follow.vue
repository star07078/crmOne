<template>
    <div class="follow">
        <h3 class="mb20">跟进记录</h3>
        <dl>
            <dt>
                <span>成交填写</span>
                <span @click='writeFollowSwitch = true'>写跟进</span>
            </dt>
            <dd class="solid">
                <div class="time">
                    <span>4-27</span>
                </div>
            </dd>
            <!-- <dd class="top30 solid deal">
                <div class="notes">
                    <div class="message1 mb20 cl">
                        <span>
                            <i class="fa fa-window-maximize"></i>
                            客户归属
                        </span>
                        <strong>签单成交</strong>
                        <span class='price'>9999元</span>
                        <span class='fr'>
                            <i></i>
                            2019-03-23 22:31
                        </span>
                    </div>
                    <p>客户被 部门A 贾春天领取</p>
                    <div>
                        <span class='belong'>归属</span>
                        <p class='fr'>
                            <span class='fr_comment'>详情</span>
                            <span class='fr_comment'>评论</span>
                        </p>
                    </div>
                </div>
            </dd> -->
            <slot></slot>
            <dd class="solid">
                <div class="notes">
                    <div class="message1 mb20 cl">
                        <span>
                            <i class="fa fa-window-maximize"></i>
                            跟进
                        </span>
                        <strong>[第三次沟通]</strong>
                        <span class="tel">电话</span>
                        <span class='fr'>
                            <i></i>
                            2019-03-23 22:31
                        </span>
                    </div>
                    <div class="message2 mb20 cl">
                        <!-- 客户等级 -->
                        <ul>
                            <li>
                                客户等级
                                <span>A</span>
                            </li>
                            <li>
                                意向阶段
                                <span>第二阶段</span>
                            </li>
                            <li>
                                沟通时间
                                <span>2019-04-26</span>
                            </li>
                            <li>
                                沟通情况
                                <span>
                                    <a href='javascript:void(0)'>查看</a>
                                </span>
                            </li>
                            <li>
                                沟通计划
                                <span>
                                    <a href='javascript:void(0)'>查看</a>
                                </span>
                            </li>
                        </ul>
                        <span class='fr fr_comment'>
                            <i class=""></i>
                            评论
                        </span>
                    </div>
                </div>
            </dd>
            <dd class="top30 solid">
                <div class="notes">
                    <div class="message1 mb20 cl">
                        <span>
                            <i class="fa fa-window-maximize"></i>
                            客户归属
                        </span>
                        <span class='fr'>
                            <i></i>
                            2019-03-23 22:31
                        </span>
                    </div>
                    <p>客户被 部门A 贾春天领取</p>
                    <div>
                        <span class='belong'>归属</span>
                    </div>
                </div>
            </dd>
            <dd class="solid notop">
                <div class="time">
                    <span>4-27</span>
                </div>
            </dd>
            <dd class="top30">
                <div class="notes">
                    <div class="message1 mb20 cl">
                        <span>
                            <i class="fa fa-window-maximize"></i>
                            跟进
                        </span>
                        <span>[第三次沟通]</span>
                        <span>电话</span>
                        <span class='fr'>
                            <i></i>
                            2019-03-23 22:31
                        </span>
                    </div>
                    <div class="message2 mb20 cl">
                        <!-- 客户等级 -->
                        <ul>
                            <li>
                                客户等级
                                <span>A</span>
                            </li>
                            <li>
                                意向阶段
                                <span>第二阶段</span>
                            </li>
                            <li>
                                沟通时间
                                <span>2019-04-26</span>
                            </li>
                            <li>
                                沟通情况
                                <span>
                                    <a href='javascript:void(0)'>查看</a>
                                </span>
                            </li>
                            <li>
                                沟通计划
                                <span>
                                    <a href='javascript:void(0)'>查看</a>
                                </span>
                            </li>
                        </ul>
                        <span class='fr fr_comment'>
                            <i class=""></i>
                            评论
                        </span>
                    </div>
                    <div class="comment">
                        <span>
                            <i></i>
                            赵小刚
                            2019-03-23 20:21
                        </span>
                        <span>
                            上门拜访了客户，客户对产品意向很高，但是希望价格能有优惠。
                        </span>
                    </div>
                    <div class="submit">
                        <input type="text" placeholder='请输入评论'>
                        <input type="submit" value="评论">
                    </div>
                </div>
            </dd>
        </dl>
        <Alert v-if='writeFollowSwitch' @close='writeFollowSwitch = false'>
            <WriteFollow @close='writeFollowSwitch = false' />
        </Alert>
    </div>
</template>

<script>
    import WriteFollow from './writeFollow.vue'
    export default {
        components: {
            WriteFollow
        },
        data(){
            return {
                writeFollowSwitch: false,
            }
        }
    }
</script>

<style lang='less' scoped>
    .follow{
        // 评论 详情按钮的样式
        .fr_comment{
            border: 1px solid #eee;
            background: #fff;
            padding: 0 2rem;
            height: 3rem;
            display: inline-block;
            text-align: center;
            line-height: 3rem;
            color: #222;
        }
        dl{
            position: relative;
            top: 3rem;
            dt{
                position: absolute;
                z-index: 1000;
                top: -1rem;
                right: 0;
                color: #fff;
                span{
                    margin-left: 2rem;
                    background: #0079fe;
                    display: inline-block;
                    height: 3rem;
                    padding: 0 1.6rem;
                    line-height: 3rem;
                    cursor: pointer;
                }
            }
            dd{
                padding-left: 3rem;
                padding-bottom:3rem;
                border-left: 1px solid #ccc;
                position: relative;
                &:before{
                    content: '';
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    border: 1px solid #0079fe;
                    background: #fff;
                    position: absolute;
                    left: -5px;
                }
                &.solid{
                    &:before{
                        background: #0079fe;
                    }
                }
                &.top30{
                    &:before{
                        top: 3rem;
                    }
                }
                &:nth-of-type(1){
                    padding-bottom: 2rem;
                }
                .time{
                    position: relative;
                    padding-left: 1.4rem;
                    top: -1rem;
                    span{
                        color: #fff;
                        background: #0079fe;
                        display: inline-block;
                        height:  3rem;
                        padding: 0 1.6rem;
                        line-height: 3rem;
                        &:before{
                            content: '';
                            display: inline-block;
                            width: 0;
                            height: 0;
                            border-top: 1.5rem solid transparent;
                            border-bottom: 1.5rem solid transparent;
                            border-left: 1.5rem solid transparent;
                            border-right: 1.5rem solid #0079fe;
                            position: absolute;
                            left: -1.6rem;
                            top: 0;
                        }
                    }
                }
                &.notop{
                    &:before{
                        top: 0.8rem;
                    }
                    .time{
                        top: 0;
                    }
                }
                .notes{
                    border: 1px solid #e3eff8;
                    background: #f7fbfe;
                    padding: 2rem;
                    font-size: 1.6rem;
                    .mb20{
                        margin-bottom: 2rem;
                    }
                    p{
                        font-size: 1.4rem;
                        color: #999;
                        margin-bottom: 1rem;
                    }
                    .belong{
                        display: inline-block;
                        width: 6.4rem;
                        height: 3rem;
                        color: #333;
                        font-size: 1.4rem;
                        text-align: center;
                        line-height: 3rem;
                        background: #d7d7d7;
                    }
                    .message1{
                        span{
                            margin-right: 2rem;
                            &.fr{
                                margin-right: 0;
                            }
                        }
                        strong{
                            color: rgb(0, 153, 255);
                            margin-right: 2rem;
                        }
                        .tel{
                            padding: 6px 2rem;
                            background: #d7d7d7;
                        }
                        .price{
                            font-size: 2rem;
                            font-weight: 800;
                        }
                    }
                    .message2{
                        ul{
                            display: inline-block;
                            height: 3rem;
                            line-height: 3rem;
                            li{
                                display: inline-block;
                                margin-right: 3rem;
                                span{
                                    display: inline-block;
                                    height: 3rem;
                                    padding: 0 2rem;
                                    background: #eee;
                                    margin: 0 1.4rem;
                                }
                            }
                        }
                    }
                    .comment{
                        margin-bottom: 2rem;
                        padding: 2rem;
                        background: #ffffff;
                        border: 1px solid #e3eff7;
                        span{
                            display: block;
                            &:first-child{
                                margin-bottom: 2rem;
                            }
                        }
                    }
                    .submit{
                        height: 4rem;
                        border: 1px solid #ccc;
                        background: #fff;
                        position: relative;
                        box-sizing: border-box;
                        input[type='text']{
                            width: 100%;
                            height: 100%;
                            line-height: 4rem;
                            padding-left: 2rem;
                            box-sizing: border-box;
                            border: none;
                        }
                        input[type='submit']{
                            position: absolute;
                            right: 0;
                            top: 0;
                            width: 8rem;
                            height: 3.8rem;
                            background: #0079fe;
                            color: #fff;
                        }
                    }
                }
                &.deal{
                    .notes{
                        background: #ffff9e;
                    }
                }
            }
        }
    }
</style>