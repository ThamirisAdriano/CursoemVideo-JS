function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert("ERRO! Verifique os dados e tente novamente!");
  } else {
    var fSex = document.getElementsByName("radsex");
    var idade = ano - Number(fAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fSex[0].checked) {
      genero = "Homem";
      document.body.style.background = '#515154'
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "foto-bebe-m.png");
      } else if (idade < 21) {
        img.setAttribute("src", "foto-jovem-m.png");
      } else if (idade < 50) {
        img.setAttribute("src", "foto-adulto-m.png");
      } else {
        img.setAttribute("src", "foto-idoso-m.png");
      }
    } else if (fSex[1].checked) {
      genero = "Mulher";
      document.body.style.background = '#e2cd9f'
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "foto-bebe-f.png");
      } else if (idade < 21) {
        img.setAttribute("src", "foto-jovem-f.png");
      } else if (idade >= 21 && idade < 50) {
        img.setAttribute("src", "foto-adulto-f.png");
      } else {
        img.setAttribute("src", "foto-idoso-f.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
