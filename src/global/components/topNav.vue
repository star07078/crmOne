<template>
    <div class="topnav">
        <div>
            <ul>
                <i class='iconfont iconzhuye2'></i>
                <li v-if="topNavOne">{{topNavOne}}</li>
                <li v-if="topNavTwo">{{topNavTwo}}</li>
                <li v-if="topNavThree">{{topNavThree}}</li>
            </ul>
            <span>总站-超级管理员</span>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        computed: mapState({
            topNavOne: state=>{
                return state.topNavOne ? state.topNavOne : null;
            },
            topNavTwo: state=>{
                return state.topNavTwo ? state.topNavTwo : null;
            },
            topNavThree: state=>{
                return state.topNavThree ? state.topNavThree : null;
            },
        })
    }
</script>

<style lang="less" scoped>
    .topnav{
        flex: 0 0 5rem;
        width: 100%;
        border-bottom: 1px solid #ececec;
        padding: 0 2rem;
        background: #fff;
        box-sizing: border-box;
        div{
            display: flex;
            height: 100%;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            ul{
                li{
                    display: inline;
                    &:before{
                        content: '>';
                        margin: 0 1rem;
                    }
                }
            }
        }
    }
</style>