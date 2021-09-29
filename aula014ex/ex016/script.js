function contar() {
  var i = document.getElementById("txti");
  var f = document.getElementById("txtf");
  var p = document.getElementById("txtp");
  var res = document.getElementById("res");

  if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
    window.alert("Erro, faltam dados!");
    
  } else {
    res.innerHTML = "Contando: <br>";
    var i = Number(i.value);
    var f = Number(f.value);
    var p = Number(p.value);
    if (p<=0){
        window.alert('Passo inválido! Considerando PASSO 1.')
        p = 1
    }
    if (i < f) {
      for (var c = 1; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
        
    } else {
        for (var c = i; c>= f; c-=p){
            res.innerHTML += `${c} \u{1F449}`
        }
    } 
    res.innerHTML += `\u{1F3C1}`;  
}  

}
