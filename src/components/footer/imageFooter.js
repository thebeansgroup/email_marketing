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
      images="true"
      image-1="${image1}"
      image-2="${image2}"
      href-1="${href1}"
      href-2="${href2}"
    ></footer>
  `;
}
