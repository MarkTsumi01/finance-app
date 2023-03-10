import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';

const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;

export default function Loading() {
  return (<div className="app-content">
    <div className="authen-content">
      <Spin indicator={antIcon} className="self-center" tip="Loading.." />
    </div>
  </div>
  );
}