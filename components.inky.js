function getElementClasses(element) {
  var classes = [];
  if (element.attr('class')) {
    classes = classes.concat(element.attr('class').split(' '));
  }
  return classes.join(' ');
}

module.exports = {
  tbgbutton: {
    js: function (element) {
      var classPrefix = element.attr('class-prefix');
      var expander = '';
      var inner = element.attr('text');
      
      var padlock = ``;
      var padlockSrc = "http://cdn.ymaservices.com/email/global/deals__padlock.jpg"
      if (element.attr('padlock') == "true") {
        padlock = `<img class="btn ${classPrefix}__icon" src="${padlockSrc}">`;
      } 

      // If we have the href attribute we can create an anchor for the inner of the button;
      if (element.attr('href')) {
        inner = `
          <a class="btn ${classPrefix}__text" href="${element.attr('href')}">
            ${padlock}
            ${inner}
          </a>
        `;
      }

      // If the button is expanded, it needs a <center> tag around the content
      if (element.hasClass('expand') || element.hasClass('expanded')) {
        inner = `<center>${inner}</center>`;
        expander = '\n<td class="expander"></td>';
      }

      return `
        <table class="button small btn ${classPrefix}__container ${getElementClasses(element)}">
          <tr>
            <td>
              <table>
                <tr>
                  <td class="btn ${classPrefix}">
                    ${inner}
                  </td>
                </tr>
              </table>
            </td>
            ${expander}
          </tr>
        </table>
      `;
    }
  },
  lockedofferbutton: {
    js: function (element) {
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
  },
  largedealcardbutton: {
    js: function (element) {
      return `
        <tbgbutton
          class="expand"
          text="${element.attr('text')}"
          href="${element.attr('href')}"
          padlock="false"
          class-prefix="large-deal-card-button"
        ></tbgbutton>
      `;
    }
  },
  header: {
    js: function (element) {
      // TODO: configurable, or hardcoded?
      var headerLogo = "http://cdn.ymaservices.com/email/global/header__sb-logo.jpg";
      var headerText = "Making life a little more awesome for millions of students<br>No images?";
      var headerLinkText = "View in browser";
      var headerLinkHref = "#view";
      
      return `
        <container class="${getElementClasses(element)} header header__container">
          <row class="collapse meta">
            <columns small="6" large="6">
              <img src="${headerLogo}">
            </columns>
            <columns small="6" large="6">
              <p class="text-right">
                <span class="show-for-large">
                  ${headerText}
                </span>
                <a href="${headerLinkHref}"> 
                  ${headerLinkText}
                </a>
              </p>
            </columns>
          </row>
        </container>
      `;
    }
  },
  footer: {
    js: function (element) {
      // TODO: configurable, or hardcoded?
      var footerLogo = "http://cdn.ymaservices.com/email/global/footer__sb-logo.jpg";
      var footerText = "This message was sent by Student Beans. You are receiving this email because you have an existing relationship with Student Beans. Don\'t like great student freebies and competitions?";
      var footerUnsubscribeHref = "#unsubscribe";
      var footerUnsubscribeText = "Unsubscribe from this weekly newsletter";
      var footerManagePrefsText = "manage your preferences";
      var footerPrivacyText = "Privacy is important to us.";
      var footerPrivacyLinkText = "View our privacy policy";
      var footerPrivacyLinkHref = "#policy";
      var footerTwitterImage = "http://cdn.ymaservices.com/email/global/footer__twitter.jpg";
      var footerTwitterHref = "https://twitter.com/studentbeans";
      var footerFacebookImage = "http://cdn.ymaservices.com/email/global/footer__facebook.jpg";
      var footerFacebookHref = "https://www.facebook.com/Student-Beans-257062494492133/?fref=ts";
      var footerAddress = "Registered Office: 1 Vincent Square, London, SW1 2PN | Registered as a company in England and Wales, number: 5486885 | VAT Registration Number: 873 0262 33. Copyright 2014 Student Beans all rights reserved.";
      
      return `
        <container class="${getElementClasses(element)} footer footer__container">
          <row class="meta">
            <columns small="2" large="2"></columns>
            <columns small="9" large="9">
              <center>
                <spacer size="40"></spacer>
                <img src="${footerLogo}">
                <spacer size="30"></spacer>
                <p class="text-center">
                  ${footerText}
                </p>
                <spacer size="20"></spacer>
                <p class="text-center">
                  <a class="footer__link" href="${footerUnsubscribeHref}">
                    ${footerUnsubscribeText}
                  </a>
                  or
                  <a class="footer__link" href="${footerUnsubscribeHref}">
                    ${footerManagePrefsText}
                  </a>
                  .
                </p>
                <spacer size="20"></spacer>
                <p class="text-center">
                  ${footerPrivacyText}
                  <a class="footer__link" href="${footerPrivacyLinkHref}">
                    ${footerPrivacyLinkText}
                  </a>
                  .
                </p>
                <spacer size="20"></spacer>
                <row>
                  <columns small="6" large="6">
                    <a href="${footerFacebookHref}">
                      <img class="float-right footer footer__facebook-icon" src="${footerFacebookImage}">
                    </a>
                  </columns>
                  <columns small="6" large="6">
                    <a href="${footerTwitterHref}">
                      <img class="float-left footer footer__twitter-icon" src="${footerTwitterImage}">
                    </a>
                  </columns>
                </row>
              </center>
            </columns>
            <columns small="2" large="2"></columns>
          </row>
          <row class="meta">
            <columns>
              <spacer size="80"></spacer>
              <p class="text-center">
                ${footerAddress}
              </p>
            </columns>
          </row>
        </container>
      `;
    }
  },
  alertinfo: {
    js: function (element) {
      var title = element.attr('title');
      var text = element.attr('text');
      var buttonText = element.attr('button-text');
      var buttonHref = element.attr('button-href');
      var mobileColumns = element.attr('mobile-columns');
      var desktopColumns = element.attr('desktop-columns');
      
      return `
        <columns 
          class="${getElementClasses(element)}"
          small="${mobileColumns}"
          large="${desktopColumns}"
        >
          <center>
            <spacer size="35"></spacer>
            <h6 class="alert-info__title text-center">
              ${title}
            </h6>
            <spacer size="15"></spacer>
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
  },
  alertblock: {
    js: function (element) {      
      var title = element.attr('title');
      var text = element.attr('text');
      var buttonText = element.attr('button-text');
      var buttonHref = element.attr('button-href');
      var image = element.attr('image');
      var mobileImage = element.attr('mobile-image');
      
      return `
        <container class="${getElementClasses(element)}">
          <row class="collapse collapse-bottom">
            <columns class="hide-for-large" small="6" large="6">
              <img src="${mobileImage}">
            </columns>
          </row>
          <row class="collapse collapse-bottom">
            <alertinfo 
              title="${title}"
              text="${text}"
              button-text="${buttonText}"
              button-href="${buttonHref}"
              mobile-columns="12"
              desktop-columns="6"
            ></alertinfo>
            <columns class="show-for-large" small="12" large="6">
              <img src="${image}">
            </columns>
          </row>
        </container>
      `;
    }
  },
  verticalalertblock: {
    js: function (element) {      
      var title = element.attr('title');
      var text = element.attr('text');
      var buttonText = element.attr('button-text');
      var buttonHref = element.attr('button-href');
      var image = element.attr('image');
      var mobileImage = element.attr('mobile-image');
      
      return `
        <container class="${getElementClasses(element)}">
          <row class="collapse collapse-bottom">
            <columns class="hide-for-large" small="6" large="6">
              <img src="${mobileImage}">
            </columns>
          </row>
          <row class="collapse collapse-bottom">
            <columns class="show-for-large" small="12" large="12">
              <img src="${image}">
            </columns>
          </row>
          <row class="collapse collapse-bottom">
            <alertinfo 
              title="${title}"
              text="${text}"
              button-text="${buttonText}"
              button-href="${buttonHref}"
              mobile-columns="12"
              desktop-columns="12"
            ></alertinfo>
          </row>
        </container>
      `;
    }
  },
  dealshero: {
    js: function (element) {      
      var topImage = element.attr('top-image');
      var bottomImage = element.attr('bottom-image');
      var href = element.attr('href');
      var title = element.attr('title');
      var text = element.attr('text');
      
      return `
        <row class="collapse ${getElementClasses(element)}">
          <columns small="12" large="12">
            <center class="deals-hero">
              <a href="${href}">
                <img src="${topImage}">
                <div class="deals-hero__text-container">
                  <h6 class="text-center deals-hero__title">
                    ${title}
                  </h6>
                  <p class="text-center deals-hero__text">
                    ${text}
                  </p>
                </div>
                <img src="${bottomImage}">
              </a>
            </center>
          </columns>
        </row>
      `;
    }
  },
  largedealcard: {
    js: function (element) {      
      var image = element.attr('image');
      var buttonHref = element.attr('button-href');
      var buttonText = element.attr('button-text');
      var title = element.attr('title');
      var company = element.attr('company');
      
      return `
        <row>
          <columns small="12" large="12">
            <a href="#link">
              <img src="${image}">
            </a>
            <spacer size="10"></spacer>
            <row class="collapse">
              <columns small="6" large="4">
                <h6 class="large-deal-card__title">
                  ${title}
                </h6>
                <p class="large-deal-card__text">
                  at ${company}
                </p>
              </columns>
              <columns small="1" large="1">
              </columns>
              <columns small="5" large="4">
                <largedealcardbutton href="${buttonHref}" text="${buttonText}">
                </largedealcardbutton>
              </columns>
              <columns class="show-for-large" large="3">
            </row>
          </columns>
        </row>
      `;
    }
  }
};
