module.exports = function (element) {      
  var image = element.attr('image');
  var discountHref = element.attr('discount-href');
  var buttonText = element.attr('button-text');
  var title = element.attr('title');
  var text = element.attr('text');
  
  return `
    <a href="${discountHref}">
      <img src="${image}">
    </a>
    <div class="discount-card__text-container">
      <h6 class="text-center discount-card__title">${title}</h6>
      <spacer size="20"></spacer>
      <p class="text-center discount-card__text">${text}</p>
    </div>
    <row>
      <columns small="1" large="1">
      </columns>
      <columns small="10" large="10">
        <discountcardbutton
          href="${discountHref}"
          text="${buttonText}"
        ></discountcardbutton>
      </columns>
      <columns small="1" large="1">
      </columns>
    </row>
  `;
}
