import componentHelper from '../../helpers/componentHelper';
import attributeHelper from '../../helpers/attributeHelper';

module.exports = function (element) {      
  var title = attributeHelper.getAttribute(element, 'title');
  var text = attributeHelper.getAttribute(element, 'text');
  var buttonText = attributeHelper.getAttribute(element, 'button-text');
  var buttonHref = attributeHelper.getAttribute(element, 'button-href');
  var image = attributeHelper.getAttribute(element, 'image');
  
  // &nbsp; after img required for Outlook 03 to display image at correct size
  return `
    <container class="${componentHelper.getElementClasses(element)}">
      <row class="collapse collapse-bottom">
        <columns small="12" large="12">
          <a href="${buttonHref}">
            <img width="580" height="320" src="${image}">
            &nbsp;
          </a>
        </columns>
      </row>
      <row class="collapse">
        <columns small="12"large="12">
          <alertinfo 
            title="${title}"
            text="${text}"
            button-text="${buttonText}"
            button-href="${buttonHref}"
          ></alertinfo>
        </columns>
      </row>
    </container>
  `;
}
