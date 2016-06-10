import componentHelper from '../../helpers/componentHelper';

module.exports = function (element) {      
  var title = element.attr('title');
  var text = element.attr('text');
  var buttonText = element.attr('button-text');
  var buttonHref = element.attr('button-href');
  var image = element.attr('image');
  
  return `
    <container class="${componentHelper.getElementClasses(element)}">
      <row class="collapse collapse-bottom">
        <columns class="alert-block__image" small="12" large="6">
          <a href="${buttonHref}">
            <img height="300" width="300" src="${image}">
          </a>
        </columns>
        <alertinfo
          class="alert-block__info"
          title="${title}"
          text="${text}"
          button-text="${buttonText}"
          button-href="${buttonHref}"
          mobile-columns="12"
          desktop-columns="6"
        ></alertinfo>
      </row>
    </container>
  `;
}
