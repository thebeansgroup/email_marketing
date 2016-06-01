module.exports = function (element) {      
  var image = element.attr('image');
  var buttonHref = element.attr('button-href');
  var buttonText = element.attr('button-text');
  var title = element.attr('title');
  var company = element.attr('company');
  
  return `
    <row>
      <columns small="12" large="12">
        <a href="#link">
          <img src="${image}">
        </a>
        <spacer size="10"></spacer>
        <row class="collapse">
          <columns small="6" large="4">
            <h6 class="large-deal-card__title">
              ${title}
            </h6>
            <p class="large-deal-card__text">
              at ${company}
            </p>
          </columns>
          <columns small="1" large="1">
          </columns>
          <columns small="5" large="4">
            <largedealcardbutton
              href="${buttonHref}"
              text="${buttonText}"
            ></largedealcardbutton>
          </columns>
          <columns class="show-for-large" large="3">
        </row>
      </columns>
    </row>
  `;
}
