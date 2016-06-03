import componentHelper from '../../helpers/componentHelper';

module.exports = function (element) {
  var logo = element.attr('logo');
  var text = element.attr('text');
  var linkText = element.attr('link-text');
  var linkHref = element.attr('link-href');
  
  return `
    <container class="${componentHelper.getElementClasses(element)} header header__container">
      <row class="collapse">
        <columns small="6" large="6">
          <img src="${logo}">
        </columns>
        <columns small="6" large="6">
          <p class="text-right">
            <span class="show-for-large">
              ${text}
            </span>
            <a href="${linkHref}"> 
              ${linkText}
            </a>
          </p>
        </columns>
      </row>
    </container>
  `;
}
