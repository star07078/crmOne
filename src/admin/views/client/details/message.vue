<template>
    <div>
        <h3>基本信息</h3>
        <dl>
            <dd>
                <strong>公司名称</strong>
                <span>大有企服</span>
            </dd>
            <dd>
                <strong>联系人</strong>
                <span>贾春天</span>
            </dd>
            <dd>
                <strong>城市</strong>
                <span>河北石家庄</span>
            </dd>
            <dd>
                <strong>手机号</strong>
                <span>13579246810</span>
            </dd>
            <dd>
                <strong>地址</strong>
                <span>***************</span>
            </dd>
            <dd>
                <strong>所属行业</strong>
                <span>暂无</span>
            </dd>
        </dl>
    </div>
</template>

<style lang='less' scoped>
    h3{
        margin-bottom: 2rem;
    }
    dl{
        margin-bottom: 3rem;
        display: grid;
        grid-template-columns: 	repeat(2,2fr);
        dd{
            height: 4rem;
            line-height: 4rem;
            border: 1px solid #f0f0f0;
            border-top: none;
            display: inline-block;
            box-sizing: border-box;
            &:nth-child(1){
                border-top: 1px solid #f0f0f0;
            }
            &:nth-child(2){
                border-top: 1px solid #f0f0f0;
            }
            strong{
                display: inline-block;
                width: 12rem;
                height: 100%;
                text-align: right;
                padding-right: 1rem;
                background: #f5f5f5;
                color: #666;
                border-right: 1px solid #f0f0f0;
                box-sizing: border-box;
            }
            span{
                padding-left: 2rem;
            }
        }
    }
</style>