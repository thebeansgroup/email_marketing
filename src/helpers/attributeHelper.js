class AttributeHelper {
  
  sanitise(attribute) {
    // Apostrophe not rendered in some Outlook clients
    // See https://github.com/zurb/foundation-emails/issues/281
    return attribute.replace(/'/g , "’");
  }
  
  getAttribute(element, attributeName) {
    var attribute = element.attr(attributeName);
    return this.sanitise(attribute);
  }
}

module.exports = new AttributeHelper(); 
