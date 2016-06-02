module.exports = function (element) {
  return `
    <tbgbutton
      class="expand"
      text="${element.attr('text')}"
      href="${element.attr('href')}"
      padlock="false"
      class-prefix="discount-banner-button"
    ></tbgbutton>
  `;
}
