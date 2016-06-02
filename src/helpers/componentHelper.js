class ComponentHelper {  
  getElementClasses(element) {
    var classes = [];
    if (element.attr('class')) {
      classes = classes.concat(element.attr('class').split(' '));
    }
    return classes.join(' ');
  }
}

module.exports = new ComponentHelper(); 
