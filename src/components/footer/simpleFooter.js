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
  
  return `
    <footer
      logo="${logo}"
      text="${text}"
      unsubscribe-href="${unsubscribeHref}"
      unsubscribe-text="${unsubscribeText}"
      manage-prefs-href="${managePrefsHref}"
      manage-prefs-text="${managePrefsText}"
      privacy-text="${privacyText}"
      privacy-link-text="${privacyLinkText}"
      privacy-link-href="${privacyLinkHref}"
      twitter-image="${twitterImage}"
      twitter-href="${twitterHref}"
      facebook-image="${facebookImage}"
      facebook-href="${facebookHref}"
      address="${address}"
      images="false"
    ></footer>
  `;
}
