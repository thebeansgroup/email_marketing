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
        <columns small="12" large="12">
          <a href="${buttonHref}">
            <img width="640" height="320" src="${image}">
            &nbsp;
          </a>
        </columns>
      </row>
      <row class="collapse">
        <br/>
        <alertinfo 
          title="${title}"
          text="${text}"
          class-modifier="vertical"
          button-text="${buttonText}"
          button-href="${buttonHref}"
          mobile-columns="12"
          desktop-columns="12"
        ></alertinfo>
      </row>
    </container>
  `;
}
