import headerJS from './src/components/header';
import footerJS from './src/components/footer';

//Buttons
import tbgbuttonJS from './src/components/buttons/tbgbutton';
import lockedOfferButtonJS from './src/components/buttons/lockedOfferButton';
import largeDealCardButtonJS from './src/components/buttons/largeDealCardButton';
import smallDealCardButtonJS from './src/components/buttons/smallDealCardButton';

//Alerts 
import alertInfoJS from './src/components/alerts/alertInfo';
import alertBlockJS from './src/components/alerts/alertBlock';
import verticalAlertBlockJS from './src/components/alerts/verticalAlertBlock';

//Deals
import dealsHeroJS from './src/components/deals/dealsHero';
import largeDealCardJS from './src/components/deals/largeDealCard';
import smallDealCardJS from './src/components/deals/smallDealCard';
import inlineDealCardJS from './src/components/deals/inlineDealCard';

module.exports = {
  tbgbutton: {
    js: tbgbuttonJS
  },
  lockedofferbutton: {
    js: lockedOfferButtonJS
  },
  largedealcardbutton: {
    js: largeDealCardButtonJS
  },
  smalldealcardbutton: {
    js: smallDealCardButtonJS
  },
  header: {
    js: headerJS
  },
  footer: {
    js: footerJS
  },
  alertinfo: {
    js: alertInfoJS
  },
  alertblock: {
    js: alertBlockJS
  },
  verticalalertblock: {
    js: verticalAlertBlockJS
  },
  dealshero: {
    js: dealsHeroJS
  },
  largedealcard: {
    js: largeDealCardJS
  },
  smalldealcard: {
    js: smallDealCardJS
  },
  inlinedealcard: {
    js: inlineDealCardJS
  }
};
