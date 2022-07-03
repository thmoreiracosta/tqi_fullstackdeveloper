

// function FrasesdeSantosMeditar() {
//   let caracterPergunta = inputPergunta.value;
//   if (inputPergunta.value == "" || caracterPergunta.length < 7) {
//     alert("Digite sua pergunta.");
//     location.reload();
//     return;
//   }

import { FormEvent, useEffect, useState } from "react";


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


// // }

const GET_QUERY_BY_SANTOS = 'https://api-sa-east-1.graphcms.com/v2/cl519v1ly1hod01uid4u58fq2/master';

// gql`
// // query {
// //   frases(orderBy: publishedAt_ASC, locales: en) {
// //     id
// //     title
// //     description
// //     imageSanto {
// //       slug
// //       url
// //     }
// //   }
// // }
// // `

interface GetFrasesQueryResponse {
  frases?: {
    id: string;
    title: string;
    description: string;
    imageSanto?: {
      slug: string;
      url: string;
    }
  }
}


export function FrasesDeSantos(props: GetFrasesQueryResponse) {

  const [userData, setUserData] = useState<GetFrasesQueryResponse>(props);


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    fetch(`${GET_QUERY_BY_SANTOS}`)
    .then(response => response.json())
    .then(userResponse => setUserData(userResponse))
  }


  


  return (
    <div className="w-100 h-80 p-4 m-4 flex flex-col justify-center items-center ">

      <img
        className="rounded-full mt-16 w-56 h-96 flex justify-center items-center"
        src={props?.frases.imageSanto.url}
        alt=""
      />

      <h1 className="text-3xl p-4 flex ">Frases de Santos!</h1>
      <p>Tenha um momento de inspiração lendo as frases mais marcantes dos santos da Igreja Católica!</p>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis explicabo sapiente iure,
        id nesciunt consectetur a assumenda labore quisquam.
        A nesciunt atque, animi necessitatibus doloribus eius unde corporis. Inventore, perferendis.
      </span>
      <form 
      onSubmit={handleSubmit}
      action="
      ">
        <button
          className="bg-blue-400 rounded-sm p-2 w-[150px] mt-4"
          id="buttonPerguntar"
        >
          Clique aqui!
        </button>

      </form>

      <h3 id="resposta"></h3>
    </div>
  )
}