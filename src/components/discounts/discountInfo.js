import attributeHelper from '../../helpers/attributeHelper';

module.exports = function (element) {  
  var title = attributeHelper.getAttribute(element, 'title');
  var text = attributeHelper.getAttribute(element, 'text');
  var keyword = attributeHelper.getAttribute(element, 'keyword');
  var buttonText = attributeHelper.getAttribute(element, 'button-text');
  var buttonHref = attributeHelper.getAttribute(element, 'button-href');
  
  return `
    <div class="discount-info__text-container">
      <h6 class="discount-info__keyword text-center">
        ${keyword}
      </h6>
      <h6 class="discount-info__title text-center">
        ${title}
      </h6>
      <br/>
      <p class="discount-info__text text-center">
        ${text}
      </p>
      <br/>
      <div class="discount-info__button-container">
        <offerbutton
          text="${buttonText}"
          href="${buttonHref}"
        ></offerbutton>
      </div>
    </div>
  `;
}
