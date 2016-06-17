import attributeHelper from '../../helpers/attributeHelper';

module.exports = function (element) {      
  var image = attributeHelper.getAttribute(element, 'image');
  var dealHref = attributeHelper.getAttribute(element, 'deal-href');
  var buttonText = attributeHelper.getAttribute(element, 'button-text');
  var title = attributeHelper.getAttribute(element, 'title');
  var subtitle = attributeHelper.getAttribute(element, 'subtitle');
  
  // &nbsp; before img required for Outlook 03 to display image at correct size
  // <br/>s required for Outlook 07, 10, 13 
  // to give at least SOME vertical spacing since padding isnt supported
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
