import attributeHelper from '../../helpers/attributeHelper';

module.exports = function (element) {
  var image = attributeHelper.getAttribute(element, 'image');
  
  // &nbsp; after img required for Outlook 03 to display image at correct size
  return `
    <container>
      <row class="collapse collapse-bottom">
        <columns small="12" large="12">
          <img width="580" height="100" src="${image}">
          &nbsp;
        </columns>
      </row>
    </container>
  `;
}
