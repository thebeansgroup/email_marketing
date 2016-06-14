import componentHelper from '../../helpers/componentHelper';

module.exports = function (element) {
  var title = element.attr('title');
  var text = element.attr('text');
  var buttonText = element.attr('button-text');
  var buttonHref = element.attr('button-href');
  var mobileColumns = element.attr('mobile-columns');
  var desktopColumns = element.attr('desktop-columns');
  var classModifier = element.attr('class-modifier');
  
  return `
    <columns 
      class="${componentHelper.getElementClasses(element)}"
      small="${mobileColumns}"
      large="${desktopColumns}"
    >
      <div class="alert-info__text-container">
        <h6 class="alert-info__title--${classModifier} text-center">
          ${title}
        </h6>
        <br/>
        <p class="alert-info__text text-center">
          ${text}
        </p>
        <br/>
        <br/>
        <div class="alert-info__button-container">
          <offerbutton
            text="${buttonText}"
            href="${buttonHref}"
          ></offerbutton>
        </div>
      </div>
    </columns>
  `;
}
