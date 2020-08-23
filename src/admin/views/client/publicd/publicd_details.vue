<template>
    <div class='details'>
        <Aside></Aside>
        <div class="basic">
            <Message />
            <Message />
            <Follow />
        </div>
    </div>
</template>

<script>
    import Aside from '../details/aside.vue'
    import Message from '../details/message.vue'
    import Follow from '../details/follow.vue'
    export default {
        components: {
            Aside,
            Message,
            Follow
        }
    }
</script>

<style lang='less' scoped>
    .details{
        flex-grow: 1;
        overflow-y: auto;
        .basic{
            background: #fff;
            padding: 2rem;
            margin-top: 2rem;
        }
    }
</style>