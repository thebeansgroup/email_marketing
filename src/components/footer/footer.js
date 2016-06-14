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
      <row class="collapse">
        <columns small="12" large="6">
          <a href="${href1}">
            <img width="290" height="145" src="${image1}">
          </a>
        </columns>
        <columns class="show-for-large" small="6" large="6">
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
