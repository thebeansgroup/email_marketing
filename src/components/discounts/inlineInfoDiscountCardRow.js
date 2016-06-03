module.exports = function (element) {      
  var image1 = element.attr('image-1');
  var discountHref1 = element.attr('discount-href-1');
  var buttonText1 = element.attr('button-text-1');
  var title1 = element.attr('title-1');
  var text1 = element.attr('text-1');
  var image2 = element.attr('image-2');
  var discountHref2 = element.attr('discount-href-2');
  var buttonText2 = element.attr('button-text-2');
  var title2 = element.attr('title-2');
  var text2 = element.attr('text-2');
  
  return `
    <container>
      <row>
        <columns small="12" large="12">
          <row>
            <columns small="12" large="6">
              <inlineinfodiscountcard
                image="${image1}"
                discount-href="${discountHref1}"
                title="${title1}"
                text="${text1}"
                button-text="${buttonText1}"
              ></inlineinfodiscountcard>
            </columns>
            <columns small="12" large="6">
              <inlineinfodiscountcard
                image="${image1}"
                discount-href="${discountHref1}"
                title="${title1}"
                text="${text1}"
                button-text="${buttonText1}"
              ></inlineinfodiscountcard>
            </columns>
          </row>
        </columns>
      </row>
    </container>
  `;
}
