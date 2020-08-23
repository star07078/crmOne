<template>
    <div class="headhide heightOpen">
        <div class='advanced cl'>
            <strong>高级筛选</strong>
            <span class='fr'>查询</span>
        </div>
        <div class="condition">
            <dl>
                <dt>新增时段：</dt>
                <dd 
                    v-for="(val, i) in filter1.val"
                    :key='i'
                    @click='filterOptions(val, filter1.name)'
                    :class='{active: filter1.active == val}'
                >
                    {{ val }}
                </dd>
            </dl>
            <dl>
                <dt>首字母筛选：</dt>
                <dd 
                    v-for="(val, i) in filter2.val"
                    :key='i'
                    @click='filterOptions(val, filter2.name)'
                    :class='{active: filter2.active == val}'
                >
                    {{ val }}
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // 高级筛选1
                filter1: {
                    name: 'filter1',
                    active: '全部',
                    val: ['全部', '近30日新增', '近7日新增', '今日新增']
                },
                // 高级筛选2
                filter2: {
                    name: 'filter2',
                    active: '全部',
                    val: ['全部', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'X', 'Z', '#']
                },
            }
        },
        methods: {
            // 高级筛选的筛选选项
            filterOptions(val, name){
                if(name == 'filter1'){
                    this.filter1.active = val;
                }else{
                    this.filter2.active = val;
                }
            },
        }
    }
</script>

<style lang="less" scoped>
    @keyframes heightOpen{
        0%{
            height: 0;
        }
        100%{
            height: 18rem;
        }
    }
    .heightOpen{
        animation: heightOpen 0.6s;
    }
    .headhide{   
        width: 100%;
        height: 18rem;
        margin-top: 2rem;
        overflow: hidden;
        .advanced{
            height: 5rem;
            border-bottom: 1px solid #ccc;
            line-height: 5rem;
            box-sizing: border-box;
            span{
                width: 8rem;
                height: 3.4rem;
                margin-top: 0.8rem;
                line-height: 3.4rem;
                text-align: center;
                border-radius: 0.66rem;
                color: #fff;
                background: #0079fe;
            }
        }
        .condition{
            padding-top: 4rem;
            dl{
                display: flex;
                flex-direction: row;
                margin-bottom: 3rem;
                dt{
                    width: 12rem;
                    margin-right: 10px;
                    color: #666;
                    padding: 0.4rem 0;
                }
                dd{
                    margin-right: 0.4rem;
                    padding: 0.4rem 1.4rem;
                    cursor: pointer;
                    &.active{
                        background: #f3f9ff;
                        color: #0079fe;
                        border-radius: 0.2rem;
                        white-space: nowrap;
                    }
                }
                &:nth-of-type(2){
                    margin-bottom: 0;
                }
            }
        }
    }
</style>