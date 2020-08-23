<template>
    <div class='main'>
        <mainNav>
            <template v-slot:list>
                <dd
                    v-for='(obj, i) in list'
                    :key='i'
                    tag='dd'
                    :class='{active: active == obj.id}'
                    @click='taggleArea(obj,i)'
                >
                    {{obj.name}}({{obj.ratio}}%)
                </dd>
            </template>
            <template v-slot:area>
                <span @click='addArea = true'>创建地区</span>
            </template>
        </mainNav>
        <div class="main-content">
            <TopNav />
            <Area :areaMsg='areaMsg' @editArea='editArea' @deleteArea='deleteArea'/>
        </div>
        <Alert v-if="addArea" @close='addArea = false'>
            <AddAndEdit @close='close'/>
        </Alert>
    </div>
</template>

<script>
    import mainNav from '../../../global/components/mainNav.vue'
    import TopNav from '../../../global/components/topNav.vue'
    import Area from './area.vue'
    import AddAndEdit from './addAndEdit.vue'
    export default {
        name: 'client',
        components: {
            TopNav,
            mainNav,
            AddAndEdit,
            Area
        },
        data() {
            return {
                active: 'bj',
                // 创建地区显示开关
                addArea: false,
                areaMsg: {},
                list: [
                    {
                        id: 'bj',
                        name: '北京市',
                        ratio: 20
                    },
                    {
                        id: 'lf',
                        name: '廊坊市',
                        ratio: 40
                    },
                    {
                        id: 'sjz',
                        name: '石家庄市',
                        ratio: 58
                    }
                ]
            }
        },
        methods: {
            // 根据传进来的obj 来判断 提交 或 关闭
            close(obj){
                if(obj){
                    this.list.push({
                        name: obj.name,
                        ratio: obj.ratio
                    })
                    this.$message('添加成功');
                }
                this.addArea = false;
            },
            // 提交编辑信息
            editArea(obj){
                this.list.splice(this.areaMsg.index, 1, obj);
                this.areaMsg = obj;
            },
            taggleArea(obj,i){
                obj.index = i;
                this.active = obj.id;
                this.areaMsg = obj;
            },
            deleteArea(){
                this.list.splice(this.areaMsg.index, 1);
                this.areaMsg = this.list[0];
                this.areaMsg.index = 0;
                this.$message('删除城市成功')
            }
        },
        created() {
            this.areaMsg = this.list[0];
            this.areaMsg.index = 0;

            let active = window.sessionStorage.getItem('area');
            this.active = active == null ? this.list[0].id : active;
            window.addEventListener('beforeunload', ()=>{
                window.sessionStorage.setItem('area', this.active);
            })
            this.$store.commit('topNavTwo',this.list[0].name)
        },
        destroyed() {
            window.sessionStorage.setItem('area', this.list[0].id);
        }
    }
</script>