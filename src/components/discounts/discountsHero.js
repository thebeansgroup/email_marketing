module.exports = function (element) {      
  var topImage = element.attr('top-image');
  var bottomImage = element.attr('bottom-image');
  var title = element.attr('title');
  var text = element.attr('text');
  
  return `
    <container>
      <row class="collapse collapse-bottom">
        <columns small="12" large="12">
          <center class="discounts-hero">
            <spacer size="40"></spacer>
            <img src="${topImage}">
            <spacer size="20"></spacer>
            <div class="deals-hero__text-container">
              <h6 class="text-center discounts-hero__title">
                ${title}
              </h6>
              <p class="text-center discounts-hero__text">
                ${text}
              </p>
            </div>
          </center>
        </columns>
      </row>
      <row class="collapse">
        <columns small="12" large="12">
          <center>
            <img src="${bottomImage}">
          </center>
        </columns>
      </row>
    </container>
  `;
}
