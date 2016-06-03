import componentHelper from '../../helpers/componentHelper';

module.exports = function (element) {
  var logo = element.attr('logo');
  var text = element.attr('text');
  var unsubscribeHref = element.attr('unsubscribe-href');
  var unsubscribeText = element.attr('unsubscribe-text');
  var managePrefsText = element.attr('manage-prefs-text');
  var managePrefsHref = element.attr('manage-prefs-href');
  var privacyText = element.attr('privacy-text');
  var privacyLinkText = element.attr('privacy-link-text');
  var privacyLinkHref = element.attr('privacy-link-href');  
  var twitterImage = element.attr('twitter-image');
  var twitterHref = element.attr('twitter-href');
  var facebookImage = element.attr('facebook-image');
  var facebookHref = element.attr('facebook-href');
  var address = element.attr('address');
  var image1 = element.attr('image-1');
  var image2 = element.attr('image-2');
  var href1 = element.attr('href-1');
  var href2 = element.attr('href-2');
  
  var imageSection = ``;
  if (element.attr('images') == "true") {
    imageSection = `
      <spacer size="40"></spacer>
      <row class="collapse">
        <columns small="12" large="6">
          <a href="${href1}">
            <img src="${image1}">
          </a>
        </columns>
        <columns class="show-for-large" small="6" large="6">
          <a href="${href2}">
            <img src="${image2}">
          </a>
        </columns>
      </row>
    `;
  }

  return `
    <container class="${componentHelper.getElementClasses(element)} footer footer__container">    
      ${imageSection}
      <row>
        <columns small="2" large="2"></columns>
        <columns small="9" large="9">
          <center>
            <spacer size="30"></spacer>
            <img src="${logo}">
            <spacer size="30"></spacer>
            <p class="text-center">
              ${text}
            </p>
            <spacer size="20"></spacer>
            <p class="text-center">
              <a class="footer__link" href="${unsubscribeHref}">
                ${unsubscribeText}
              </a>
              or
              <a class="footer__link" href="${managePrefsHref}">
                ${managePrefsText}
              </a>
              .
            </p>
            <spacer size="20"></spacer>
            <p class="text-center">
              ${privacyText}
              <a class="footer__link" href="${privacyLinkHref}">
                ${privacyLinkText}
              </a>
            </p>
            <spacer size="20"></spacer>
            <row>
              <columns small="6" large="6">
                <a href="${facebookHref}">
                  <img class="float-right footer footer__facebook-icon" src="${facebookImage}">
                </a>
              </columns>
              <columns small="6" large="6">
                <a href="${twitterHref}">
                  <img class="float-left footer footer__twitter-icon" src="${twitterImage}">
                </a>
              </columns>
            </row>
          </center>
        </columns>
        <columns small="2" large="2"></columns>
      </row>
      <row>
        <columns>
          <spacer size="80"></spacer>
          <p class="text-center">
            ${address}
          </p>
        </columns>
      </row>
    </container>
  `;
}
