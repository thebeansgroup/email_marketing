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
    <spacer size="10"></spacer>
    <h6 class="text-center brands-block__title">Favourite Brands</h6>
    <spacer size="50"></spacer>
    
    <row class="show-for-large">
      <columns large="12">
        <row class="collapse">
          <columns large="3">
            <row class="collapse">
              <columns large="10">
                <a href="${href1}">
                  <img src="${image1}">
                </a>
              </columns>
              <columns large="2">
              </columns>
            </row>
          </columns>
          <columns large="3">
            <row class="collapse">
              <columns large="1">
              </columns>
              <columns large="10">
                <a href="${href2}">
                  <img src="${image2}">
                </a>
              </columns>
              <columns large="1">
              </columns>
            </row>
          </columns>
          <columns large="3">
            <row class="collapse">
              <columns large="1">
              </columns>
              <columns large="10">
                <a href="${href3}">
                  <img src="${image3}">
                </a>
              </columns>
              <columns large="1">
              </columns>
            </row>
          </columns>
          <columns large="3">
            <row class="collapse">
              <columns large="2">
              </columns>
              <columns large="10">
                <a href="${href4}">
                  <img src="${image4}">
                </a>
              </columns>
            </row>
          </columns>
        </row>
      </columns>
    </row>
    
    <row class="hide-for-large">
      <columns small="6">
        <columns small="2">
        </columns>
        <columns small="8">
          <a href="${href1}">
            <img src="${image1}">
          </a>
        </columns>
        <columns small="2">
        </columns>
      </columns>
      <columns small="6">
        <columns small="2">
        </columns>
        <columns small="8">
          <a href="${href2}">
            <img src="${image2}">
          </a>
        </columns>
        <columns small="2">
        </columns>
      </columns>
    </row>
    <spacer size="20"></spacer>
    <row class="hide-for-large">
      <columns small="6">
        <columns small="2">
        </columns>
        <columns small="8">
          <a href="${href3}">
            <img src="${image3}">
          </a>
        </columns>
        <columns small="2">
        </columns>
      </columns>
      <columns small="6">
        <columns small="2">
        </columns>
        <columns small="8">
          <a href="${href4}">
            <img src="${image4}">
          </a>
        </columns>
        <columns small="2">
        </columns>
      </columns>
    </row>
  `;
}
