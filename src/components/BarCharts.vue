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
    mixins: [resize],
    data() {
        return {
            chart: null
        };
    },
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
            this.chart = echarts.init(this.$refs.myEchart);
            // 把配置和数据放这里
            this.chart.setOption({
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {　　//这个是用来设置echarts图标的位置和其他设置
                    left: '4%',
                    right: '4%',
                    bottom: '4%',
                    width: '90%',
                    top: '22%',
                    containLabel: true,　//一般都带上这个，否则x,y轴的刻度值会被截取掉
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['201901', '201901', '201901', '201901', '201901', '201901', '201901'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: {
                        },
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
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '万',
                        nameTextStyle: {
                            color: '#a5c0d3'
                        },

                        axisLine: {
                            symbol: ['none', 'arrow'],
                            symbolOffset: 10,
                            symbolSize: [6, 10],
                            lineStyle: {
                                color: '#a5c0d3'
                            }
                        },
                        splitLine: {
                            show: false
                        }
                    }
                ],
                series: [
                    {
                        name: '涉诈网站总数',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220]
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