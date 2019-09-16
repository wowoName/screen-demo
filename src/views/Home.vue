<template>
    <div class='home'>
        <div class="home-header">
            <h1><span>防范打击互联网诈骗 信息共享和协同联动系统</span></h1>
            <ul class="menu">
                <li v-for="(item,index) in menu" :key='index' class="menu-item ">{{item}}</li>
            </ul>
            <div class="back"></div>
        </div>
        <div class="home-content">
            <div class="charts-left">
                <div class="charts-item">
                    <charts-title title='态势总览'></charts-title>
                    <div class="item fraud-item">
                        <div class="left-ts">
                            <div v-for='(item,index) in tsData' :key='index' class="left-ts-item">
                                <div class="left-ts-left">
                                    <i class="icon iconfont" :class="item.icon"></i>
                                    <span>{{item.desc}}</span>
                                </div>
                                <span class="left-ts-right">
                                    <animated-number :value="item.count" :formatValue="formatToPrice" :duration="1000" :delay="500" /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="charts-item">
                    <charts-title title='涉诈微信/QQ类型分布'></charts-title>
                    <div class="item fraud-item">
                        <pie-charts></pie-charts>
                    </div>
                </div>
                <div class="charts-item">
                    <charts-title title='涉诈微信QQ号举报量趋势'></charts-title>
                    <div class="item fraud-item">
                        <line-charts></line-charts>
                    </div>
                </div>

            </div>
            <div class="charts-center">
                <div class="fraud-center-top">
                    <div class="mapTitle">疑似受害者全国分布</div>
                    <map-charts />
                </div>
                <div class="center-bottom">
                    <div class="charts-item fraud-item">
                        <charts-title title='涉诈APP类型分布'></charts-title>
                        <div class="item ">
                            <pie-charts></pie-charts>
                        </div>
                    </div>
                    <div class="charts-item fraud-item">
                        <charts-title title='应用商店涉诈APP总量排名'></charts-title>
                        <div class="item ">
                            <trans-bar-charts :yData='appData' :barData='appDataValue' />
                        </div>
                    </div>
                </div>
            </div>
            <div class="charts-right">
                <div class="charts-item">
                    <charts-title title='涉诈网站总量每月总量趋势
'></charts-title>
                    <div class="item fraud-item">
                        <bar-charts></bar-charts>
                    </div>
                </div>
                <div class="charts-item">
                    <charts-title title='涉诈网站类型分布'></charts-title>
                    <div class="item fraud-item">
                        <pie-charts></pie-charts>
                    </div>
                </div>
                <div class="charts-item">
                    <charts-title title='涉诈网站境外接入国家排名'></charts-title>
                    <div class="item fraud-item">
                        <trans-bar-charts />
                    </div>
                </div>
                <div class="charts-item">
                    <charts-title title='境外接入占比'></charts-title>
                    <div class="item fraud-item">
                        <liquid-fill-charts />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//饼状图
