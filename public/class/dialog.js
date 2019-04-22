class Modal {
  // HelloWorld
  // 构造函数
  constructor(options) {
    const el = document.createElement('div');
    this.el = el;
    this.handleEvents();

    const { title, html: body, buttons = [] } = options;
    const btnHtml = buttons.map(button => {
      return `
        <button type="button" class="btn ${button.primary ? 'btn-primary' : 'btn-secondary'}" data-dismiss="modal">${button.text}</button>
      `
    }).join('');
    const html = `
    <div class="modal-container">
      <div class="modal" style="display: block" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">${title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              ${body}
              </div>
              <div class="modal-footer">
              ${btnHtml}
              </div>
            </div>
          </div>
        </div>
        <div class="modal-backdrop fade show"></div>
    </div>
    `;
    el.innerHTML = html;
    document.querySelector('body').appendChild(el);
  }

  handleEvents() {
    window.delegate(this.el, '.modal-header .close', 'click', () => {
      this.close();
    });
  }

  // 方法
  close() {
    const el = this.el;
    // $(el).remove();
    el.parentNode.removeChild(el);
  }
}



const openBtn = document.querySelector('button.open');
openBtn.addEventListener('click', () => {
  const modal = new Modal({
    title: '学习ES6',
    html: '通过实例学习ES6又快又有趣!',
    buttons: [
      { text: '取消' },
      { text: '确认', primary: true }
    ]
  });

  // modal.close();
})