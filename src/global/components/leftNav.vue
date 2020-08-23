<template>
    <div class="nav">
        <div>
            <div class="logo">
                <img src="../assets/logo.png" alt="大有企服">
            </div>
            <ul>
                <li
                    v-for='(obj,i) in nav1'
                    :key='i'
                    @click='jumpTop(obj,i)'
                >
                    <router-link :to="obj.url" tag='span'>
                        {{obj.name}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="setup">
            <div
                v-for='(obj,i) in nav2'
                :key='i'
                @click='jump(obj)'
            >
                <router-link tag="span" :to="obj.url">
                    <div>
                        {{obj.name}}
                        <i v-if='obj.msg'>{{obj.msg}}</i>
                    </div>
                </router-link>
            </div>
            <span @click='out'>退出</span>
            <span class="user">
                <img src="../assets/logo_title.png" alt="">
                {{'admin'}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nav',
        data(){
            return {
                nav1: [
                    {
                        url: '/admin/index',
                        name: '首页'
                    },
                    {
                        url: '/admin/client',
                        name: '客户管理'
                    },
                    {
                        url: '/admin/service',
                        name: '服务商'
                    },
                    {
                        url: '/admin/echarts',
                        name: '数据报表'
                    }
                ],
                nav2: [
                    {
                        url: '/admin/setup',
                        name: '设置'
                    },
                    {
                        url: '/admin/news',
                        name: '消息',
                        msg: '4'
                    }
                ]
            }
        },
        methods: {
            // 上面部分跳转
            jumpTop(obj,i){
                this.$store.commit('topNavOne',obj.name)
                this.$store.commit('topNavThree','')
                if(i == 0){
                    this.$store.commit('topNavTwo','')
                }
            },
            // 设置部分跳转
            jump(obj){
                this.$store.commit('topNavOne',obj.name)
                this.$store.commit('topNavThree','')
            },
            out(){
                var bool = confirm('确定要退出吗');
                if(bool){
                    window.localStorage.removeItem('token');
                    this.$router.push('/admin/login')
                }
            }
        }
    }
</script>

<style scoped>
    .nav{
        display: flex;
        flex-direction: column;
        flex: 1;
        background: #333;
        color: #eee;
        justify-content: space-between;
    }
    .logo{
        width: 100%;
        height: 7rem;
        line-height: 7rem;
    }
    .logo img{
        vertical-align: middle;
        width: 96%;
    }
    /* ul li:first-child{
        background: #000;
        color: #fff;
    } */
    span{
        line-height: 7rem;
        cursor: pointer;
        display: inline-block;
        height: 7rem;
        width: 100%;
        text-indent: 10px;
    }
    span:hover{
        color: #aaa;
    }
    span:hover i{
        color: #fff;
    }
    .setup{
        border-top: 1px solid #ccc;
        display: flex;
        flex-direction: column;
    }
    .router-link-active{
        background: #000;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .router-link-active:after{
        content: '';
        width: 0;
        height: 0;
        border-top: 0.8rem solid transparent;
        border-bottom: 0.8rem solid transparent;
        border-left: 1.5rem solid transparent;
        border-right: 1.5rem solid #fff;     
    }
    .user{
        background: #666;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 0.4rem;
    }
    .user img{
        width: 4rem;
        height: 4rem;
        background: #ccc;
        border-radius: 50%;
        margin-right: 0.6rem;
    }
    .setup span i{
        top: -0.2rem;
        right: -2.4rem;
        z-index: 100;
        width: 2rem;
        height: 2rem;
        display: inline-block;
        text-align: center;
        line-height: 2rem;
        background: #ff5918;
        border-radius: 50%;
        font-size: 1rem;
        transform: translateY(-0.6rem);
        text-indent: 0;
    }
</style>