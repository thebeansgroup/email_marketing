import componentHelper from '../../helpers/componentHelper';
import attributeHelper from '../../helpers/attributeHelper';

module.exports = function (element) {
  var logo = attributeHelper.getAttribute(element, 'logo');
  var text = attributeHelper.getAttribute(element, 'text');
  var unsubscribeHref = attributeHelper.getAttribute(element, 'unsubscribe-href');
  var unsubscribeText = attributeHelper.getAttribute(element, 'unsubscribe-text');
  var managePrefsText = attributeHelper.getAttribute(element, 'manage-prefs-text');
  var managePrefsHref = attributeHelper.getAttribute(element, 'manage-prefs-href');
  var privacyText = attributeHelper.getAttribute(element, 'privacy-text');
  var privacyLinkText = attributeHelper.getAttribute(element, 'privacy-link-text');
  var privacyLinkHref = attributeHelper.getAttribute(element, 'privacy-link-href');  
  var twitterImage = attributeHelper.getAttribute(element, 'twitter-image');
  var twitterHref = attributeHelper.getAttribute(element, 'twitter-href');
  var facebookImage = attributeHelper.getAttribute(element, 'facebook-image');
  var facebookHref = attributeHelper.getAttribute(element, 'facebook-href');
  var address = attributeHelper.getAttribute(element, 'address');
  
  var imageSection = ``;
  if (attributeHelper.getAttribute(element, 'images') == "true") {
    var image1 = attributeHelper.getAttribute(element, 'image-1');
    var image2 = attributeHelper.getAttribute(element, 'image-2');
    var href1 = attributeHelper.getAttribute(element, 'href-1');
    var href2 = attributeHelper.getAttribute(element, 'href-2');
    imageSection = `
      <row class="collapse">
        <columns class="show-for-large" small="12" large="6">
          <a href="${href1}">
            <img width="290" height="145" src="${image1}">
          </a>
        </columns>
        <columns small="6" large="6">
          <a href="${href2}">
            <img width="290" height="145" src="${image2}">
          </a>
        </columns>
      </row>
      <spacer size="30"></spacer>
    `;
  }

  return `
    <spacer size="40"></spacer>
    <container class="${componentHelper.getElementClasses(element)} footer footer__container">    
      ${imageSection}
      
      <center>
        <img src="${logo}">
      </center>
      
      <spacer size="20"></spacer>
      
      <row>
        <columns small="2" large="2">
        </columns>
        <columns small="8" large="8">
          <p class="footer__text-block">
            ${text}
          </p>
          <br/>
          <p class="footer__text-block">
            <a class="footer footer__link" href="${unsubscribeHref}">
              ${unsubscribeText}
            </a>
            or
            <a class="footer footer__link" href="${managePrefsHref}">
              ${managePrefsText}
            </a>
          </p>
          <br/>
          <p class="footer__text-block">
            ${privacyText}
            <a class="footer footer__link" href="${privacyLinkHref}">
              ${privacyLinkText}
            </a>
          </p>
          <br/>
        </columns>
        <columns small="2" large="2">
        </columns>
      </row>
      
      <spacer size="20"></spacer>
      
      <center>
        <row>
          <columns small="4" large="4">
          </columns>
          <columns small="4" large="4">
            <row>
            <columns small="2" large="2">
            </columns>
              <columns small="4" large="4">
                <a href="${facebookHref}">
                  <img src="${facebookImage}">
                </a>
              </columns>
              <columns small="4" large="4">
                <a href="${twitterHref}">
                  <img src="${twitterImage}">
                </a>
              </columns>
              <columns small="2" large="2">
              </columns>
            </row>
          </columns>
          <columns small="4" large="4">
          </columns>
        </row>
      </center>
          
      <spacer size="60"></spacer>
      <row>
        <columns small="12" large="12">
          <p class="footer__text-block">
            ${address}
          </p>
        </columns>
      </row>
    </container>
  `;
}
