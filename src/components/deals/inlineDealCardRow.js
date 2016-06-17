import attributeHelper from '../../helpers/attributeHelper';

module.exports = function (element) {      
  var image1 = attributeHelper.getAttribute(element, 'image-1');
  var dealHref1 = attributeHelper.getAttribute(element, 'deal-href-1');
  var buttonText1 = attributeHelper.getAttribute(element, 'button-text-1');
  var title1 = attributeHelper.getAttribute(element, 'title-1');
  var subtitle1 = attributeHelper.getAttribute(element, 'subtitle-1');
  var keyword1 = attributeHelper.getAttribute(element, 'keyword-1');
  var image2 = attributeHelper.getAttribute(element, 'image-2');
  var dealHref2 = attributeHelper.getAttribute(element, 'deal-href-2');
  var buttonText2 = attributeHelper.getAttribute(element, 'button-text-2');
  var title2 = attributeHelper.getAttribute(element, 'title-2');
  var subtitle2 = attributeHelper.getAttribute(element, 'subtitle-2');
  var keyword2 = attributeHelper.getAttribute(element, 'keyword-2');
  
  return `
    <container>
      <row>
        <columns small="12" large="6">
          <inlinedealcard
            image="${image1}"
            title="${title1}"
            subtitle="${subtitle1}"
            keyword="${keyword1}"
            button-text="${buttonText1}"
            deal-href="${dealHref1}"
          ></inlinedealcard>
        </columns>
        <columns small="12" large="6">
          <inlinedealcard
            image="${image2}"
            title="${title2}"
            subtitle="${subtitle2}"
            keyword="${keyword2}"
            button-text="${buttonText2}"
            deal-href="${dealHref2}"
          ></inlinedealcard>
        </columns>
      </row>
    </container>
  `;
}
