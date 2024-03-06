const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user : "root" ,
    password : "",
    database : "agri"
})

app.get('/', (req , res)=>
{
    const sql = "SELECT * FROM farm";
    db.query(sql , (err , data) => {
        if(err) return res.json(err);
        return res.json(data);
        
    })
})



app.post('/create' , (req , res) => {
    const sql = "INSERT INTO farm (`name`, `category` ,`product`, `price`) VALUES (?) ";
    const values = [
        req.body.name,
        req.body.category,
        req.body.product,
        req.body.price,
        ]
        db.query(sql , [values] , (err , data) =>{
            if(err) return res.json(err);
            return res.json("created") ;
            
        } )
})




app.put('/update/:id' , (req , res) => {
    const sql = "UPDATE farm set `name` = ? , `category` = ? , `product` = ? , `price` = ?  WHERE id = ? ";
    const id=req.params.id;
    const values = [
        req.body.name,
        req.body.category,
        req.body.product,
        req.body.price,
        ]
        db.query(sql , [...values , id] , (err , data) =>{
            if(err) return res.json(err);
            return res.json("updated") ;
            
        } )
})




app.delete('/delete/:id' , (req , res) => {
    const sql = "DELETE FROM farm WHERE id = ?";
    const id=req.params.id;
   
        db.query(sql , [id] , (err , data) =>{
            if(err) return res.json(err);
            return res.json("deleted") ;
            
        } )
})





app.listen(8081, ()=> {
    console.log("Listening...")
});

