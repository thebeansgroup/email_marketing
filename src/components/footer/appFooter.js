import attributeHelper from '../../helpers/attributeHelper';
import componentHelper from '../../helpers/componentHelper';

module.exports = function (element) {
  var image = attributeHelper.getAttribute(element, 'image');
  var brand = attributeHelper.getAttribute(element, 'brand');

  var titleSection = ``;
  if (brand) {
    titleSection = `
      <container class="app-footer app-footer__container">
        <div class="app-footer__arrow-down">
        </div>
        <spacer size="30"></spacer>
        <row>
          <columns small="1" large="1">
          </columns>
          <columns small="10" large="10">
            <h6 class="text-center app-footer__header">
              Get the <span class="app-footer__header--bold">${brand} discount</span> a little slicker with our brand new app
            </h6>
          </columns>
          <columns small="1" large="1">
          </columns>
        </row>
      </container>
    `;
  } else {
    titleSection = `
      <container class="app-footer app-footer__container">
        <div class="app-footer__arrow-down">
        </div>
        <spacer size="30"></spacer>
        <row>
          <columns small="1" large="1">
          </columns>
          <columns small="10" large="10">
            <h6 class="text-center app-footer__header">
              All the discounts you love, right in your pocket
            </h6>
          </columns>
          <columns small="1" large="1">
          </columns>
        </row>
      </container>
    `;
  }

  return `
    ${titleSection}
    <container class="app-footer app-footer__container">
      <row>
        <columns small="2" large="2">
        </columns>
        <columns small="8" large="8">
          <ul class="app-footer__list">
            <li class="app-footer__list-item">
              <span>Shop instore and <strong>show your Student Beans iD</strong> as proof of student status!</span>
            </li>
            <li>
              <span><strong>Get codes</strong> instantly to use for shopping online</span>
            </li>
          </ul>
        </columns>
        <columns small="2" large="2">
        </columns>
      </row>
    </container>

    <container class="app-footer app-footer__container">
      <row>
        <columns small="2" large="2">
        </columns>
        <columns small="8" large="8">
          <center>
            <a href="https://itunes.apple.com/gb/app/apple-store/id994482161?mt=8">
              <img class="app-footer__button" width="124" height="36" src="https://cdn.studentbeans.com/email/app-store-btn.png">
            </a>
            &nbsp;
            <a href="https://play.google.com/store/apps/details?id=com.studentbeans.studentbeans&referrer=utm_source%3Dstudentbeans%26utm_medium%3Demail_footer">
              <img class="app-footer__button" width="124" height="36" src="https://cdn.studentbeans.com/email/google-play-btn.png">
            </a>
          </center>
        </columns>
        <columns small="2" large="2">
        </columns>
      </row>
    </container>

    <container class="app-footer app-footer__image__container">
      <img class="app-footer__image" width="580" height="445" src="${image}">
    </container>
  `;
}
