

// function FrasesdeSantosMeditar() {
//   let caracterPergunta = inputPergunta.value;
//   if (inputPergunta.value == "" || caracterPergunta.length < 7) {
//     alert("Digite sua pergunta.");
//     location.reload();
//     return;
//   }

//   buttonPerguntar.setAttribute("disabled", true);

//   const pergunta = "<div>" + inputPergunta.value + "</div>";

//   // gerar numero aletorio
//   const totalRespostas = respostas.length;
//   const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

//   //   console.log(respostas[numeroAleatorio]);
//   elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];
//   elementoResposta.style.opacity = 1;

//   //sumir respostas após 3 segundos
//   setTimeout(function () {
//     elementoResposta.style.opacity = 0;
//     buttonPerguntar.removeAttribute("disabled");
//   }, 3000);
//   setTimeout(function () {
//     location.reload(1);
//   }, 4000);


// }

export function FrasesDeSantos() {
  return (
    <div className="w-100 h-80 p-4 m-4 flex flex-col justify-center items-center ">
      <img
        src="#"
        alt="Frases de Santos"
      />
      <h1 className="text-3xl p-4 flex ">Frases de Santos!</h1>
      <p>Tenha um momento de inspiração lendo as frases mais marcantes dos santos da Igreja Católica!</p>
      
      <button className="bg-blue-400 rounded-sm" id="buttonPerguntar" >
        Clique aqui!
      </button>

      <h3 id="resposta"></h3>
    </div>
  )
}