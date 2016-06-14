module.exports = function (element) {      
  var image = element.attr('image');
  var title = element.attr('title');
  var text = element.attr('text');
  var keyword = element.attr('keyword');
  var buttonText = element.attr('button-text');
  var discountHref = element.attr('discount-href');
  
  return `
    <container>
      <row>
        <columns small="12" large="6">
          <a href="${discountHref}">
            <img width="250" height="250" src="${image}">
          </a>
        </columns>
        <columns small="12" large="6">
          <discountinfo
            title="${title}"
            text="${text}"
            keyword="${keyword}"
            button-href="${discountHref}"
            button-text="${buttonText}"
          ></discountinfo>
        </columns>
      </row>
    </container>
  `;
}
