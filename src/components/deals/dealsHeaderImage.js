import componentHelper from '../../helpers/componentHelper';

module.exports = function (element) {      
  var image = element.attr('image');
  
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
