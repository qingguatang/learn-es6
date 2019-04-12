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
    const items = [
      { title: 'Tab 1', body: 'Body 1' },
      { title: 'Tab 2', body: 'Body 2' },
      { title: 'Tab 3', body: 'Body 3' },
      { title: 'Tab 4', body: 'Body 4' },
    ];
    const { activeKey } = this.state;
    const currentItem = items[activeKey];
    return (
      <div>
        <div class="tabs">
          <ul>
            {
              items.map((item, index) => (
                <li className={activeKey === index ? 'is-active' : ''}
                    onClick={() => this.setState({ activeKey: index })}>
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
}

export default Tabs;