import PieCharts from '@/components/PieCharts'
//折线图
import LineCharts from '@/components/LineCharts'
//柱状图
import BarCharts from '@/components/BarCharts'
//水球图
import LiquidFillCharts from '@/components/LiquidFillCharts'
//横向柱状图
import TransBarCharts from '@/components/TransBarCharts'
//地图
import MapCharts from '@/components/MapCharts'
//标题
import ChartsTitle from '@/components/ChartsTitle'
//数字特效
import AnimatedNumber from "animated-number-vue"
export default {
    components: { PieCharts, ChartsTitle, AnimatedNumber, LineCharts, BarCharts, LiquidFillCharts, TransBarCharts, MapCharts },
    data() {
        return {
            menu: ["综合态势", "数据汇聚", "检测处置", "深度分析", "涉缅专题", "电诈专题"],
            tsData: [{
                icon: 'iconweixin',
                desc: '描述',
                count: 12345679
            }, {
                icon: 'iconweixin',
                desc: '描述',
                count: 100
            }, {
                icon: 'iconweixin',
                desc: '描述',
                count: 100
            }, {
                icon: 'iconweixin',
                desc: '描述',
                count: 100
            }, {
                icon: 'iconweixin',
                desc: '描述',
                count: 100
            }],//态势数据
            appData: ['360手机助手', '系统天堂', '小米应用市场', '99软件园', '56手机游戏'],
            appDataValue: ['15', '152', '365', '222', '146']
        };
    },
    computed: {},
    watch: {},
    methods: {
        formatToPrice(value) {
            return value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        }
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
.home {
    width: 100%;
    height: 100%;
    background: url(../assets/img/bg-bluish.png) no-repeat center center / 100%
        100%;
    .home-header {
        width: 100%;
        height: 19px;
        margin-bottom: 6.5px;
        z-index: 1;
        background: url(../assets/img/title-bg.png) no-repeat center center /
            100% 100%;
        position: relative;
        h1 {
            display: flex;
            align-items: center;
            float: left;
            height: 21px;
            padding: 0 32px 0 4px;
            background: url(../assets/img/title.png) no-repeat left top / 100%
                100%;
            span {
                font-size: 9.6px;
                background-image: -webkit-linear-gradient(
                    top,
                    #c4f9ff,
                    #23cdf8
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
        .menu {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
            .menu-item {
                font-size: 6px;
                float: left;
                padding: 0 12.8px;
                margin-right: 6.4px;
                height: 12.8px;
                line-height: 12.8px;
                color: #59b5da;

                background: url(../assets/img/menu.png) no-repeat center center /
                    100% 100%;
                font-family: "SimHei", "Microsoft YaHei", "Courier New", Courier,
                    monospace;
                font-weight: 600;
                letter-spacing: 1px;
                cursor: pointer;
            }
        }

        .back {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 16px;
            height: 16px;
            background: url(../assets/img/back.png) no-repeat center center /
                100% 100%;
            cursor: pointer;
        }
    }
    @mixin contentItem($size: 25%) {
        height: 100%;
        width: $size;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        border-radius: 3px;
    }

    @mixin common-item($posi: left, $height: 25%, $width: 100%, $float: true) {
        width: $width;
        height: $height;
        padding-left: 3.2px;
        box-sizing: border-box;
        .item {
            @include com-item-item($float, $posi);
        }
    }
    @mixin com-item-item(
        $float,
        $posi: left,
        $h: calc(100% - 20.2px),
        $w: 100%
    ) {
        @if $float==true {
            float: $posi;
        }
        width: $w;
        height: $h;
        background-color: rgba(70, 196, 255, 0.07);
    }
    .home-content {
        position: absolute;
        top: 25.5px;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        .charts-left {
            @include contentItem(25%);
            .charts-item {
                @include common-item(right, calc(100% / 3));
            }
            .left-ts {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                flex-direction: column;
                color: #0cfbff;
                .left-ts-item {
                    padding: 0 10px;
                    width: 100%;
                    height: 16%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .left-ts-left {
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        height: 100%;
                        i {
                            font-size: 7px;
                        }
                        span {
                            font-weight: 500;
                            margin-left: 4px;
                            font-size: 6px;
                        }
                    }
                    .left-ts-right {
                        font-family: "DS-Digital";

                        color: #ecec48;
                        font-size: 8px;
                    }
                }
            }
        }
        .charts-center {
            @include contentItem(50%);
            .fraud-center-top {
                position: relative;
                width: 100%;
                height: calc(75% - 20px);
            }
            .mapTitle {
                position: absolute;
                top: 5px;
                left: 6px;
                height: 10px;
                width: 98.9px;
                background: url(../assets/img/graphTitle.png) no-repeat center
                    center / 100% 100%;
                z-index: 10;
                color: #fff;
                font-size: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .center-bottom {
                width: 100%;
                height: 25%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                .charts-item {
                    @include com-item-item(
                        "left",
                        false,
                        100%,
                        calc(50% - 10px)
                    );
                    .item {
                        width: 100%;
                        height: calc(100% - 17px);
                    }
                }
                .fraud-item {
                    width: calc(50% - 10px);
                }
            }
        }
        .charts-right {
            @include contentItem(25%);
            .charts-item {
                @include common-item;
                padding-left: 0;
                padding-right: 3.2px;
            }
        }
    }
}
</style>