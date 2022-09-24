// const a = document.getElementById("root");

// //obs para os proximos codigos: Precisa-se fazer duas funções diferentes para que esse codigo funcione.
// //... uma contendo a div sem replies e a outra com replies;;;

// function Card() {
//   const [name , setComentarios] = React.useState();
//   const [createdAt , setCreatedAt] = React.useState();
//   const [score , setScore] = React.useState();
//   const [comentario , setComentario] = React.useState();
//   const [imagem , setImagem] = React.useState();
//   React.useEffect(() => {
//     fetch("./data.json")
//       .then(res => res.json())
//       .then(data => {
//         let comments = data.comments[x]
//         setComentarios(comments.user.username);
//         setCreatedAt(comments.createdAt);
//         setComentario(comments.content);
//         setScore(comments.score);
//         setImagem(comments.user.image.png);
//       });
//   }
//   , []);
//   let x = 1;

//   return(
//     <div className="card">
//       <div className="sone">
//         <button type="button">
//           +
//         </button>
//         <span>{score}</span>
//         <button type="button">
//           -
//         </button>
//       </div>
//     <div className="stwo">
//       <div className="stwoi">
//         <div className="stwoii">
//           <img src={imagem} alt="" width="40em" />
//           <span Style="margin: 0em 1em 0em 1em;">{name}</span>
//           <span Style="margin: 0em 1em 0em 1em; width: 15vh;">{createdAt}</span>
//         </div>
//         <button Style="width: 10vh;">
//           <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
//             Reply
//           </button>
//         </div>
//         <div className="sectionText">
//           <p>{comentario}</p>
//         </div>
//       </div>
//     </div>
//   )

// }

// function cardWithReplies(){

// }


// ReactDOM.render( <Card /> , a);