import attributeHelper from '../../helpers/attributeHelper';

module.exports = function (element) {
  return `
    <tbgbutton 
      class="expand"
      text="${attributeHelper.getAttribute(element, 'text')}"
      href="${attributeHelper.getAttribute(element, 'href')}"
      class-prefix="offer-button"
    ></tbgbutton>
  `;
}
