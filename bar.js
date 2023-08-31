import 'normalize.css'
import * as echarts from 'echarts'

const cht1 = echarts.init(document.getElementById('ch1'))
const cht2 = echarts.init(document.getElementById('ch2'))
const cht3 = echarts.init(document.getElementById('ch3'))
const cht4 = echarts.init(document.getElementById('ch4'))

/**
 *
 * @type {import("/types/index.d.ts").ECOption}
 */
const options1 = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [{
    type: 'bar',
    data: [23, 24, 18, 25, 27, 28, 25]
  }]
}
cht1.setOption(options1)
