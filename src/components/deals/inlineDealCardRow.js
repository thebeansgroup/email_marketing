module.exports = function (element) {      
  var image1 = element.attr('image-1');
  var dealHref1 = element.attr('deal-href-1');
  var buttonText1 = element.attr('button-text-1');
  var title1 = element.attr('title-1');
  var subtitle1 = element.attr('subtitle-1');
  var keyword1 = element.attr('keyword-1');
  var image2 = element.attr('image-2');
  var dealHref2 = element.attr('deal-href-2');
  var buttonText2 = element.attr('button-text-2');
  var title2 = element.attr('title-2');
  var subtitle2 = element.attr('subtitle-2');
  var keyword2 = element.attr('keyword-2');
  
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
