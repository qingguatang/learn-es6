import React from 'react'

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  render() {
    // const children = this.props.children;
    const { children } = this.props;
    console.log(children);

    const items = [];
    for (let i = 0; i < children.length; i++) {
      // const cur = children[i];
      const { title = 'Default', children: body } = children[i].props;
      const item = {
        title,
        body
      };
      items.push(item);
    }

    // const active = this.state.active;
    const { active } = this.state;
    // const items = [
    //   { title: 'Tab1', body: 'Body1' },
    //   { title: 'Tab2', body: 'Body2' },
    //   { title: 'Tab3', body: 'Body3' },
    //   { title: 'Tab4', body: 'Body4' },
    // ];
    const activeItem = items[active];
    return (
      <div className="tabs-container">
        <div className="tabs">
          <ul>
            {
              items.map((item, index) => (
                <li key={index} className={active === index ? 'active' : ''}
                    onClick={() => this.setState({ active: index })}>
                  <a>{item.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="tab-content">
          {activeItem.body}
        </div>
      </div>
    );
  }
}

const TabPane = () => {
  return null;
};

export default Tabs;
export { Tabs, TabPane };