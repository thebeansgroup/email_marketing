module.exports = function (element) {      
  var leftImage = element.attr('left-image');
  var rightImage = element.attr('right-image');
  var title = element.attr('title');
  var text = element.attr('text');
  var buttonText = element.attr('button-text');
  var buttonHref = element.attr('button-href');
  
  return `
    <container>
      <row>
        <columns small="12" large="12">
          <row>
            <columns small="12" large="12">
              <row class="collapse">
                <columns small="6" large="6">
                  <img src="${leftImage}">
                  <div class="discounts-image-block__text-container">
                    <h6 class="text-center discounts-image-block__title">
                      ${title}
                    </h6>
                    <p class="text-center discounts-image-block__text">
                      ${text}
                    </p>
                    <spacer size="10"></spacer>
                    <lockedofferbutton
                      text="${buttonText}"
                      href="${buttonHref}"
                    ></lockedofferbutton>
                  </div>
                </columns>
                <columns small="6" large="6">
                  <img src="${rightImage}">
                </columns>
              </row>
            </columns>
          </row>
        </columns>
      </row>
    </container>
  `;
}
