<template>
    <div class="charts" ref="myEchart"></div>
</template>

<script>
import echarts from "echarts"
import 'echarts-liquidfill/src/liquidFill'
import resize from '@/mixin/chartsResize'
export default {
    name: "lineCharts",
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
                series: [{
                    type: 'liquidFill',
                    radius: '90%',
                    center: ['50%', '50%'],
                    data: [{
                        value: 0.7,
                        direction: 'left',
                        itemStyle: {
                            normal: {
                                color: '#0a2850'
                            }
                        }
                    }, {
                        value: 0.5,
                        direction: 'left',
                        itemStyle: {
                            normal: {
                                color: '#43bafc'
                            }
                        }
                    }, 0.4, 0.3],
                    label: {
                        normal: {
                            textStyle: {
                                color: '#fff',
                                insideColor: 'yellow',
                                fontSize: 33 * this.fontScale
                            }
                        }
                    },
                    direction: 'left'
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