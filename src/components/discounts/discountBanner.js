module.exports = function (element) {  
  var title = element.attr('title');
  var text = element.attr('text');
  var buttonText = element.attr('button-text');
  var buttonHref = element.attr('button-href');
  
  return `
    <container>
      <row class="collapse discount-banner__container">
        <columns class="show-for-large" small="12" large="2">
        </columns>
        <columns small="12" large="8">
          <div class="discount-banner__text-container">
            <h6 class="text-center discount-banner__title">
              ${title}
            </h6>
            <p class="text-center discount-banner__text">
              ${text}
            </p>
            <spacer size="30"></spacer>
            <row>
              <columns small="1" large="2">
              </columns>
              <columns small="10" large="8">
                <discountbannerbutton
                  href="${buttonHref}"
                  text="${buttonText}"
                ></discountbannerbutton>
              </columns>
              <columns small="1" large="2">
              </columns>
            </row>
          </div>
        </columns>
        <columns class="show-for-large" small="12" large="2">
        </columns>
      </row>
      <spacer size="30"></spacer>
    </container>      
  `;
}
