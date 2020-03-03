module.exports = function getPages(name) {
  let pages = [
    { name: 'notfound', display: 'Sorry, page not found'},
    { name: 'filmtitle', display: 'This is the film...'}
  ]

  if(name) { //name = truthy = string, so must make
    let page = pages.find(page => page.name === name);
    return page ?
        page :
        `Sorry, the page ${name} cannot be found`
  } else {
    return pages;
  }
};
//PLEASE NOTE : you should only use res.send on the routing level.

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
