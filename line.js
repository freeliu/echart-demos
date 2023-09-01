import echarts from './echarts.js';

const cht1_1 = echarts.init(document.getElementById('cht1-1'));
const cht1_2 = echarts.init(document.getElementById('cht1-2'));
const cht1_3 = echarts.init(document.getElementById('cht1-3'));
const cht2_1 = echarts.init(document.getElementById('cht2_1'));
const cht2_2 = echarts.init(document.getElementById('cht2_2'));
const cht2_3 = echarts.init(document.getElementById('cht2_3'));

window.onresize = () => {
  cht1_1.resize();
  cht1_2.resize();
  cht1_3.resize();
  cht2_1.resize();
  cht2_2.resize();
  cht2_3.resize();
};

/**
 * @type {import("/types").ECOption}
 */
const option1_1 = {
  title: {
    text: 'Simple Example',
    left: 'center',
    top: 5,
  },
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E', 'F'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      type: 'line',
      data: [120, 200, 150, '-', 200, 150],
    },
  ],
};

/**
 * @type {import("/types/index.js").ECOption}
 */
const options1_2 = {
  title: {
    text: '笛卡尔坐标系中的折线图',
    left: 'center',
    top: 5,
  },
  xAxis: {},
  yAxis: {},
  series: [
    {
      type: 'line',
      data: [
        [20, 120],
        [50, 200],
        [40, 50],
      ],
    },
  ],
};

/** @type {import("/types").ECOption} */
const options1_3 = {
  title: {
    text: '折线图样式设置',
    left: 'center',
    top: 5,
  },
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E'],
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 23, 19],
      type: 'line',
      lineStyle: {
        color: 'green',
        width: 4,
        type: 'solid',
      },
      smooth: true,
      itemStyle: {
        color: 'red',
        // borderColor: 'yellow',
        // borderWidth: 10
        // opacity: 0.5
      },
      label: {
        show: true,
        position: 'bottom',
        fontSize: 20,
        color: '#333',
      },
    },
  ],
};

/** @type {import("/types").ECOption} */
const option2_1 = {
  title: {
    top: 5,
    text: '堆叠折线图(Stacked Line Chart)',
    left: 'center',
  },
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E'],
  },
  yAxis: {},
  tooltip: {},
  series: [
    {
      type: 'line',
      stack: 'x',
      data: [10, 22, 28, 43, 49],
      areaStyle: {},
    },
    {
      type: 'line',
      stack: 'x',
      data: [5, 4, 3, 5, 10],
      areaStyle: {},
    },
  ],
};

/** @type {import("/types").ECOption} */
const option2_2 = {
  title: {
    top: 5,
    text: '区域面积图(Area Chart)',
    left: 'center',
  },
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E'],
  },
  yAxis: {},
  tooltip: {},
  series: [
    {
      type: 'line',
      data: [10, 22, 28, 23, 19],
      areaStyle: {},
    },
    {
      type: 'line',
      data: [25, 14, 23, 35, 10],
      areaStyle: {
        color: '#ff0',
        opacity: 0.5,
      },
    },
  ],
};
/** @type {import("/types").ECOption} */
const option2_3 = {
  title: {
    top: 5,
    left: 'center',
    text: '阶梯线图|方波图|Step Line Chart',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Step Start',
      type: 'line',
      step: 'start',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Step Middle',
      type: 'line',
      step: 'middle',
      data: [220, 282, 201, 234, 290, 430, 410],
    },
    {
      name: 'Step End',
      type: 'line',
      step: 'end',
      data: [450, 432, 401, 454, 590, 530, 510],
    },
  ],
};
cht1_1.setOption(option1_1);
cht1_2.setOption(options1_2);
cht1_3.setOption(options1_3);
cht2_1.setOption(option2_1);
cht2_2.setOption(option2_2);
cht2_3.setOption(option2_3);
