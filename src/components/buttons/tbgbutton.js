import componentHelper from '../../helpers/componentHelper';

module.exports = function (element) {
  var classPrefix = element.attr('class-prefix');
  var expander = '';
  var inner = element.attr('text');
  
  var padlock = ``;
  var padlockSrc = "http://cdn.ymaservices.com/email/global/deals__padlock.jpg"
  if (element.attr('padlock') == "true") {
    padlock = `<img class="btn ${classPrefix}__icon" src="${padlockSrc}">`;
  } 

  // If we have the href attribute we can create an anchor for the inner of the button;
  if (element.attr('href')) {
    inner = `
      <a class="btn ${classPrefix}__text" href="${element.attr('href')}">
        ${padlock}
        ${inner}
      </a>
    `;
  }

  // If the button is expanded, it needs a <center> tag around the content
  if (element.hasClass('expand') || element.hasClass('expanded')) {
    inner = `<center>${inner}</center>`;
    expander = '\n<td class="expander"></td>';
  }

  return `
    <table class="button small btn ${classPrefix}__container ${componentHelper.getElementClasses(element)}">
      <tr>
        <td>
          <table>
            <tr>
              <td class="btn ${classPrefix}">
                ${inner}
              </td>
            </tr>
          </table>
        </td>
        ${expander}
      </tr>
    </table>
  `;
}