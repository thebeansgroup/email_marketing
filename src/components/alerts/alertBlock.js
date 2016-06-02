import componentHelper from '../../helpers/componentHelper';

module.exports = function (element) {      
  var title = element.attr('title');
  var text = element.attr('text');
  var buttonText = element.attr('button-text');
  var buttonHref = element.attr('button-href');
  var image = element.attr('image');
  var mobileImage = element.attr('mobile-image');
  
  return `
    <container class="${componentHelper.getElementClasses(element)}">
      <row class="collapse collapse-bottom">
        <columns class="hide-for-large" small="6" large="6">
          <img src="${mobileImage}">
        </columns>
      </row>
      <row class="collapse collapse-bottom">
        <alertinfo 
          title="${title}"
          text="${text}"
          button-text="${buttonText}"
          button-href="${buttonHref}"
          mobile-columns="12"
          desktop-columns="6"
        ></alertinfo>
        <columns class="show-for-large" small="12" large="6">
          <img src="${image}">
        </columns>
      </row>
    </container>
  `;
}
