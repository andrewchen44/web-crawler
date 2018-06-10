const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const cheerio = require('cheerio');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/tag', (req, res) => {
  const url = req.query.url;
  const tag = req.query.tag;
  let results = [];

  request(url, (err, response, html) => {
    if(!err) {
      const $ = cheerio.load(html);
      let filtered = $(tag).each(function(i, elem){
        results[i] = {
          innerText: $(this).text(),
          innerHtml: $(this).html(),
        }
      })
 
    }
  })


});

app.get('/text', (req, res) => {
  const url = req.query.url;
  const tag = req.query.tag;

  request('https://cobalt.io/', (err, response, html) => {
    if(!err) {
      const $ = cheerio.load(html);
      let page = $('html').html();
      console.log(page.indexOf('Pen Testing as a Service') !== -1)
      // return console log
    }
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});



// [ { type: 'tag',
//     name: 'h1',
//     namespace: 'http://www.w3.org/1999/xhtml',
//     attribs:
//      { class: 'blue text-center text-left-sm hidden-xs hidden-sm hidden-md' },
//     'x-attribsNamespace': { class: undefined },
//     'x-attribsPrefix': { class: undefined },
//     children: [ [Object], [Object], [Object], [Object] ],
//     parent:
//      { type: 'tag',
//        name: 'div',
//        namespace: 'http://www.w3.org/1999/xhtml',
//        attribs: [Object],
//        'x-attribsNamespace': [Object],
//        'x-attribsPrefix': [Object],
//        children: [Array],
//        parent: [Object],
//        prev: [Object],
//        next: null },
//     prev: null,
//     next:
//      { type: 'tag',
//        name: 'h1',
//        namespace: 'http://www.w3.org/1999/xhtml',
//        attribs: [Object],
//        'x-attribsNamespace': [Object],
//        'x-attribsPrefix': [Object],
//        children: [Array],
//        parent: [Object],
//        prev: [Circular],
//        next: [Object] } },
//   { type: 'tag',
//     name: 'h1',
//     namespace: 'http://www.w3.org/1999/xhtml',
//     attribs:
//      { class: 'blue text-center text-left-sm visible-md visible-sm' },
//     'x-attribsNamespace': { class: undefined },
//     'x-attribsPrefix': { class: undefined },
//     children: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
//     parent:
//      { type: 'tag',
//        name: 'div',
//        namespace: 'http://www.w3.org/1999/xhtml',
//        attribs: [Object],
//        'x-attribsNamespace': [Object],
//        'x-attribsPrefix': [Object],
//        children: [Array],
//        parent: [Object],
//        prev: [Object],
//        next: null },
//     prev:
//      { type: 'tag',
//        name: 'h1',
//        namespace: 'http://www.w3.org/1999/xhtml',
//        attribs: [Object],
//        'x-attribsNamespace': [Object],
//        'x-attribsPrefix': [Object],
//        children: [Array],
//        parent: [Object],
//        prev: null,
//        next: [Circular] },
//     next:
//      { type: 'tag',
//        name: 'h1',
//        namespace: 'http://www.w3.org/1999/xhtml',
//        attribs: [Object],
//        'x-attribsNamespace': [Object],
//        'x-attribsPrefix': [Object],
//        children: [Array],
//        parent: [Object],
//        prev: [Circular],
//        next: [Object] } },
//   { type: 'tag',
//     name: 'h1',
//     namespace: 'http://www.w3.org/1999/xhtml',
//     attribs:
//      { class: 'blue text-center text-left-sm visible-xs mobile-header v-6-md-b' },
//     'x-attribsNamespace': { class: undefined },
//     'x-attribsPrefix': { class: undefined },
//     children: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
//     parent:
//      { type: 'tag',
//        name: 'div',
//        namespace: 'http://www.w3.org/1999/xhtml',
//        attribs: [Object],
//        'x-attribsNamespace': [Object],
//        'x-attribsPrefix': [Object],
//        children: [Array],
//        parent: [Object],
//        prev: [Object],
//        next: null },
//     prev:
//      { type: 'tag',
//        name: 'h1',
//        namespace: 'http://www.w3.org/1999/xhtml',
//        attribs: [Object],
//        'x-attribsNamespace': [Object],
//        'x-attribsPrefix': [Object],
//        children: [Array],
//        parent: [Object],
//        prev: [Object],
//        next: [Circular] },
//     next:
//      { type: 'tag',
//        name: 'div',
//        namespace: 'http://www.w3.org/1999/xhtml',
//        attribs: [Object],
//        'x-attribsNamespace': [Object],
//        'x-attribsPrefix': [Object],
//        children: [Array],
//        parent: [Object],
//        prev: [Circular],
//        next: [Object] } },
//   { type: 'tag',
//     name: 'h1',
//     namespace: 'http://www.w3.org/1999/xhtml',
//     attribs: { class: 'purple v-4-sm-t v-2-sm-b v-2' },
//     'x-attribsNamespace': { class: undefined },
//     'x-attribsPrefix': { class: undefined },
//     children: [ [Object] ],
//     parent:
//      { type: 'tag',
//        name: 'div',
//        namespace: 'http://www.w3.org/1999/xhtml',
//        attribs: [Object],
//        'x-attribsNamespace': [Object],
//        'x-attribsPrefix': [Object],
//        children: [Array],
//        parent: [Object],
//        prev: null,
//        next: [Object] },
//     prev:
//      { type: 'tag',
//        name: 'img',
//        namespace: 'http://www.w3.org/1999/xhtml',
//        attribs: [Object],
//        'x-attribsNamespace': [Object],
//        'x-attribsPrefix': [Object],
//        children: [],
//        parent: [Object],
//        prev: null,
//        next: [Circular] },
//     next:
//      { type: 'tag',
//        name: 'hr',
//        namespace: 'http://www.w3.org/1999/xhtml',
//        attribs: [Object],
//        'x-attribsNamespace': [Object],
//        'x-attribsPrefix': [Object],
//        children: [],
//        parent: [Object],
//        prev: [Circular],
//        next: [Object] } },
//   { type: 'tag',
//     name: 'h1',
//     namespace: 'http://www.w3.org/1999/xhtml',
//     attribs: { class: 'purple v-4-sm-t v-2-sm-b v-2' },
//     'x-attribsNamespace': { class: undefined },
//     'x-attribsPrefix': { class: undefined },
//     children: [ [Object] ],
//     parent:
//      { type: 'tag',
//        name: 'div',
//        namespace: 'http://www.w3.org/1999/xhtml',
//        attribs: [Object],
//        'x-attribsNamespace': [Object],
//        'x-attribsPrefix': [Object],
//        children: [Array],
//        parent: [Object],
//        prev: [Object],
//        next: null },
//     prev:
//      { type: 'tag',
//        name: 'img',
//        namespace: 'http://www.w3.org/1999/xhtml',
//        attribs: [Object],
//        'x-attribsNamespace': [Object],
//        'x-attribsPrefix': [Object],
//        children: [],
//        parent: [Object],
//        prev: null,
//        next: [Circular] },
//     next:
//      { type: 'tag',
//        name: 'hr',
//        namespace: 'http://www.w3.org/1999/xhtml',
//        attribs: [Object],
//        'x-attribsNamespace': [Object],
//        'x-attribsPrefix': [Object],
//        children: [],
//        parent: [Object],
//        prev: [Circular],
//        next: [Object] } } ]