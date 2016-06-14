module.exports = function (element) {      
  var image = element.attr('image');
  var dealHref = element.attr('deal-href');
  var buttonText = element.attr('button-text');
  var title = element.attr('title');
  var subtitle = element.attr('subtitle');
  var keyword = element.attr('keyword');
  
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
