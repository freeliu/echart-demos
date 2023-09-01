import 'normalize.css';
import * as echarts from 'echarts';

const cht1 = echarts.init(document.getElementById('cht1'));
const cht2 = echarts.init(document.getElementById('cht2'));
const cht3 = echarts.init(document.getElementById('cht3'));

window.onresize = () => {
  cht1.resize();
  cht2.resize();
  cht3.resize();
};

/**
 * @type {import("/types").ECOption}
 */
const option1 = {
  title: {
    text: '基础饼图(Basic Pie Chart)',
    left: 'center',
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: '直接访问',
        },
        {
          value: 234,
          name: '联盟广告',
        },
        {
          value: 1548,
          name: '搜索引擎',
        },
      ],
      radius: '50%',
    },
  ],
};

/** @type {import("/types").ECOption} */
const option2 = {
  title: {
    text: '圆环图的例子',
    left: 'center',
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: 'A',
        },
        {
          value: 234,
          name: 'B',
        },
        {
          value: 1548,
          name: 'C',
        },
      ],
      radius: ['40%', '60%'],
    },
  ],
};

/** @type {import("/types").ECOption} */
const option3 = {
  title: {
    top: 5,
    text: '南丁格尔图（玫瑰图）Rose Chart（Nightingale Chart）',
    left: 'center',
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 100,
          name: 'A',
        },
        {
          value: 200,
          name: 'B',
        },
        {
          value: 300,
          name: 'C',
        },
        {
          value: 400,
          name: 'D',
        },
        {
          value: 500,
          name: 'E',
        },
      ],
      roseType: 'area',
    },
  ],
};

cht1.setOption(option1);
cht2.setOption(option2);
cht3.setOption(option3);
