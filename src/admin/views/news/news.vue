<template>
    <div class='main'>
        <mainNav>
            <template v-slot:list>
                <router-link :to="obj.url"
                    v-for='(obj, i) in list'
                    :key='i'
                    tag='dd'
                    class='news'
                >
                    {{obj.name}}
                    <span v-if="obj.num != 0">{{obj.num}}</span>
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
                        url: 'xtnews',
                        name: '系统消息',
                        num: 4
                    },
                    {
                        url: 'ywnews',
                        name: '业务消息',
                        num: 0
                    }
                ]
            }
        },
        created(){
            this.$store.commit('topNavTwo',this.list[0].name)
        }
    }
</script>

<style scoped>
    .news span{
        line-height: 2rem;
        content: '';
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        background: #ff5918;
        position: absolute;
        right: 2.2rem;
        top: 1.5rem; 
        color: #fff;
    }
</style>