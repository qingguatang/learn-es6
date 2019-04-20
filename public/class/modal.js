/* global delegate */

class Modal {
  constructor(options) {
    this.options = options || {};
    this.el = document.createElement('div');
    this.handleEvents();
    this.open();
  }

  open() {
    const { title, html: content, buttons, beforeOpen } = this.options;
    beforeOpen && beforeOpen();

    const buttonsHtml = buttons.map(button => {
      return `<button type="button"
         class="btn ${button.primary ? 'btn-primary' : 'btn-secondary'}"
         data-action="${button.name || 'Close'}">${button.text}</button>`
    }).join('');

    const html = `
      <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${escapeHtml(title)}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            ${content}
            </div>
            <div class="modal-footer">
            ${buttonsHtml}
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show"></div>
    `;

    this.el.innerHTML = html;
    document.querySelector('body').appendChild(this.el);
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
  }
}


const btn = document.querySelector('.open.btn');
btn.addEventListener('click', () => {
  openModal();
})

function openModal() {
  const modal = new Modal({
    title: 'ES6面向对象编程应用',
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
}