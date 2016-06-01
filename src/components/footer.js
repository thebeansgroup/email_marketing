import componentHelper from '../helpers/componentHelper';

module.exports = function (element) {
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
    <container class="${componentHelper.getElementClasses(element)} footer footer__container">
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
