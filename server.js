const express =  require("express")

const app = express()
app.use('/',express.static('static'))
app.get('/hello', function(request,response){
    console.log(request)
    
    let name=request.query.name;
    let email=request.query.email;
    
    //scriu ce va raspunde
    response.status(200).send('Hello '+name +' '+email)
})

let messages=[
    {
        subject:"Message",
        messages:"Hello again"
    },
    {       
        subject:"Message 2",
        messages:"Hello world"
        
    }
    ]

app.get('/messages',(request,response)=>{
    //e acelasi lucru culiniait 5
    if(request.query.search!=undefined){
        let filteredMessages =[];
        for(var i=0; i<messages.length; i++){
          let str = messages[i].messages.includes(request.query.search)//daca gasesc msj resprectiv vreau sa il pun in lista asta filteredMessages
          if(str) {
               filteredMessages.push(messages[i])
           }
        }
         response.status(200).json(filteredMessages); 
    }else{
       
    response.status(200).json(messages); 
    }})
app.get('/messages/:id',(request, response)=>{
    response.status(200).send('Not implemented')
})
app.post('/messages',(request, response)=>{
    response.status(200).send('Not implemented')
})
app.put('/messages/:id',(request, response)=>{
    response.status(200).send('Not implemented')
})
app.delete('/messages/:id',(request, response)=>{
    response.status(200).send('Not implemented')
})

app.listen(8080)
