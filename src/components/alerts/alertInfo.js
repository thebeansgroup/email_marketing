import componentHelper from '../../helpers/componentHelper';

module.exports = function (element) {
  var title = element.attr('title');
  var text = element.attr('text');
  var buttonText = element.attr('button-text');
  var buttonHref = element.attr('button-href');
  var mobileColumns = element.attr('mobile-columns');
  var desktopColumns = element.attr('desktop-columns');
  
  return `
    <columns 
      class="${componentHelper.getElementClasses(element)}"
      small="${mobileColumns}"
      large="${desktopColumns}"
    >
      <center>
        <spacer size="35"></spacer>
        <h6 class="alert-info__title text-center">
          ${title}
        </h6>
        <spacer size="30"></spacer>
        <p class="alert-info__text text-center">
          ${text}
        </p>
        <spacer size="25"></spacer>
        <row>
          <columns small="2" large="2"></columns>
          <columns small="8" large="8">
            <lockedofferbutton
              text="${buttonText}"
              href="${buttonHref}"
            ></lockedofferbutton>
          </columns>
          <columns small="2" large="2"></columns>
        </row>
        <spacer size="25"></spacer>
      </center>
    </columns>
  `;
}
