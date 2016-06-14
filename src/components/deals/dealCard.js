module.exports = function (element) {      
  var image = element.attr('image');
  var dealHref = element.attr('deal-href');
  var buttonText = element.attr('button-text');
  var title = element.attr('title');
  var subtitle = element.attr('subtitle');
  
  return `
    <container>
      <row>
        <columns small="12" large="12">
          <br/>
          <a href="${dealHref}">
            &nbsp;
            <img class="deal-card__image " width="548" height="274" src="${image}">
          </a>
          <row class="collapse">
            <columns small="6" large="6">
              <h6 class="deal-card__title">
                ${title}
              </h6>
              <p class="deal-card__text">
                ${subtitle}
              </p>
            </columns>
            <columns small="1" large="1">
            </columns>
            <columns small="5" large="5">
              <dealcardbutton
                href="${dealHref}"
                text="${buttonText}"
              ></dealcardbutton>
            </columns>
          </row>
        </columns>
      </row>
    </container>
  `;
}
