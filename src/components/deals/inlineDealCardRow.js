module.exports = function (element) {      
  var image1 = element.attr('image-1');
  var dealHref1 = element.attr('deal-href-1');
  var buttonText1 = element.attr('button-text-1');
  var title1 = element.attr('title-1');
  var company1 = element.attr('company-1');
  var image2 = element.attr('image-2');
  var dealHref2 = element.attr('deal-href-2');
  var buttonText2 = element.attr('button-text-2');
  var title2 = element.attr('title-2');
  var company2 = element.attr('company-2');
  
  return `
    <container>
      <row>
        <columns small="12" large="6">
          <inlinedealcard
            image="${image1}"
            title="${title1}"
            company="${company1}"
            button-text="${buttonText1}"
            deal-href="${dealHref1}"
          ></inlinedealcard>
        </columns>
        <columns small="12" large="6">
          <inlinedealcard
            image="${image2}"
            title="${title2}"
            company="${company2}"
            button-text="${buttonText2}"
            deal-href="${dealHref2}"
          ></inlinedealcard>
        </columns>
      </row>
    </container>
  `;
}
