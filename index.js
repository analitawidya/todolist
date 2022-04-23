// ToDo Data Model
// id (unique) : integer
// text : string
// done : boolean



var express = require ('express')
var app = express ()

app.use(express.json())
// {
//     1: {
//     text: " ",
//     done : true
// }
// 2: {}
// }
var data = {}  //karena tidak ada database

app.get('/api/todos', function(req,res){
    res.send(data)

})

app.post('/api/todos', function(req, res){
    const text = req.body.text
    if (text == " "){
        res.status(400).send("text is empty") //jika text tidak diisi
        return
    }
    const id = Math.floor ((Math.random()+100) + 1) //generate random number 1 s/d 100


    data [id] = {
        text : text,
        done : false

    }
    res.send("todo added ")

})

app.put('/api/todos/:id', function(req, res){
    const id = req.params.id;
    if (id in data) {
        if (req.body.text == undefined || req.body.text == " ") {
            data[id].done = req.body.done
                
        }
        const text = req.body.text
        const done = req.body.done

        data[id] = {
            text : text,
            done : done
        }
        res.send("data updated")
        return
    }
    res.status(400).send("Eror : No data id")


})

app.delete('/api/todos/:id', function(req,res){
    const id = req.params.id    //untuk mengambil ID
    if (id in data) {

    delete data [id]
    res.send('data deleted')
} else {
    res.status(400).send("eror data id")
}


})

app.listen(5000, () => {
    console.log("server running");
})

Authorization: basic dXNlciBwYXNzd29yZA==