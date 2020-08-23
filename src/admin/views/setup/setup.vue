<template>
    <div class='main'>
        <mainNav>
            <template v-slot:list>
                <router-link :to="obj.url"
                    v-for='(obj, i) in list'
                    :key='i'
                    tag='dd'
                >
                    {{obj.name}}
                </router-link>
            </template>
        </mainNav>
        <div class="main-content">
            <TopNav />
            <router-view />
        </div>
    </div>
</template>

<script>
    import mainNav from '../../../global/components/mainNav.vue'
    import TopNav from '../../../global/components/topNav.vue'
    export default {
        name: 'client',
        components: {
            TopNav,
            mainNav
        },
        data() {
            return {
                active: 'publicd_details',
                list: [
                    {
                        url: 'gz',
                        name: '规则设置'
                    },
                    {
                        url: 'pwd',
                        name: '修改密码'
                    },
                    {
                        url: 'gr',
                        name: '个人信息设置'
                    },
                    {
                        url: 'gly',
                        name: '管理员设置'
                    }
                ]
            }
        },
        created(){
            this.$store.commit('topNavTwo',this.list[0].name)
        }
    }
</script>

<style lang='less'>
    .footer{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        button{
            margin-right: 20px;
            width: 140px;
            height: 40px;
            border: 1px solid #0079FE;
            background: #fff;
            font-weight: 400;
            border-radius: 3px;
            color: #0079FE;
            &:hover{
                color: rgb(79, 140, 253);
            }
            &.active{
                background: #0079FE;
                color: #fff;
                border: none;
                &:hover{
                    background: rgb(79, 140, 253);
                }
            }
        }
    }
    .submitShow{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 350px;
        background: rgba(234, 237, 241, 0.8);
        border: 1px solid #aaa;
        box-shadow: 0 0 10px 10px rgba(187, 187, 187, 0.3);
        i{
            margin-top: 100px;
            width: 60px;
            height: 60px;
            // background: red;
            // border-radius: 50%;
            font-size: 60px;
            &.iconjiazai{
                @keyframes rotate {
                    0%{
                        transform: rotate(0);
                    }
                    100%{
                        transform: rotate(360deg);
                    }
                }
                animation: rotate 3s linear infinite;
            }
            &.iconzu999{
                color: red;
            }
            &.icondui2{
                color: #00cccc;
            }
        }
        h2{
            margin: 20px 0 10px;
        }
        p{
            font-size: 16px;
            margin-top: 10px;
        }
    }
</style>