class Modal {
  constructor(options) {
    this.options = options || {};
    this.open();
  }

  open() {
    const { title, html: content, buttons } = this.options;
    const buttonsHtml = buttons.map(button => {
      return `<button type="button" class="btn ${button.primary ? 'btn-primary' : 'btn-secondary'}">${button.text}</button>`
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
    const el = document.createElement('div');
    el.innerHTML = html;
    document.querySelector('body').appendChild(el);
  }
}


const modal = new Modal({
  title: 'ES6面向对象编程应用',
  html: '通过实例学习ES6又快又有趣!',
  buttons: [
    { text: '关闭' },
    { text: '确定', primary: true }
  ]
});


function escapeHtml (string) {
  var matchHtmlRegExp = /["'&<>]/;
  var str = '' + string
  var match = matchHtmlRegExp.exec(str)

  if (!match) {
    return str
  }

  var escape
  var html = ''
  var index = 0
  var lastIndex = 0

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;'
        break
      case 38: // &
        escape = '&amp;'
        break
      case 39: // '
        escape = '&#39;'
        break
      case 60: // <
        escape = '&lt;'
        break
      case 62: // >
        escape = '&gt;'
        break
      default:
        continue
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index)
    }

    lastIndex = index + 1
    html += escape
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html
}