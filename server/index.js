import { createServer } from  "node:http"

const servidor = createServer((request, resposta) =>{

  
    console.log("qualquer coisa")
    resposta.write('ta funfando3')
    return resposta.end(

    )
})

servidor.listen(8000)