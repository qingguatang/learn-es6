import React from 'react';
import './style.scss';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: props.defaultActiveKey || 0
    };
  }

  render() {
    const { children } = this.props;
    // console.log(children);

    const items = [];
    for (let i = 0; i < children.length; i++) {
      const cur = children[i];
      const item = {
        title: cur.props.tab,
        body: cur.props.children
      }
      items.push(item);
    }

    // const items = [
    //   { title: 'Tab 1', body: 'Body 1' },
    //   { title: 'Tab 2', body: 'Body 2' },
    //   { title: 'Tab 3', body: 'Body 3' },
    //   { title: 'Tab 4', body: 'Body 4' },
    // ];
    const { activeKey } = this.state;
    const currentItem = items[activeKey];
    return (
      <div>
        <div className="tabs">
          <ul>
            {
              items.map((item, index) => (
                <li key={index} className={activeKey === index ? 'is-active' : ''}
                    onClick={() => this.swithTo(index)}>
                  <a>{item.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="body">
          {currentItem.body}
        </div>
     </div>
    );
  }

  swithTo(index) {
    this.setState({ activeKey: index })
    const { onChange } = this.props;
    onChange && onChange(index);
  }
}

function TabPane() {
  return null;
}

Tabs.TabPane = TabPane;

export default Tabs;