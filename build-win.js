var NwBuilder = require('nw-builder');

var nw = new NwBuilder({
  files: ['./package.json', './public/**',"./assets/**"],
  platforms: ['win'],
  macIcns: './assets/app.icns',
  winIco:'./assets/app.ico'
});

nw.build().then(function () {
  console.log('done');
}).catch(function (error) {
  console.error(error);
})