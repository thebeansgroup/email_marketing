import componentHelper from '../../helpers/componentHelper';

module.exports = function (element) {      
  var topImage = element.attr('top-image');
  var bottomImage = element.attr('bottom-image');
  var href = element.attr('href');
  var title = element.attr('title');
  var text = element.attr('text');
  
  return `
    <container>
      <row class="collapse ${componentHelper.getElementClasses(element)}">
        <columns small="12" large="12">
          <center class="deals-hero">
            <a href="${href}">
              <img src="${topImage}">
              <div class="deals-hero__text-container">
                <h6 class="text-center deals-hero__title">
                  ${title}
                </h6>
                <p class="text-center deals-hero__text">
                  ${text}
                </p>
              </div>
              <img src="${bottomImage}">
            </a>
          </center>
        </columns>
      </row>
      <spacer size="20"></spacer>
    </container>
  `;
}
