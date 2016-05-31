var format = require('util').format;

module.exports = {
  lockedofferbutton: {
    js: function (element) {
      var expander = '';
      var inner = element.html();

      // If we have the href attribute we can create an anchor for the inner of the button;
      if (element.attr('href')) {
        inner = format('<a class="btn offer-button__text" href="%s"><img class="btn offer-button__icon" src="http://cdn.ymaservices.com/email/global/deals__padlock.jpg"></img>%s</a>', element.attr('href'), inner);
      }

      // If the button is expanded, it needs a <center> tag around the content
      if (element.hasClass('expand') || element.hasClass('expanded')) {
        inner = format('<center>%s</center>', inner);
        expander = '\n<td class="expander"></td>';
      }

      // The .button class is always there, along with any others on the <button> element
      var classes = ['button'];
      if (element.attr('class')) {
        classes = classes.concat(element.attr('class').split(' '));
      }

      return format('<table class="small btn offer-button__container %s"><tr><td><table><tr><td class="btn offer-button">%s</td></tr></table></td>%s</tr></table>', classes.join(' '), inner, expander);
    }
  },
  header: {
    js: function (element) {
      var classes = [];
      if (element.attr('class')) {
        classes = classes.concat(element.attr('class').split(' '));
      }

      return format('<container class="%s header header__container"><row class="collapse meta"><columns small="6" large="6"><img src="http://cdn.ymaservices.com/email/global/header__sb-logo.jpg"></columns><columns small="6" large="6"><p class="text-right"><span class="show-for-large">Making life a little more awesome for millions of students<br>No images?</span><a href="#view"> View in browser</a></p></columns></row></container>', classes.join(' '));
    }
  },
  footer: {
    js: function (element) {
      var classes = [];
      if (element.attr('class')) {
        classes = classes.concat(element.attr('class').split(' '));
      }

      return format('<container class="%s footer footer__container"><row class="meta"><columns small="2" large="2"></columns><columns small="9" large="9"><center><spacer size="40"></spacer><img src="http://cdn.ymaservices.com/email/global/footer__sb-logo.jpg"><spacer size="30"></spacer><p class="text-center">This message was sent by Student Beans. You are receiving this email because you have an existing relationship with Student Beans. Don\'t like great student freebies and competitions?</p><spacer size="20"></spacer><p class="text-center"><a class="footer__link" href="#unsubscribe">Unsubscribe from this weekly newsletter</a> or <a class="footer__link" href="#unsubscribe">manage your preferences</a>.</p><spacer size="20"></spacer><p class="text-center">Privacy is important to us. <a class="footer__link" href="#policy">View our privacy policy</a>.</p><spacer size="20"></spacer><row><columns small="6" large="6"><a href=""><img class="float-right footer footer__facebook-icon" src="http://cdn.ymaservices.com/email/global/footer__facebook.jpg"></a></columns><columns small="6" large="6"><a href=""><img class="float-left footer footer__twitter-icon" src="http://cdn.ymaservices.com/email/global/footer__twitter.jpg"></a></columns></row></center></columns><columns small="2" large="2"></columns></row><row class="meta"><columns><spacer size="80"></spacer><p class="text-center">Registered Office:1 Vincent Square, London, SW1 2PN | Registered as a company in England and Wales, number: 5486885 | VAT Registration Number: 873 0262 33. Copyright 2014 Student Beans all rights reserved.</p></columns></row></container>', classes.join(' '));
    }
  },
  alertinfo: {
    js: function (element) {
      var classes = [];
      if (element.attr('class')) {
        classes = classes.concat(element.attr('class').split(' '));
      }
      
      var title = element.attr('title');
      var text = element.attr('text');
      var buttonText = element.attr('button-text');
      var buttonHref = element.attr('button-href');
      var mobileColumns = element.attr('mobile-columns');
      var desktopColumns = element.attr('desktop-columns');
      
      return `<columns class="${classes.join(' ')}" small="${mobileColumns}" large="${desktopColumns}"><center><spacer size="35"></spacer><h6 class="alert-info__title text-center">${title}</h6><spacer size="15"></spacer><p class="alert-info__text text-center">${text}</p><spacer size="25"></spacer><lockedofferbutton href="${buttonHref}">${buttonText}</lockedofferbutton><spacer size="25"></spacer></center></columns>`;
    }
  },
  alertblock: {
    js: function (element) {
      var classes = [];
      if (element.attr('class')) {
        classes = classes.concat(element.attr('class').split(' '));
      }
      
      var title = element.attr('title');
      var text = element.attr('text');
      var buttonText = element.attr('button-text');
      var buttonHref = element.attr('button-href');
      var image = element.attr('image');
      var mobileImage = element.attr('mobile-image');
      
      return `<container class="${classes.join(' ')}"><row class="collapse collapse-bottom"><columns class="hide-for-large" small="6" large="6"><img src="${mobileImage}"></columns></row><row class="collapse collapse-bottom"><alertinfo title="${title}" text="${text}" button-text="${buttonText}" button-href="${buttonHref}" mobile-columns="12" desktop-columns="6"></alertinfo><columns class="show-for-large" small="12" large="6"><img src="${image}"></columns></row></container>`;
    }
  }
};
