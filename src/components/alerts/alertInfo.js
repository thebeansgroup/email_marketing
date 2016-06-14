import componentHelper from '../../helpers/componentHelper';
import attributeHelper from '../../helpers/attributeHelper';

module.exports = function (element) {
  var title = attributeHelper.getAttribute(element, 'title');
  var text = attributeHelper.getAttribute(element, 'text');
  var buttonText = attributeHelper.getAttribute(element, 'button-text');
  var buttonHref = attributeHelper.getAttribute(element, 'button-href');
  
  // <br/>s required for Outlook 07, 10, 13 
  // to give at least SOME vertical spacing since padding isnt supported
  return `
    <br/>
    <div class="alert-info__text-container">
      <h6 class="alert-info__title text-center">
        ${title}
      </h6>
      <br/>
      <p class="alert-info__text text-center">
        ${text}
      </p>
      <br/>
      <div class="alert-info__button-container">
        <offerbutton
          text="${buttonText}"
          href="${buttonHref}"
        ></offerbutton>
      </div>
    </div>
  `;
}
