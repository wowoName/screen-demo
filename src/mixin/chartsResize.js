export default {
    methods: {
        resizeCharts() {
            window.addEventListener('resize', () => {
                this.chart.resize()
            })
        },
    }
}