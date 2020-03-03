module.exports = function getPages() {
  let pages = [
    { name: 'notfound', display: 'Sorry, page not found'},
    { name: 'filmtitle', display: 'This is the film...'}
  ]
  return pages;
};

/*In order to export more than one function or data type, you can export all as
objects e.g.
function {
day: 23,
getFruits: function(){
  etc
}
}

If I were to call the function in the app.js, I would treat it like an object =
res.sent(x.getFruits());

If I wanted to import multiple object in app.js, I would use object destructuring
e.g. const { day, getFruits } = require(./...);
*/
