module.exports = function (element) {      
  var image = element.attr('image');
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
                <columns small="12" large="6">
                  <a href="${discountHref}">
                    <img src="${image}">
                  </a>
                </columns>
                <columns small="12" large="6">
                  <discountsinfo
                    title="${title}"
                    text="${text}"
                    button-href="${discountHref}"
                    button-text="${buttonText}"
                  ></discountsinfo>
                </columns>
              </row>
            </columns>
          </row>
        </columns>
      </row>
    </container>
  `;
}
