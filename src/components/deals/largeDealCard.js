module.exports = function (element) {      
  var image = element.attr('image');
  var dealHref = element.attr('deal-href');
  var buttonText = element.attr('button-text');
  var title = element.attr('title');
  var company = element.attr('company');
  
  return `
    <container>
      <row>
        <columns small="12" large="12">
          <a href="${dealHref}">
            &nbsp;
            <img width="548" height="274" src="${image}">
          </a>
        </columns>
      </row>
      <row>
        <columns small="12" large="12">
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
                href="${dealHref}"
                text="${buttonText}"
              ></largedealcardbutton>
            </columns>
            <columns class="show-for-large" large="3">
            </columns>
          </row>
        </columns>
      </row>
    </container>
  `;
}
