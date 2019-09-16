function randomData() {
    return Math.ceil(Math.random() * (1000000 - 1) + 1)
}

let mapData = [
    { name: '北京', value: 888 }, { name: '天津', value: randomData() },
    { name: '上海', value: 1255 }, { name: '重庆', value: randomData() },
    { name: '河北', value: 56874 }, { name: '河南', value: randomData() },
    { name: '云南', value: 125485 }, { name: '辽宁', value: randomData() },
    { name: '黑龙江', value: 22 }, { name: '湖南', value: randomData() },
    { name: '安徽', value: randomData() }, { name: '山东', value: randomData() },
    { name: '新疆', value: 2589 }, { name: '江苏', value: randomData() },
    { name: '浙江', value: randomData() }, { name: '江西', value: randomData() },
    { name: '湖北', value: randomData() }, { name: '广西', value: randomData() },
    { name: '甘肃', value: 25965 }, { name: '山西', value: 2595 },
    { name: '内蒙古', value: randomData() }, { name: '陕西', value: randomData() },
    { name: '吉林', value: randomData() }, { name: '福建', value: randomData() },
    { name: '贵州', value: 25 }, { name: '广东', value: randomData() },
    { name: '青海', value: randomData() }, { name: '西藏', value: randomData() },
    { name: '四川', value: randomData() }, { name: '宁夏', value: randomData() },
    { name: '海南', value: 1258 }, { name: '台湾', value: randomData() },
    { name: '香港', value: randomData() }, { name: '澳门', value: randomData() }, { name: '南海诸岛', value: 10 }
]

export default mapData