<template>
    <div class="modal-box module">
        <div class='modal-header'>
            <div class="title">
                <h4>快捷入口</h4>
            </div>
        </div>
        <div class="entry">
            <ul>
                <router-link to='/admin/client/publicd' tag='span'>
                    <i class="iconfont iconkehuguanli-copy"></i>
                    <p>公海客户</p>
                </router-link>
                <router-link to='/admin/client/privated' tag='span'>
                    <i class="iconfont iconkehugonghai"></i>
                    <p>私库客户</p>
                </router-link>
                <router-link to='/admin/client/garbage' tag='span'>
                    <i class="iconfont iconshanchu"></i>
                    <p>垃圾客户</p>
                </router-link>
                <router-link to='' tag='span'>
                    <i class="iconfont iconbumen"></i>
                    <p>销售部门</p>
                </router-link>
                <router-link to='/admin/setup/gz' tag='span'>
                    <i class="iconfont iconguize"></i>
                    <p>规则设置</p>
                </router-link>
                <router-link to='/admin/setup/pwd' tag='span'>
                    <i class="iconfont iconxiugaimima"></i>
                    <p>修改密码</p>
                </router-link>
                <router-link to='' tag='span'>
                    <i class="iconfont iconbianji"></i>
                    <p>个人信息设置</p>
                </router-link>
                <router-link to='/admin/setup/gr' tag='span'>
                    <i class="iconfont iconguanliyuan"></i>
                    <p>管理员管理</p>
                </router-link>
                <router-link to='/admin/news/xtnews' tag='span' class='newsNumber'>
                    <i class="iconfont iconxiaoxizhongxin1"></i>
                    <mark>40</mark>
                    <p>消息中心</p>
                </router-link>
            </ul>
        </div>
    </div> 
</template>
