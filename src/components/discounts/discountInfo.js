module.exports = function (element) {  
  var title = element.attr('title');
  var text = element.attr('text');
  var keyword = element.attr('keyword');
  var buttonText = element.attr('button-text');
  var buttonHref = element.attr('button-href');
  
  return `
    <div class="discount-info__text-container">
      <br/>
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
