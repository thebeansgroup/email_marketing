import componentHelper from '../../helpers/componentHelper';

module.exports = function (element) {
  // TODO: configurable, or hardcoded?
  var headerLogo = "http://cdn.ymaservices.com/email/global/header__sb-logo.jpg";
  var headerText = "Making life a little more awesome for millions of students<br>No images?";
  var headerLinkText = "View in browser";
  var headerLinkHref = "#view";
  
  return `
    <container class="${componentHelper.getElementClasses(element)} header header__container">
      <row class="collapse meta">
        <columns small="6" large="6">
          <img src="${headerLogo}">
        </columns>
        <columns small="6" large="6">
          <p class="text-right">
            <span class="show-for-large">
              ${headerText}
            </span>
            <a href="${headerLinkHref}"> 
              ${headerLinkText}
            </a>
          </p>
        </columns>
      </row>
    </container>
  `;
}
