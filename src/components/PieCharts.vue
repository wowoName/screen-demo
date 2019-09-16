<template>
    <div class="charts" ref="myEchart"></div>
</template>

<script>
import echarts from "echarts"
import resize from '@/mixin/chartsResize'
export default {
    name: "pieCharts",
    props: {
    },
    data() {
        return {
            chart: null,
            fontScale: 1//字体的缩放大小
        };
    },
    mixins: [resize],
    mounted() {
        this.fontScale = document.documentElement.clientWidth / 1920
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
            myChart.setOption({
                tooltip: {
                    show: false,
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    show: true,
                    right: 0,
                    top: 'center',
                    textStyle: {
                        fotnSize: 16 * this.fontScale,
                        color: '#fff'
                    },
                    formatter: function (name) {
                        return (name.length > 6 ? (name.slice(0, 4) + "...") : name);
                    },
                    con: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
                    itemWidth: 10,  // 设置宽度
                    itemHeight: 10, // 设置高度
                },
                title: {
                    text: "交易诈骗",
                    left: "center",
                    top: "50%",
                    textStyle: {
                        color: "#0cfbff",
                        fontSize: 16 * this.fontScale,
                        align: "center",
                        fontWeight: 500
                    }
                },
                graphic: {
                    type: "text",
                    left: "center",
                    top: "40%",
                    style: {
                        text: "36.6%",
                        textAlign: "center",
                        fill: "#11e305",
                        fontSize: 20 * this.fontScale,
                        fontWeight: 600
                    }
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['60%', '70%'],
                        center: ['center', 'center'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center',
                                formatter: function (argument) {
                                    return '50% \r\n\r\n' + '交易诈骗'
                                },
                                textStyle: {
                                    fontSize: 15,
                                    color: '#fff'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            { value: 335, name: '发的发广告发鬼地方个' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1548, name: '搜索引擎' }
                        ]
                    }
                ]
            });
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