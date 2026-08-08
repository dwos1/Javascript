function verificarNota(nota){
  if(nota>=7){
    return("Aluno passou")
  }else if(nota>=5){
    return("Aluno de recuperação")
  }else{
    return("Aluno reprovou")
  }
}

const resultado = verificarNota(10);

console.log(resultado)

