const express = require('express');
const Arithmetic  = require('./model');
const cors = require('cors');


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
// app.use(exress.urlencoded({extended: true}));
app.use(cors());
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`)});

app.post('/slack', (req, res) => {
const  { operation_type,x,y} = req.body;
if (operation_type === "add") {
    res.send({"slackUsername": "Rexkozy","result": x + y,"operation_type": Enum.valueOf(operation_type)});        
}else if(operation_type === "subtract"){
    res.send({"slackUsername": "Rexkozy","result": x - y,"operation_type": Enum.valueOf(operation_type)});
}  else if(operation_type === "multiply"){
    res.send({"slackUsername": "Rexkozy","result": x * y,"operation_type": Enum.valueOf(operation_type)});
} else if (operation_type === "divided"){
    res.send({"slackUsername": "Rexkozy","result": x / y,"operation_type": Enum.valueOf(operation_type)});

}else{
    res.send({"result": "Invalid operation type"});
};

res.status(200).send({
    message: 'successful.'
});
});



// app.get('/', (req, res) => {
//     res.send({"slackUsername": "Rexkozy", "backend": true, "age": 24, "bio": "FullStack Mobile Developer dedicated to developing robust applications that interact with the Backend part of Mobile applications",});});