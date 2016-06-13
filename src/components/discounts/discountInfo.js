module.exports = function (element) {  
  var title = element.attr('title');
  var text = element.attr('text');
  var buttonText = element.attr('button-text');
  var buttonHref = element.attr('button-href');
  
  return `
    <spacer size="30"></spacer>
    <h6 class="text-center discount-image-block__title">
      ${title}
    </h6>
    <spacer size="15"></spacer>
    <p class="text-center discount-image-block__text">
      ${text}
    </p>
    <spacer size="10"></spacer>
    <row>
      <columns small="1" large="1">
      </columns>
      <columns small="10" large="10">
        <lockedofferbutton
          text="${buttonText}"
          href="${buttonHref}"
        ></lockedofferbutton> 
      </columns>
      <columns small="1" large="1">
      </columns>  
    </row>
  `;
}
