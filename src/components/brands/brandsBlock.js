module.exports = function (element) {      
  var image1 = element.attr('brand-image-1');
  var href1 = element.attr('brand-href-1');
  var image2 = element.attr('brand-image-2');
  var href2 = element.attr('brand-href-2');
  var image3 = element.attr('brand-image-3');
  var href3 = element.attr('brand-href-3');
  var image4 = element.attr('brand-image-4');
  var href4 = element.attr('brand-href-4');
  
  return `
    <container>
      <row>
        <columns large="12" small="12">
          <center>
            <h6 class="text-center brands-block__title">Favourite Brands</h6>
          </center>
          <spacer size="30"></spacer>
        </columns>
      </row>
      <row>
        <columns large="2" small="6">
          <a href="${href1}">
            <img width="84" height="84" src="${image1}">
          </a>
        </columns>
        <columns class="show-for-large" large="1">
        </columns>
        <columns large="2" small="6">
          <a href="${href2}">
            <img width="84" height="84" src="${image2}">
          </a>
        </columns>
        <columns class="show-for-large" large="1" small="1">
        </columns>
        <columns large="2" small="6">
          <a href="${href3}">
            <img width="84" height="84" src="${image3}">
          </a>
        </columns>
        <columns class="show-for-large" large="1" small="1">
        </columns>
        <columns large="2" small="6">
          <a href="${href4}">
            <img width="84" height="84" src="${image4}">
          </a>
        </columns>
      </row>
    </container>
  `;
}
