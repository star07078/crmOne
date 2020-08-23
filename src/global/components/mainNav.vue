<template>
    <dl class="list" @click='changeTopNavTwo'>
        <dt>
            <slot name='title'>列表</slot>
        </dt>
        <slot name='list'></slot>
        <slot name='area'></slot>
    </dl>
</template>

<script>
    export default {
        methods: {
            changeTopNavTwo(ev){
                // 如果点击的是 dd ,则改变 vuex 中的 topNavTwo
                if(ev.target.nodeName == 'DD'){
                    this.$store.commit('topNavTwo', ev.target.firstChild.nodeValue)
                }
            }
        }
    }
</script>

<style lang='less' scoped>
    .list{
        display: flex;
        flex-direction: column;
        flex: 0 0 15rem;
        background: #fff;
        overflow-y: auto;
        font-size: 1.4rem;
        dt, dd{
            width: 100%;
            color: #333;
            text-align: center;
            border-bottom: 1px solid #ececec;
            font-weight: 600;
        }
        dt{
            color: #57a4fa;
            height: 5rem;
            line-height: 5rem;
            box-sizing: border-box;
        }
        dd{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            height: 6rem;
            position: relative;
            &:hover{
                color: #57a4fa;
            }
            &.router-link-active, &.active{
                position: relative;
                &:after{
                    content: '';
                    width: 0;
                    height: 0;
                    border-top: 0.8rem solid transparent;
                    border-bottom: 0.8rem solid transparent;
                    border-left: 1.5rem solid transparent;
                    border-right: 1.5rem solid #000;
                    position: absolute;
                    right: 0;
                }
            }
        }
        span{
            display: inline-block;
            width: 80%;
            border: 1px solid #555;
            margin: 3rem auto;
            text-align: center;
            border-radius: 0.6rem;
            padding: 0.8rem 0;
            cursor: pointer;
        }
    }

</style>

