module.exports = function (element) {      
  var image = element.attr('image');
  var buttonHref = element.attr('button-href');
  var buttonText = element.attr('button-text');
  var title = element.attr('title');
  var company = element.attr('company');
  
  return `
    <container>
      <row>
        <columns small="12" large="12">
          <row class="collapse-bottom">
            <columns small="3" large="3">
              <row class="collapse">
                <columns small="9" large="11">
                  <a href="${buttonHref}">
                    <img src="${image}">
                  </a>
                </columns>
                <columns small="3" large="1">
                </columns>
              </row>
            </columns>
            
            <columns small="8" large="5">
              <spacer size="20"></spacer>
              <a href="${buttonHref}">
                <h6 class="small-deal-card__title">
                  ${title}
                </h6>
                <p class="small-deal-card__text">
                  at ${company}
                </p>
              </a>
            </columns>
            
            <columns class="show-for-large" small="0" large="4">
              <row class="collapse">
                <columns small="2" large="2">
                </columns>
                <columns small="10" large="10">
                  <spacer size="20"></spacer>
                  <smalldealcardbutton
                    href="${buttonHref}"
                    text="${buttonText}"
                  ></smalldealcardbutton>
                </columns>
              </row>
            </columns>
          </row>
          
          <row class="collapse-bottom">
            <columns small="12" large="12">
              <hr class="small-deal-card__line-break"></hr>
            </columns>
          </row>
        </columns>
      </row>
    </container>
  `;
}
