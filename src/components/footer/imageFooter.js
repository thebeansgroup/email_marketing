module.exports = function (element) {
  var image1 = element.attr('image-1');
  var image2 = element.attr('image-2');
  var href1 = element.attr('href-1');
  var href2 = element.attr('href-2');
  
  return `
    <footer
      images="true"
      image-1="${image1}"
      image-2="${image2}"
      href-1="${href1}"
      href-2="${href2}"
    ></footer>
  `;
}
