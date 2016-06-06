module.exports = function (element) {      
  var image = element.attr('image');
  var dealHref = element.attr('deal-href');
  var buttonText = element.attr('button-text');
  var title = element.attr('title');
  var company = element.attr('company');
  
  return `
    <a href="${dealHref}">
      <img src="${image}">
    </a>
    <spacer size="10"></spacer>
    <row class="collapse">
      <columns small="6" large="6">
        <h6 class="large-deal-card__title">
          ${title}
        </h6>
        <p class="large-deal-card__text">
          at ${company}
        </p>
      </columns>
      <columns small="1" large="1">
      </columns>
      <columns small="5" large="5">
        <smalldealcardbutton
          href="${dealHref}"
          text="${buttonText}"
        ></largedealcardbutton>
      </columns>
    </row>
  `;
}
