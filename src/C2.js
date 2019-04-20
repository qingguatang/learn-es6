import React, { useState } from 'react'
import cx from 'classnames';
import { Route } from 'react-router-dom';
import Button from './components/Button';
import { Tabs, TabPane } from './components/Tabs';


const UseAll = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <div className="header">
        <h1 className="title" onClick={() => setShow(!show)}>解构</h1>
        <div className="desc"> 使数据访问更便捷!</div>
      </div>
      <div className={cx('demobox', { show })}>
        <div className="demo">
          <h2>1. Button</h2>
          <UseButton />
        </div>
        <div className="demo">
          <h2>2. Tabs</h2>
          <UseTabs />
        </div>
      </div>
    </div>
  );
};


const UseButton = () => (
  <div className="buttons">
    <Button type="primary" onClick={e => alert('es6')}>
      <span>React</span>
    </Button>
    <Button type="primary" size="large">
      <span>Large</span>
    </Button>
    <Button rounded>
      <span>Rounded</span>
    </Button>
    <Button disabled={true} autoFocus>
      <span>Default Button</span>
    </Button>
  </div>
);


const UseTabs = () => (
  <Tabs>
    <TabPane tab="Tab1">ES6 Body 1</TabPane>
    <TabPane tab="Tab2">ES6 Body 2</TabPane>
    <TabPane tab="Tab3">Body 3</TabPane>
    <TabPane tab="Tab4">Body 4</TabPane>
  </Tabs>
);

const Page = () => (
  <div>
    <Route path="/c2/button" component={UseButton} />
    <Route path="/c2/tabs" component={UseTabs} />
    <Route path="/c2/all" component={UseAll} />
  </div>
);

export default Page;