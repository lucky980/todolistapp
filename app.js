const express = require('express');
const app = express();
const bodyParser= require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://luckyalex70:9889045199@cluster0.jaywl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
   // app.get('/',(req,res) => { res.sendFile('/Users/lucky/todoapp'+'/index.html')})
   /*app.get('/', (req, res) => {
    db.collection('quotes').find().toArray()
      .then(results => {
        console.log(results)
      })
      .catch(error => console.error(error))
    // ...
  })*/
  app.get('/', (req, res) => {
    db.collection('quotes').find().toArray()
      .then(results => {
        res.render('index.ejs', { quotes: results })
      })
      .catch(error => console.error(error))
  })
  app.put('/quotes', (req, res) => {
    console.log(req.body)
  })
    console.log('Connected to Database')
    const db = client.db('todolist')
    const quotesCollection = db.collection('quotes')
    
    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })
    
    

  }
    
    
 )

app.listen(3000, function() {
  console.log('listening on 3000')
})
