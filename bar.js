import echarts from './echarts.js';

const cht1 = echarts.init(document.getElementById('ch1'));
const cht2 = echarts.init(document.getElementById('ch2'));
const cht3 = echarts.init(document.getElementById('ch3'));
const cht4 = echarts.init(document.getElementById('ch4'));

window.addEventListener('resize', () => {
  cht1.resize();
  cht2.resize();
  cht3.resize();
  cht4.resize();
});

/**
 * @type {import("/types").ECOption}
 */
const options1 = {
  title: {
    text: '基本柱状图(Basic Bar Chart)',
    left: 'center',
    padding: [10, 0, 0, 0],
  },
  tooltip: {},
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
          borderRadius: [3000, 3000, 0, 0],
        },
      },
      {
        value: 25,
        itemStyle: {
          color: 'skyblue',
          borderColor: 'red',
          borderWidth: 5,
          borderType: 'solid',
          borderRadius: [6, 6, 0, 0],
        },
      }],
    },
    {
      type: 'bar',
      barWidth: '20%',
      barMinHeight: 10,
      data: [26, 24, 18, 22, 23, 0.20, 0.27],
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.2)',
      },
    },
  ],
};
cht1.setOption(options1);

/**
 * @type {import("/types").ECOption}
 */
const options2 = {
  title: {
    left: 'center',
    text: '堆叠柱状图(Stacked Bar Chart)',
    top: 5,
  },
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E'],
  },
  tooltip: {
    trigger: 'axis',
  },
  yAxis: {

  },
  series: [
    {
      data: [10, 22, 28, 43, 49],
      name: '男',
      type: 'bar',
      stack: 'x',
    },
    {
      data: [5, 4, 3, 5, 10],
      type: 'bar',
      name: '女',
      stack: 'x',
    },
  ],
};
cht2.setOption(options2);

const data = [];
for (let i = 0; i < 5; ++i) {
  data.push(Math.round(Math.random() * 200));
}

/**
 * @type {import("/types").ECOption}
 */
const options3 = {
  title: {
    text: '动态排序柱状图(Dynamic Sorting Bar Chart)',
    left: 'center',
    top: 5,
  },
  xAxis: {
    max: 'dataMax',
  },
  yAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 3, // only the largest 4 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: 'X',
      type: 'bar',
      data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true,
      },
    },
  ],
  legend: {
    show: false,
  },
  animationDuration: 3000,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear',
};

function update() {
  // eslint-disable-next-line no-shadow
  const { data } = options3.series[0];
  for (let i = 0; i < data.length; ++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 2000);
    } else {
      data[i] += Math.round(Math.random() * 200);
    }
  }
  cht3.setOption(options3);
}

update();
setInterval(() => {
  update();
}, 3000);

const data4 = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203];
const help = [];
const positive = [];
const negative = [];
for (let i = 0, sum = 0; i < data4.length; ++i) {
  if (data4[i] >= 0) {
    positive.push(data4[i]);
    negative.push('-');
  } else {
    positive.push('-');
    negative.push(-data4[i]);
  }

  if (i === 0) {
    help.push(0);
  } else {
    sum += data4[i - 1];
    if (data4[i] < 0) {
      help.push(sum + data4[i]);
    } else {
      help.push(sum);
    }
  }
}

/**
 * @type {import('/types').ECOption}
 */
const options4 = {
  title: {
    text: '阶梯瀑布图(Waterfall)',
    left: 'center',
    top: 5,
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    splitLine: { show: false },
    data: (() => {
      const list = [];
      for (let i = 1; i <= 11; i++) {
        list.push(`Oct/${i}`);
      }
      return list;
    })(),
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      type: 'bar',
      stack: 'all',
      itemStyle: {
        normal: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)',
        },
        emphasis: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)',
        },
      },
      data: help,
    },
    {
      name: 'positive',
      type: 'bar',
      stack: 'all',
      data: positive,
    },
    {
      name: 'negative',
      type: 'bar',
      stack: 'all',
      data: negative,
      itemStyle: {
        color: '#f33',
      },
    },
  ],
};

cht4.setOption(options4);
