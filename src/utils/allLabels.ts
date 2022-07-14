export default class AllLabels {

  //变量状态
  static variableStatus = ['生效中', '下线中', '已下线', '已生效'];
  static variableTag = ['blue', 'error', 'default', 'green'];
  static variableStatusSearch = {
    0: {
      text: '未上线',
      status: '0',
    },
    1: {
      text: '下线审核中',
      status: '1',
    },
    2: {
      text: '上线待审核',
      status: '2',
    },
    3: {
      text: '已上线',
      status: '3',
    },
    4: {
      text: '删除待审核',
      status: '4',
    },
  };
}
