const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const cheerio = require('cheerio');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/parse', (req, res) => {
  let endpoint = req.query.endpoint;
  const firstThree = endpoint.slice(0,3);
  // add the hppts part in front of endpoint if they only put www.
  if(firstThree === 'www') {
    endpoint = 'https://' + endpoint;
  }
  const tag = req.query.tag;
  let results = [];

  request(endpoint, (err, response, html) => { // make a request to the enpoint
    if(err){
      res.send(err); // send back the errors if any
    } else {
      const $ = cheerio.load(html);
      let filtered = $(tag).each(function(i, elem){ // select all elements with the searched tag and add the text and html to our results
        results[i] = {
          innerText: $(this).text(),
          innerHtml: $(this).html(),
        }
      })
      res.send(results); // send back the results
    }
  })
});

app.get('/contains', (req, res) => {
  let endpoint = req.query.endpoint;
  const firstThree = endpoint.slice(0,3);
  if(firstThree === 'www') {   // add the hppts part in front of endpoint if they only put www.
    endpoint = 'https://' + endpoint;
  }
  const tag = req.query.tag
  const text = req.query.text;
  request(endpoint, (err, response, html) => { // make a request to the endpoint
    if(err) {
      res.send(err); // send backl errors if any
    } else {
      let results = {
        exists: false,
      }
      const $ = cheerio.load(html);
      let matches = $(tag).each(function(i, elem){ // check to see if any elements with the searched for tag has the search for text
        if($(elem).text().indexOf(text) !== -1) {
          results.exists = true; // set exists to true if it is
        }
      })
      res.send(results); // send back the results 
    }
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});