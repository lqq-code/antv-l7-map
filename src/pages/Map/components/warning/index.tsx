import React from 'react';
import { Card, Row, Col } from 'antd';
import Map from './map';
import styles from '../../index.less';

interface WarningProps {
  selectTime: any;
  isDay: any;
  timeType: any;
}
const Warning: React.FC <WarningProps>= (props: any) => {
  const {selectTime, isDay, timeType} = props
  return (
      <Row gutter={24}>
            <Col xl={24} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <Card>
                <div className={styles.mapChart}>
                  <Map selectTime={selectTime} isDay={isDay} timeType={timeType}/>
                </div>
              </Card>
            </Col>
            
          </Row>
      
  );
};

export default Warning;
