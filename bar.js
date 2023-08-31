import 'normalize.css'
import * as echarts from 'echarts'

const cht1 = echarts.init(document.getElementById('ch1'))
const cht2 = echarts.init(document.getElementById('ch2'))
const cht3 = echarts.init(document.getElementById('ch3'))
const cht4 = echarts.init(document.getElementById('ch4'))

window.addEventListener('resize', function () {
  cht1.resize()
})

/**
 *
 * @type {import("/types/index.d.ts").ECOption}
 */
const options1 = {
  title: {
    text: '基本柱状图(Basic Bar Chart)',
    left: 'center',
    padding: [10, 0, 0, 0]
  },
  tooltip: {},
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
  },
  series: [
    {
      type: 'bar',
      barMaxWidth: 30,
      barMinWidth: 20,
      barGap: '10%',
      barCategoryGap: '10%',
      data: [23, 24, 18, 25, 27, {
        value: 28,
        itemStyle: {
          borderCap: 'round',
          borderRadius: [3000, 3000, 0, 0]
        }
      },
      {
        value: 25,
        itemStyle: {
          color: 'skyblue',
          borderColor: 'red',
          borderWidth: 5,
          borderType: 'solid',
          borderRadius: [6, 6, 0, 0]
        }
      }]
    },
    {
      type: 'bar',
      barWidth: '20%',
      barMinHeight: 10,
      data: [26, 24, 18, 22, 23, 0.20, 0.27],
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.2)'
      }
    }
  ]
}
cht1.setOption(options1)
