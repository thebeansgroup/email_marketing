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
              <row class="show-for-large collapse">
                <columns small="12" large="6">
                  <discountinfo
                    title="${title}"
                    text="${text}"
                    button-href="${discountHref}"
                    button-text="${buttonText}"
                  ></discountinfo>
                </columns>
                <columns small="12" large="6">
                  <a href="${discountHref}">
                    <img src="${image}">
                  </a>
                </columns>
              </row>
              <row class="hide-for-large collapse">
                <columns small="12" large="6">
                  <a href="${discountHref}">
                    <img src="${image}">
                  </a>
                </columns>
                <columns small="12" large="6">
                  <discountinfo
                    title="${title}"
                    text="${text}"
                    button-href="${discountHref}"
                    button-text="${buttonText}"
                  ></discountinfo>
                </columns>
              </row>
            </columns>
          </row>
        </columns>
      </row>
    </container>
  `;
}