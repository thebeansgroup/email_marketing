import attributeHelper from '../../helpers/attributeHelper';

module.exports = function (element) {      
  var image = attributeHelper.getAttribute(element, 'image');
  var dealHref = attributeHelper.getAttribute(element, 'deal-href');
  var buttonText = attributeHelper.getAttribute(element, 'button-text');
  var title = attributeHelper.getAttribute(element, 'title');
  var subtitle = attributeHelper.getAttribute(element, 'subtitle');
  var keyword = attributeHelper.getAttribute(element, 'keyword');
  
  return `
    <a href="${dealHref}">
      <img class="deal-card__image" width="266" height="133" src="${image}">
      <h6 class="deal-card__title">
        ${title}
      </h6>
      <p class="deal-card__text">
        <span class="deal-card__keyword">${keyword}</span> ${subtitle}
      </p>
    </a>
  `;
}
