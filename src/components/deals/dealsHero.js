import componentHelper from '../../helpers/componentHelper';

module.exports = function (element) {      
  var topImage = element.attr('top-image');
  var bottomImage = element.attr('bottom-image');
  var backgroundColour = element.attr('background-colour');
  var href = element.attr('href');
  var title = element.attr('title');
  var text = element.attr('text');
  
  return `
    <container>
      <row class="collapse ${componentHelper.getElementClasses(element)}">
        <columns small="12" large="12">
          <center class="deals-hero">
            <a href="${href}">
              <img width="580" height="400" src="${topImage}">
              <div class="deals-hero__text-container" style="background-color:${backgroundColour};">
                <h6 class="text-center deals-hero__title">
                  ${title}
                </h6>
                <span class="text-center deals-hero__text">
                  ${text}
                </span>
              </div>
              <img width="580" height="75" src="${bottomImage}">
            </a>
          </center>
        </columns>
      </row>
      <spacer size="20"></spacer>
    </container>
  `;
}
