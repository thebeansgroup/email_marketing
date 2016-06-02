module.exports = function (element) {      
  var leftImage = element.attr('left-image');
  var rightImage = element.attr('right-image');
  var mobileImage = element.attr('mobile-image');
  var title = element.attr('title');
  var text = element.attr('text');
  var buttonText = element.attr('button-text');
  var discountHref = element.attr('discount-href');
  
  return `
    <container>
      <row>
        <columns small="12" large="12">
          <row>
            <columns small="12" large="12">
              <row class="collapse">
                <columns class="show-for-large" large="6">
                  <a href="${discountHref}">
                    <img src="${leftImage}">
                  </a>
                  <discountsinfo
                    title="${title}"
                    text="${text}"
                    button-href="${discountHref}"
                    button-text="${buttonText}"
                  ></discountsinfo>
                </columns>
                <columns class="hide-for-large" small="12">
                  <a href="${discountHref}">
                    <img src="${mobileImage}">
                  </a>
                  <discountsinfo
                    title="${title}"
                    text="${text}"
                    button-href="${discountHref}"
                    button-text="${buttonText}"
                  ></discountsinfo>
                </columns>
                <columns class="show-for-large" large="6">
                  <a href="${discountHref}">
                    <img src="${rightImage}">
                  </a>
                </columns>
              </row>
            </columns>
          </row>
        </columns>
      </row>
    </container>
  `;
}
