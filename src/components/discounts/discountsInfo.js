module.exports = function (element) {  
  var title = element.attr('title');
  var text = element.attr('text');
  var buttonText = element.attr('button-text');
  var buttonHref = element.attr('button-href');
  
  return `
    <div class="discounts-image-block__text-container">
      <h6 class="text-center discounts-image-block__title">
        ${title}
      </h6>
      <p class="text-center discounts-image-block__text">
        ${text}
      </p>
      <spacer size="10"></spacer>
      <lockedofferbutton
        text="${buttonText}"
        href="${buttonHref}"
      ></lockedofferbutton>
    </div>        
  `;
}
