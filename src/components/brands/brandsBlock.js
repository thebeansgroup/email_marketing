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
        <columns small="12" large="12">
          <h6 class="text-center brands-block__title">Favourite Brands</h6>
          <spacer size="50"></spacer>
          <row>
            <columns class="brands-block__brand" large="2" small="5">
              <a href="${href1}">
                <img src="${image1}">
              </a>
            </columns>
            <columns large="1" small="1">
            </columns>
            <columns class="brands-block__brand" large="2" small="5">
              <a href="${href2}">
                <img src="${image2}">
              </a>
            </columns>
            <columns large="1" small="1">
            </columns>
            <columns class="brands-block__brand" large="2" small="5">
              <a href="${href3}">
                <img src="${image3}">
              </a>
            </columns>
            <columns large="1" small="1">
            </columns>
            <columns class="brands-block__brand" large="2" small="5">
              <a href="${href4}">
                <img src="${image4}">
              </a>
            </columns>
          </row>
        </columns>
      </row>
    </container>
  `;
}
