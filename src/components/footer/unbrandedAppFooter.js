import attributeHelper from '../../helpers/attributeHelper';

module.exports = function (element) {
  var image = attributeHelper.getAttribute(element, 'image');

  return `
    <appfooter
      image="${image}"
      brand=""
    ></appfooter>
  `;
}
