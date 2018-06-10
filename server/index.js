const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const cheerio = require('cheerio');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/tag', (req, res) => {
  let url = req.query.url;
  const firstThree = url.slice(0,3);
  if(firstThree === 'www') {
    url = 'https://' + url;
  }
  const tag = req.query.tag;
  let results = [];

  request(url, (err, response, html) => {
    if(err){
      res.send(err);
    } else {
      const $ = cheerio.load(html);
      let filtered = $(tag).each(function(i, elem){
        results[i] = {
          innerText: $(this).text(),
          innerHtml: $(this).html(),
        }
      })
      res.send(results);
    }
  })
});

app.get('/text', (req, res) => {
  let url = req.query.url;
  const firstThree = url.slice(0,3);
  if(firstThree === 'www') {
    url = 'https://' + url;
  }
  const text = req.query.text;
  request(url, (err, response, html) => {
    if(err) {
      res.send(err);
    } else {
      const $ = cheerio.load(html);
      let page = $('html').html();
      let results = {
        exists: page.indexOf(text) !== -1,
      }
      res.send(results)
    }
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});