<template>
    <div class="charts" ref="myEchart"></div>
</template>

<script>
//地图数据
import mapData from '@/assets/data/mapData'
import echarts from "echarts"
import resize from '@/mixin/chartsResize'
import 'echarts/map/js/china' // 引入中国地图数据
export default {
    name: "mapCharts",
    props: {

    },
    data() {
        return {
            chart: null
        };
    },
    mixins: [resize],
    mounted() {
        this.initChart();
    },
    beforeDestroy() {
        if (!this.chart) {
            return;
        }
        this.chart.dispose();
        this.chart = null;
    },
    methods: {
        initChart() {
            let myChart = this.chart = echarts.init(this.$refs.myEchart);

            // 把配置和数据放这里
            myChart.setOption({ // 进行相关配置
                backgroundColor: "transparent",
                tooltip: {}, // 鼠标移到图里面的浮动提示框

                geo: { // 这个是重点配置区
                    map: 'china', // 表示中国地图
                    roam: true//可以缩放地图
                },
                //左侧小导航图标
                visualMap: {
                    show: true,
                    left: '3%',
                    bottom: '5%',
                    splitList: [
                        { start: 1000000 },
                        { start: 100000, end: 999999 }, { start: 10000, end: 99999 },
                        { start: 1000, end: 9999 }, { start: 0, end: 999 },
                    ],
                    color: ['#a0131d', '#911267', '#6d219f', '#0062ba', '#0058eb'],
                    textStyle: {
                        color: '#008cbc'
                    }
                },
                series: [
                    {
                        name: '中国地图', // 浮动框的标题
                        type: 'map',
                        geoIndex: 0,
                        data: mapData
                    }
                ]
            })
            this.resizeCharts()
        }
    }
};
</script>

<style lang='scss' scoped>
.charts {
    width: 100%;
    height: 100%;
}
</style>