<template>
    <div class="charts" ref="myEchart"></div>
</template>

<script>
import echarts from "echarts"
import resize from '@/mixin/chartsResize'
export default {
    name: "TransBarCharts",
    props: {},
    data() {
        return {
            chart: null,
            maxData: [400, 400, 400, 400, 400, 400, 400, 400]
        };
    },
    mixins: [resize],
    props: {
        //坐标轴数据
        yData: {
            type: Array,
            default: () => {
                return ['美国', '日本', '菲律宾', '南非', '韩国', '1', '3', '66']
            }
        },
        //数据
        barData: {
            type: Array,
            default: () => {
                return [145, 260, 88, 356, 78, 12, 58, 69]
            }
        }

    },
    mounted() {
        this.maxData = this.maxData.slice(0, this.barData.length)
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
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                    textStyle: {
                        color: '#fff',
                    },

                },
                grid: {
                    top: '0.5%',
                    left: '3%',
                    right: '3%',
                    bottom: '0.5%',
                    containLabel: true
                },
                yAxis: [{
                    type: 'category',
                    data: this.yData,
                    inverse: true,
                    axisTick: {
                        show: false,
                        alignWithLabel: true
                    },
                    axisLabel: {
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#a5c0d3'
                        }
                    },
                    splitLine: {
                        show: false
                    }

                }],
                xAxis: [{
                    type: 'value',
                    axisLabel: {
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#192469'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }],
                series: [{
                    name: 'dotted',
                    type: 'pictorialBar',
                    symbol: 'rect',
                    itemStyle: {
                        normal: {
                            color: 'rgba(5,149,235,0.5)'
                        }
                    },
                    symbolRepeat: true,
                    symbolSize: [6, 10],
                    symbolMargin: 2,
                    z: -10,
                    data: this.maxData//数据最大值+n 暂时固定
                }, {
                    name: 'dotted',
                    type: 'pictorialBar',
                    symbol: 'rect',

                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = [
                                    '#84b0d9', '#4b8dcb', '#3d97ed', '#0e75d5', '#80e5e2', '#4fd9d5',
                                    '#0ed5cf', '#7ae16f', '#4ed540', '#29bc1a'
                                ];
                                var index = params.dataIndex;
                                if (params.dataIndex >= colorList.length) {
                                    index = params.dataIndex - colorList.length;
                                }
                                return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                    [
                                        { offset: 0, color: colorList[index] },
                                        { offset: 1, color: colorList[index] }
                                    ]);
                            }
                        },

                    },
                    symbolRepeat: true,
                    symbolSize: [6, 10],
                    symbolMargin: 2,
                    data: this.barData
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