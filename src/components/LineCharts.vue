<template>
    <div class="charts" ref="myEchart"></div>
</template>

<script>
import echarts from "echarts"
import resize from '@/mixin/chartsResize'
export default {
    name: "lineCharts",
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
            myChart.setOption({
                xAxis: {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
                    axisLine: {
                        symbol: ['none', 'arrow'],
                        symbolOffset: 12,
                        symbolSize: [6, 10],
                        lineStyle: {
                            color: '#a5c0d3'
                        }
                    },
                    splitLine: {
                        show: false
                    }

                }, tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        params = params[0];
                        return params.value
                    },
                    axisPointer: {
                        animation: false
                    }
                },
                yAxis: {
                    type: 'value',
                    name: '万',
                    nameTextStyle: {
                        color: '#a5c0d3'
                    },
                    axisLine: {
                        symbol: ['none', 'arrow'],
                        symbolOffset: 9,
                        symbolSize: [6, 10],
                        lineStyle: {
                            color: '#a5c0d3'
                        }
                    },
                    splitLine: {
                        show: false
                    }

                },
                grid: {　　//这个是用来设置echarts图标的位置和其他设置
                    left: '4%',
                    right: '4%',
                    bottom: '5%',
                    width: '90%',
                    top: '15%',
                    containLabel: true,　//一般都带上这个，否则x,y轴的刻度值会被截取掉
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: "#fff",//折线点的颜色
                            lineStyle: {
                                color: "#0962cb"//折线的颜色
                            }
                        }
                    }
                }]
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