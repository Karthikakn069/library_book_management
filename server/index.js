const express =  require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const db = mysql.createPool({
  host: 'localhost',
  user :'root' , 
  password : 'asnk2004' , 
  database : 'librarybook',
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


app.listen(3002,()=>{
  
})
app.get('/get_books' , (req,res) => {
  const sqlQuery = "SELECT * FROM librarybook.books;";
  db.query(sqlQuery , (error,result)=>{
    if(error){
      res.send(error);
    }
    else{
      res.send(result);
    }
  })

})