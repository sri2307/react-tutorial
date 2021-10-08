import React,{useState} from 'react'

import './Introduction.css'
import { Card } from 'antd';

const tabList = [
    {
      key: 'overview',
      tab: 'Overview',
    },
    {
      key: 'code',
      tab: 'Code',
    },
  ];
  
  const contentList = {
    overview: <p>content1</p>,
    code: <p>content2</p>,
  };



const Introduction = () => {

    const [state,setState] = useState({
        key: 'theory',
        
      })
    
      const onTabChange = (key, type) => {
        console.log(key, type);
        setState({ [type]: key });
      };

    return (
        <Card
          style={{ width: '100%' }}
          title="Introduction"
          
          tabList={tabList}
          activeTabKey={state.key}
          onTabChange={key => {
            onTabChange(key, 'key');
          }}
        >
          {contentList[state.key]}
        </Card>
    )
}

export default Introduction
