import componentHelper from '../../helpers/componentHelper';
import attributeHelper from '../../helpers/attributeHelper';

module.exports = function (element) {
  var logo = attributeHelper.getAttribute(element, 'logo');
  var text = attributeHelper.getAttribute(element, 'text');
  var linkText = attributeHelper.getAttribute(element, 'link-text');
  var linkHref = attributeHelper.getAttribute(element, 'link-href');
  var unsubscribeLinkText = attributeHelper.getAttribute(element, 'unsubscribe-link-text');
  var unsubscribeLinkHref = attributeHelper.getAttribute(element, 'unsubscribe-link-href');
  
  return `
    <container class="${componentHelper.getElementClasses(element)} header header__container">
      <row class="collapse">
        <columns small="6" large="6">
          <img src="${logo}">
        </columns>
        <columns small="6" large="6">
          <p class="header__text text-right">
            <span class="show-for-large">
              ${text}
            </span>
            <a style="padding-left:10px;" href="${linkHref}"> 
              ${linkText}
            </a>
            <span class="show-for-large">
              |
            </span>
            <a class="show-for-large" href="${unsubscribeLinkHref}"> 
              ${unsubscribeLinkText}
            </a>
          </p>
        </columns>
      </row>
    </container>
  `;
}
