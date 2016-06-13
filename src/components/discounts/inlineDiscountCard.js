module.exports = function (element) {      
  var image = element.attr('image');
  var buttonHref = element.attr('button-href');
  var buttonText = element.attr('button-text');
  var title = element.attr('title');
  var company = element.attr('company');
  
  return `
    <a href="${buttonHref}">
      <img width="250" height="125" src="${image}">
    </a>
    <spacer size="10"></spacer>
    <row class="collapse">
      <columns small="6" large="6">
        <h6 class="discount-card__title">
          ${title}
        </h6>
        <p class="discount-card__text">
          at ${company}
        </p>
      </columns>
      <columns small="1" large="1">
      </columns>
      <columns small="5" large="5">
        <discountcardbutton
          href="${buttonHref}"
          text="${buttonText}"
        ></discountcardbutton>
      </columns>
    </row>
  `;
}
