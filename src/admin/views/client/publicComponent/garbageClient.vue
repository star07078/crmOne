<template>
    <aside>
        <h1>提示</h1>
        <p>将此客户评定为【E】级别客户，转入垃圾客户，请选择一个E级标签</p>
        <ul>
            <li><span>标签</span></li>
            <li><span>标签</span></li>
            <li><span>标签</span></li>
            <li class="active">自定义</li>
        </ul>
        <div>
            <span @click='cancel'>取消</span>
            <span class="active">确定</span>
        </div>
    </aside>
</template>

<script>
    export default {
        methods: {
            cancel(){
                this.$emit('close')
            }
        }
    }
</script>

<style lang="less" scoped>
    aside{
        background: #fff;
        padding: 0 4rem;
        h1{
            color: #0099ff;
            margin: 2rem 0;
        }
        p{
            font-size: 1.6rem;
            line-height: 4rem;
        }
        ul{
            display: flex;
            flex-direction: row;
            margin: 1rem 0 3rem;
            li{
                span{
                    display: inline-block;
                    width: 10rem;
                    height: 4rem;
                    background: #ccc;
                    line-height: 4rem;
                    text-align: center;
                    border-radius: 10px;
                    margin-right: 2rem;
                }
                &.active{
                    border: 1px solid #ccc;
                    background: #fff;
                    width: 10rem;
                    height: 4rem;
                    line-height: 4rem;
                    text-align: center;
                    border-radius: 10px;
                    margin-right: 2rem;
                    cursor: pointer;
                }
            }
        }
        div{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-bottom: 2rem;
            span{
                display: inline-block;
                width: 10rem;
                height: 4rem;
                border-radius: 1rem;
                border: 1px solid #ccc;
                background: #fff;
                text-align: center;
                line-height: 4rem;
                margin-left: 2rem;
                cursor: pointer;
                &.active{
                    background: #0079fe;
                    color: #fff;
                    border: none;
                }
            }
        }
    }
</style>