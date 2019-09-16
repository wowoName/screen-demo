<template>
    <div class="chart-box">
        <div class="chart-title" v-if="title !== ''">
            <div class="header-title fraud-header-title">
                <slot name="header">
                    <i class="icon iconfont iconbiaotiicon"></i>
                    <span class="title fraud-title-bottom" :style="{width: titleBlock ? 'calc(100% - 0.6rem)' : 'auto'}">{{title}}</span>
                </slot>
            </div>
        </div>
        <div :class="[title !== '' ? 'chart-wrapper': 'chart-wrapper full-h']">
            <slot name="chart"></slot>
        </div>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {

        };
    },
    props: {
        title: {
            type: String,
            default: ""
        },
        titleBlock: {
            type: Boolean,
            default: false
        }
    },
    computed: {},
    watch: {},
    methods: {

    },
    created() {

    },
    mounted() {

    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
$fontColor: #0cfbff;
.chart-box {
    position: relative;
    z-index: 1;
    height: 17px;
    width: 100%;
    background: rgba(70, 196, 255, 0.07);
    .chart-title {
        height: 10.5px;
        .fraud-header-title {
            &::before {
                height: 1.5px;
            }
        }
        .header-title {
            height: 100%;
            box-sizing: border-box;
            text-align: left;
            position: relative;
            i {
                position: absolute;
                left: 3.2px;
                line-height: 10.5px;
                color: $fontColor;
                font-size: 10px;
            }
            &::before {
                content: "";
                display: inline-block;
                position: absolute;
                width: 6.4px;
                left: 5px;
                bottom: 0.32px;
                transform: rotate(30deg) translate(3.2px, -3.2px);
                background: $fontColor;
            }

            span {
                position: absolute;
                left: 15px;
                top: 0;
                height: 100%;
                line-height: 9.5px;
                padding: 0 6.4px 0 3.2px;
                bottom: 0;
                margin: auto;
                font-size: 5px;
                letter-spacing: 2px;
                display: inline-block;
                box-sizing: border-box;
                font-family: "微软雅黑 Regular";
                color: $fontColor;
            }
            .fraud-title-bottom {
                border-bottom: 1px solid $fontColor;
            }
            .title {
                &::after {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    height: 3.2px;
                    width: 3.2px;
                    right: 0;
                    bottom: -1.6px;
                    border-radius: 50%;
                    background: $fontColor;
                }
            }
        }
    }
}
</style>