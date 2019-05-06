/* global delegate, escapeHtml j*/

class EventEmitter {
  listeners = [];

  // constructor() {
  //   this.listeners = [
  //     // { event: 'close', handler: function... }
  //   ];
  // }

  // event emitter
  on(event, handler) {
    this.listeners.push({ event, handler });
  }

  emit(event, ...data) {
    // for (let i = 0; i < this.listeners.length; i++) {
    //   const item = this.listeners[i];
    //   if (item.event === event) {
    //     item.handler();
    //   }
    // }

    this.listeners
      .filter(item => item.event === event)
      .forEach(item => item.handler(...data));
  }
}

class Modal extends EventEmitter {
  static confirm({ message, ok, cancel }) {
    new Modal({
      title: '确认',
      html: message,
      buttons: [
        { text: '取消', name: 'Cancel' },
        { text: '确定', name: 'Confirm', primary: true }
      ],
      onConfirm() {
        ok && ok();
      },
      onCancel() {
        cancel && cancel();
      }
    })
  }

  constructor(options) {
    super();
    this.options = options || {};
    this.el = document.createElement('div');
    this.handleEvents();
    this.open();
  }

  open() {
    const { html: content, beforeOpen, hasHeader = true, hasFooter = true } = this.options;
    beforeOpen && beforeOpen();

    const html = `
      <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            ${hasHeader ? this.renderHeader() : ''}
            <div class="modal-body">
            ${content}
            </div>
            ${hasFooter ? this.renderFooter() : ''}
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show"></div>
    `;

    this.el.innerHTML = html;
    document.querySelector('body').appendChild(this.el);
  }

  renderHeader() {
    const { title } = this.options;
    return `
      <div class="modal-header">
        <h5 class="modal-title">${escapeHtml(title)}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `;
  }

  renderFooter() {
    const { buttons = [] } = this.options;
    const buttonsHtml = buttons.map(button => {
      return `<button type="button"
         class="btn ${button.primary ? 'btn-primary' : 'btn-secondary'}"
         data-action="${button.name || 'Close'}">${button.text}</button>`
    }).join('');
    return `
      <div class="modal-footer">
      ${buttonsHtml}
      </div>
    `;
  }

  handleEvents() {
    delegate(this.el, '.modal-header .close', 'click', () => {
      this.close();
    });

    delegate(this.el, '.modal-footer button[data-action]', 'click', e => {
      const action = e.target.dataset.action;
      const fn = this.options[`on${action}`];
      const event = new CustomEvent(action, { cancelable: true, detail: this });
      fn && fn(event);
      if (!event.defaultPrevented) {
        this.close();
      }
    });
  }

  close() {
    const { beforeClose } = this.options;
    beforeClose && beforeClose();
    this.el.parentNode.removeChild(this.el);
    this.emit('close');
  }
}


class MiniModal extends Modal {
  // override
  // 重写
  renderHeader() {
    return '';
  }
  renderFooter() {
    return '';
  }
}


class MiniModal2 {
  constructor(options) {
    this.modal = new Modal({
      hasHeader: false,
      hasFooter: false,
      ...options
    });
  }

  on(...args) {
    return this.modal.on(...args);
  }

  close() {
    this.modal.close();
  }
}

// 优先使用组合，而不是继承

const btn = document.querySelector('.open.btn');
btn.addEventListener('click', () => {
  openModal();
})


function openModal() {
  const modal = new Modal({
    title: 'ES6面向对象编程',
    html: '通过实例学习ES6又快又有趣!',
    buttons: [
      { name: 'Close', text: '关闭' },
      { name: 'Confirm', text: '确定', primary: true }
    ],
    beforeOpen() {
      console.log('before open');
    },
    beforeClose() {
      console.log('before close');
    },
    onClose() {
      alert('好的');
    },
    onConfirm(e) {
      e.preventDefault();
      alert('是那么回事!');
      setTimeout(() => {
        e.detail.close();
      }, 3000);
    }
  });

  modal.on('close', () => {
    console.log('on close');
  });
}


const delBtn = document.querySelector('.btn.delete');
delBtn.addEventListener('click', () => {
  Modal.confirm({
    message: '确定要删除吗',
    ok() {
      console.log('ok');
    },
    cancel() {
      console.log('cancel');
    }
  })
});


const infoBtn = document.querySelector('.btn.info');
infoBtn.addEventListener('click', () => {
  const loading = new MiniModal({ html: '加载中...' });
  // setTimeout(() => loading.close(), 2000);
});
