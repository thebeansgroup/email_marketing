module.exports = function (element) {      
  var image1 = element.attr('image-1');
  var buttonHref1 = element.attr('button-href-1');
  var buttonText1 = element.attr('button-text-1');
  var title1 = element.attr('title-1');
  var company1 = element.attr('company-1');
  var image2 = element.attr('image-2');
  var buttonHref2 = element.attr('button-href-2');
  var buttonText2 = element.attr('button-text-2');
  var title2 = element.attr('title-2');
  var company2 = element.attr('company-2');
  
  return `
    <row>
      <columns small="12" large="6">
        <spacer size="30"></spacer>
        <inlinedealcard
          image="${image1}"
          title="${title1}"
          company="${company1}"
          button-text="${buttonText1}"
          button-href="${buttonHref1}"
        ></inlinedealcard>
      </columns>
      <columns small="12" large="6">
        <spacer size="30"></spacer>
        <inlinedealcard
          image="${image2}"
          title="${title2}"
          company="${company2}"
          button-text="${buttonText2}"
          button-href="${buttonHref2}"
        ></inlinedealcard>
      </columns>
    </row>
  `;
}
