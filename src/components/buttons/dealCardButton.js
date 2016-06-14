module.exports = function (element) {
  return `
    <tbgbutton
      class="expand"
      text="${element.attr('text')}"
      href="${element.attr('href')}"
      class-prefix="deal-card-button"
    ></tbgbutton>
  `;
}
