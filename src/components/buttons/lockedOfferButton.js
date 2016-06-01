module.exports = function (element) {
  return `
    <tbgbutton 
      class="expand"
      text="${element.attr('text')}"
      href="${element.attr('href')}"
      padlock="true"
      class-prefix="offer-button"
    ></tbgbutton>
  `;
}
