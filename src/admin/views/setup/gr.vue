<template>
    <div class="content gr">
        <ul>
            <li class='img'>
                <span></span>
                <div>
                    <label for='file'>
                        <img :src="imgSrc" alt="">
                        <p>{{ imgMsg }}</p>
                    </label>
                    <input type="file" @change="base64($event)" name="" id="file">
                </div>
            </li>
            <li>
                <span>
                    姓名
                </span>
                <input type="text" v-model='user' placeholder="请输入姓名">
            </li>
            <li>
                <span>
                    手机号
                </span>
                <input type="text" v-model='tel' placeholder="新输入手机号">
            </li>
            <li>
                <span>
                    性别
                </span>
                <el-select v-model="sex" placeholder="请选择性别">
                    <el-option
                        v-for="item in sexOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </li>
            <li >
                <span></span>
                <div class="footer">
                    <button @click='reset'>重置</button>
                    <button class="active" @click='submit'>提交</button>
                </div>
            </li>
        </ul>
        <Alert mask="hide" width="70rem" v-if="submitShow">
            <div class="submitShow">
                <!-- iconjiazai icondui2 iconzu999 -->
                <i class="iconfont" :class="showClass"></i>
                <h2>{{msg1}}</h2>
                <p>{{msg2}}</p>
            </div>
        </Alert>
    </div>
</template>

<script>
    import Alert from '../../../global/components/alert.vue'
    var p = new Promise((res, rej)=>{
        axios.get('/index.php/crm/admin/information/info')
        .then((data)=>{
            res(data)
        })
        .catch(()=>{
            rej();
        })  
    })
    export default {
        components: {
            Alert
        },
        data(){
            return {
                user: '',
                tel: '',
                sex: '',
                imgSrc: '../../../static/wan.jpeg',          //默认显示照片
                imgMsg: '选择一张个人正面照片作为头像',         //照片下的文字
                submitShow: false,                           //点击提交显示的提示 
                showClass: '',                               //加载对错图标
                msg1: '',                                    //提示的消息1
                msg2: '',                                    //提示的消息2
                sexOptions: [                                //性别
                    {
                        value: '2',
                        label: '男'
                    }, 
                    {
                        value: '1',
                        label: '女'
                    }
                ],
            }
        },
        methods: {
            show: function(obj){
                let { showClass, msg1, msg2} = obj;
                showClass = showClass == 0 ? 
                'iconjiazai' : showClass == 1 ? 'icondui2' : 'iconzu999';
                return new Promise((res, rej)=>{
                    this.showClass = showClass;
                    this.msg1 = msg1;
                    this.msg2 = msg2;
                    this.submitShow = true;
                    setTimeout(()=>{ 
                        this.submitShow = false
                        res()
                    },2000)
                })
            },
            submit(){
                var reg = /^1[3456789]\d{9}$/;

                if(!this.user){
                    this.show({
                        showClass: 2,
                        msg1: '姓名不能为空'
                    })
                }
                if(!reg.test(this.tel)){
                    this.show({
                        showClass: 2,
                        msg1: '请输入正确格式的手机号'
                    })
                    return;
                }

                this.submitShow = true;
                this.msg1 = '正在修改信息，请稍后';
                this.showClass = 'iconjiazai';

                this.$axios({
                    url: '/index.php/crm/admin/information/info',
                    method: 'post',
                    data: {
                        avatar: this.imgSrc,
                        name: this.user,
                        tel: this.tel,
                        sex: this.sex == '男' ? 2 : 1
                    }
                })
                .then((data)=>{
                    console.log(data)
                    this.show({
                        showClass: 1,
                        msg1: '修改成功'
                    })
                })
                .catch(()=>{
                    this.show({
                        showClass: 2,
                        msg1: '修改失败'
                    })
                })
            },
            reset(){
                this.tel = this.user = this.sex = ''
            },
            base64(ev){
                var img = ev.target.files[0];
                if(img){
                    let reader = new FileReader();
                    reader.readAsDataURL(img);
                    reader.onload = (evt)=>{
                        var base64 = evt.target.result;
                        this.imgSrc = base64;
                        this.imgMsg = img.name;
                    };
                }
            },
        },
        created(){
            p.then((data)=>{
                let {name, sex, tel, avatar} = data.data.data.data;
                this.user = name;
                this.sex = sex == 1 ? '女' : '男';
                this.tel = tel;
                this.imgSrc = 'http://192.168.1.17/' + avatar;
            })
            p.catch((data)=>{
                this.show({
                    showClass: 2,
                    msg1: '获取数据失败，请刷新网页'
                })
            })
        }
    }
</script>

<style lang="less" scoped>
    .gr{
        display: flex;
        flex-direction: row;
        align-items: center;
        // justify-content: center;
        ul{
            width: 60rem;
            li{
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 4rem;
                span{
                    flex: 0 0 10rem;
                    text-align: right;
                    margin-right: 2rem;
                }
                input{
                    height: 5rem;
                    font-size: 1.8rem;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                    padding-left: 1rem;
                    flex: 1 0 auto;
                }
                .el-select{
                    flex: 1 0 auto;
                }
            }
            .img{
                label{
                    width: 30rem;
                    height: 30rem;
                    display: block;
                    background: #eee;
                    border: 3px  dashed #999;
                    text-align: center;
                    img{
                        width: 14rem;
                        height: 14rem;
                        display: block;
                        border-radius: 50%;
                        border: 2px solid #aaa;
                        margin: 4rem auto;
                    }
                }
                input{
                    display: none;
                }
            }
        }
    }
</style>