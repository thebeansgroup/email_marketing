import attributeHelper from '../../helpers/attributeHelper';

module.exports = function (element) {
  var image = attributeHelper.getAttribute(element, 'image');
  var brand = attributeHelper.getAttribute(element, 'brand');

  return `
    <appfooter
      image="${image}"
      brand="${brand}"
    ></appfooter>
  `;
}
