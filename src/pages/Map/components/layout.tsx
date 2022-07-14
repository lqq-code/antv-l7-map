import React, { useState } from 'react';
import { DatePicker, Menu, Tabs } from 'antd';

import styles from '../index.less';
import Warning from './warning/index';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;

const Layout2: React.FC = () => {
  const [type, setType] = useState('1');
  const [rangePickerValue, setRangePickerValue] = useState<any>([]);
  const [selectTimeArr, setSelectTimeArr] = useState<any>([moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
  moment().format('YYYY-MM-DD HH:mm:ss')]);
  const [defaultSelect, setDefaultSelect] = useState<any>(['hour']);
  const [day, setDay] = useState<any>(true); //选择的时间是一天，趋势图要用
  const [timeType, setTimeType] = useState<any>();


  const handleTabs = (key: any) => {
    setType(key);
  };

  const handleRangePickerChange = (dates: any) => {//时间选择组件回显
    if (dates == null) {
      setRangePickerValue([]);
      setSelectTimeArr([]);
      setDay(true);
      setDefaultSelect(['hour']);
    } else {
      setRangePickerValue([dates[0], dates[1]]);
      setSelectTimeArr([
        moment(dates[0]).format('YYYY-MM-DD 00:00:00'),
        moment(dates[1]).format('YYYY-MM-DD 23:59:59'),
      ]);
      if (moment(dates[0]).format('YYYY-MM-DD') !== moment(dates[1]).format('YYYY-MM-DD')) {
        setDay(false);
      } else {
        setDay(true);
      }
      setDefaultSelect([]);
    }
  };

  const handleSelect = (key: any) => {
    if (key === 'today') {
      setRangePickerValue([moment(), moment()]);
      setSelectTimeArr([
        moment().format('YYYY-MM-DD 00:00:00'),
        moment().format('YYYY-MM-DD HH:mm:ss'),
      ]);
      setDay(true);
      setDefaultSelect(['today']);
      setTimeType('today')
    }
    else if (key === 'hour') {
      setRangePickerValue([moment().subtract(1, 'days'), moment()]);
      setSelectTimeArr([
        moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
        moment().format('YYYY-MM-DD HH:mm:ss'),
      ]);
      setDay(true);
      setDefaultSelect(['hour']);
      setTimeType('hour')

    }
    else if (key === 'week') {
      setDay(false);
      setRangePickerValue([moment().startOf('week'), moment()]);
      setSelectTimeArr([
        moment().startOf('week').format('YYYY-MM-DD 00:00:00'),
        moment().format('YYYY-MM-DD HH:mm:ss'),
      ]);
      setDefaultSelect(['week']);
      setTimeType('week')
    }
    else if (key === 'yesterday') {
      setRangePickerValue([moment().subtract(1, 'days'), moment().subtract(1, 'days')]);
      setSelectTimeArr([
        moment().subtract(1, 'days').format('YYYY-MM-DD 00:00:00'),
        moment().subtract(1, 'days').format('YYYY-MM-DD 23:59:59'),
      ]);
      setDay(true);
      setDefaultSelect(['yesterday']);
      setTimeType('yesterday')

    }
    else if (key === 'month') {
      setDay(false);
      setRangePickerValue([moment().startOf('month'), moment()]);
      setSelectTimeArr([
        moment().startOf('month').format('YYYY-MM-DD 00:00:00'),
        moment().format('YYYY-MM-DD HH:mm:ss'),
      ]);
      setDefaultSelect(['month']);
      setTimeType('month')
    }
  };
  return (
    <div className={styles.layout2Container}>
      <div className={styles.searchItem}>
        <div className={styles.searchList}>
          <Menu mode="horizontal" selectedKeys={defaultSelect} className={styles.menuItem}>
            <Menu.Item key="hour" onClick={() => handleSelect('hour')}>
              近24小时
            </Menu.Item>
            <Menu.Item key="today" onClick={() => handleSelect('today')}>
              今日
            </Menu.Item>
            <Menu.Item key="yesterday" onClick={() => handleSelect('yesterday')}>
              昨日
            </Menu.Item>
            <Menu.Item key="week" onClick={() => handleSelect('week')}>
              本周
            </Menu.Item>
            <Menu.Item key="month" onClick={() => handleSelect('month')}>
              本月
            </Menu.Item>
          </Menu>
          <RangePicker value={rangePickerValue} onChange={handleRangePickerChange} />
        </div>
      </div>
      <Tabs defaultActiveKey="1" onChange={handleTabs} className={styles.tabItem}>
        <TabPane tab="地图总览" key="1">
          {type === '1' && <Warning selectTime={selectTimeArr} isDay={day} timeType={timeType}/>}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Layout2;
