var array = function() {
  var args = Array.prototype.slice.call(arguments);
  
  return args;
}


if (module && module.exports) {
  module.exports = array;
}
