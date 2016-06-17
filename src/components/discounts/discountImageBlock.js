import attributeHelper from '../../helpers/attributeHelper';

module.exports = function (element) {      
  var image = attributeHelper.getAttribute(element, 'image');
  var title = attributeHelper.getAttribute(element, 'title');
  var text = attributeHelper.getAttribute(element, 'text');
  var keyword = attributeHelper.getAttribute(element, 'keyword');
  var buttonText = attributeHelper.getAttribute(element, 'button-text');
  var discountHref = attributeHelper.getAttribute(element, 'discount-href');
  
  return `
    <container>
      <row>
        <columns small="12" large="6">
          <a href="${discountHref}">
            <img width="250" height="250" src="${image}">
          </a>
        </columns>
        <columns small="12" large="6">
          <discountinfo
            title="${title}"
            text="${text}"
            keyword="${keyword}"
            button-href="${discountHref}"
            button-text="${buttonText}"
          ></discountinfo>
        </columns>
      </row>
    </container>
  `;
}
