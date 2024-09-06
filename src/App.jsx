// import { useState } from 'react'

// import "./App.css"

// import Lottie from 'react-lottie';
// import animationData from "./assets/animacao.json"
// import animationLayout from "./assets/layout.json"
// import animationSuporte from "./assets/suporte.json"
// import animationFast from "./assets/fast.json"
// import animationGoogle from "./assets/google.json"
// import animationUi from "./assets/ui_ux.json"
// import animationPersonalizacao from "./assets/personalizacao.json"


// function App() {

//   const [like, setLike] = useState(false)

//   //ESTADO DA ANIMAÇÃO

//   const [animationState, setAnimatinoState ] = useState({
//     isStopped: true, isPaused: false,
//   })

//   const [aniStateLayout, setAniStateLayout ] = useState({
//     isStopped: true, isPaused: false,
//   })

//   const [aniStateSuporte, setAniStateSuporte ] = useState({
//     isStopped: true, isPaused: false,


//   })

//   const [aniStateFast, setAniStateFast ] = useState({
//     isStopped: true, isPaused: false
//   })

//   const [aniStateGoogle, setAniStateGoogle ] = useState({
//     isStopped: true, isPaused: false
//   })

//   const [aniStatePersonalizacao, setAniStatePersonalizacao ] = useState({
//     isStopped: true, isPaused: false
//   })

//   const [aniStateUi, SetAniStateUi ] = useState({
//     isStopped: true, isPaused: false
//   })


//   //CONFIGURAÇÕES DEFALT

//   const defaultOptions = {
//     loop: false,
//     autoplay: false, 
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   const layout = {
//     loop: true,
//     autoplay: false, 
//     animationData: animationLayout,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   const suporte = {
//     loop: false,
//     autoplay: false, 
//     animationData: animationSuporte,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   const fast = {
//     loop: false,
//     autoplay: false, 
//     animationData: animationFast,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   const google = {
//     loop: true,
//     autoplay: false, 
//     animationData: animationGoogle,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   const personalizacao = {
//     loop: false,
//     autoplay: false, 
//     animationData: animationPersonalizacao,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   const ui = {
//     loop: false,
//     autoplay: false, 
//     animationData: animationUi,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };
  



//   return (

// <>
//     <h1>Icones Animados</h1>
//     <h2>react-lottie</h2>
//     <h2>https://lottiefiles.com/</h2>
//     <h4>*Passe o mouse por cima dos botões*</h4>


//   <div className='icons'>

//     {/* ICONES */}
//       <div className='responsive'> 
//         <button 
//           onMouseEnter={() => { 
//               setAnimatinoState({
//                 ...animationState,
//                 isStopped: false,
                
//               })
//             setLike(!like)}}

//             onMouseLeave={() => {
//               setAnimatinoState({
//                 ...animationState,
//                 isStopped: true,

//               })
//             }}>Responsividade

//         <Lottie 
//           options={defaultOptions}
//           direction={animationState.direction}

//           // height={400}
//           // width={400}
//           isStopped={animationState.isStopped}
//           isPaused={animationState.isPaused}/>
//         </button>

//         {/* <span>
//           {like ? 1 : 0}
//         </span> */}

//       </div>

//       <div className='responsive layout'> 
//         <button 
//           onMouseEnter={() => { 
//             setAniStateLayout({
//                 ...aniStateLayout,
//                 isStopped: false,
                
//               })

              
//             setLike(!like)}}

//             onMouseLeave={() => {
//               setAniStateLayout({
//                 ...aniStateLayout,
//                 isStopped: true,

//               })
//             }}>layout

//         <Lottie 
//           options={layout}
          
//           // height={400}
//           // width={400}
//           isStopped={aniStateLayout.isStopped}
//           isPaused={aniStateLayout.isPaused} />
//         </button>

//         {/* <span>
//           {like ? 1 : 0}
//         </span> */}

//       </div>

//       <div className='responsive suporte'> 
//         <button 
//           onMouseEnter={() => { 
//             setAniStateSuporte({
//                 ...aniStateSuporte,
//                 isStopped: false,

//               })
//               console.log(animationLayout)
//             setLike(!like)}}

//             onMouseLeave={() => {
//               setAniStateSuporte({
//                 ...aniStateSuporte,
//                 isStopped: true,

//               })
//             }}>Suporte

//         <Lottie 
//           options={suporte}
//           // height={400}
//           // width={400}
//           isStopped={aniStateSuporte.isStopped}
//           isPaused={aniStateSuporte.isPaused}/>
//         </button>

//         {/* <span>
//           {like ? 1 : 0}
//         </span> */}

//       </div>

//       <div className='responsive'> 
//         <button 
//           onMouseEnter={() => { 
//             setAniStateFast({
//                 ...aniStateFast,
//                 isStopped: false,

//               })
//             setLike(!like)}}

//             onMouseLeave={() => {
//               setAniStateFast({
//                 ...aniStateFast,
//                 isStopped: true,
//               })
//             }}>Relampago

//         <Lottie 
//           options={fast}
//           // height={400}
//           // width={400}
//           isStopped={aniStateFast.isStopped}
//           isPaused={aniStateFast.isPaused}/>
//         </button>

//         {/* <span>
//           {like ? 1 : 0}
//         </span> */}

//       </div>

//       <div className='responsive google'> 
//         <button 
//           onMouseEnter={() => { 

//             setAniStateGoogle({
//                 ...aniStateGoogle,
//                 isStopped: false,

//               })

//             setLike(!like)}}

//             onMouseLeave={() => {
//               setAniStateGoogle({
//                 ...aniStateGoogle,
//                 isStopped: true,
//               })

//             }}>Google

//         <Lottie 
//           options={google}
//           direction={1}

//           // height={400}
//           // width={400}
//           isStopped={aniStateGoogle.isStopped}
//           isPaused={aniStateGoogle.isPaused}/>
//         </button>

//         {/* <span>
//           {like ? 1 : 0}
//         </span> */}

//       </div>

//       <div className='responsive personalizacao'> 
//         <button 
//           onMouseEnter={() => { 
//             setAniStatePersonalizacao({
//                 ...aniStatePersonalizacao,
//                 isStopped: false,
//               })
//             setLike(!like)}}

//             onMouseLeave={() => {
//               setAniStatePersonalizacao({
//                 ...aniStatePersonalizacao,
//                 isStopped: true,
//               })
//             }}>personalizacao

//         <Lottie 
//           options={personalizacao}
//           // height={400}
//           // width={400}
//           isStopped={aniStatePersonalizacao.isStopped}
//           isPaused={aniStatePersonalizacao.isPaused}/>
//         </button>

//         {/* <span>
//           {like ? 1 : 0}
//         </span> */}

//       </div>

//       <div className='responsive ui'> 
//         <button 
//           onMouseEnter={() => { 
//             SetAniStateUi({
//                 ...aniStateUi,
//                 isStopped: false,
//               })
//             setLike(!like)}}

//             onMouseLeave={() => {
//               SetAniStateUi({
//                 ...aniStateUi,
//                 isStopped: true,
//               })
//             }}>Ui/Ux

//         <Lottie 
//           options={ui}
//           // height={400}
//           // width={400}
//           isStopped={aniStateUi.isStopped}
//           isPaused={aniStateUi.isPaused}/>
//         </button>

//         {/* <span>
//           {like ? 1 : 0}
//         </span> */}

//       </div>
//     </div>

//     </>
//   )
// }

// export default App



// import { useState } from 'react'

// import "./App.css"

// import Lottie from 'react-lottie';
// import animationSuporte from "./assets/suporte.json"



// function App() {


//   //ESTADO DA ANIMAÇÃO

//   const [animationState, setAnimatinoState ] = useState({
//     isStopped: true, isPaused: false,
//   })

 

//   //CONFIGURAÇÕES DEFALT

//   const defaultOptions = {
//     loop: false,
//     autoplay: false, 
//     animationData: animationSuporte,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice'
//     }
//   };

//   return (

// <>
//   <div className='icons'>

//     {/* ICONES */}
//       <div className='responsive'> 
//         <button 
//           onMouseEnter={() => { 
//               setAnimatinoState({
//                 ...animationState,
//                 isStopped: false,
                
//               })
//         }}

//             onMouseLeave={() => {
//               setAnimatinoState({
//                 ...animationState,
//                 isStopped: true,

//               })
//             }}>Responsividade

//         <Lottie 
//           options={defaultOptions}
//           // height={400}
//           // width={400}
//           isStopped={animationState.isStopped}
//           isPaused={animationState.isPaused}/>
//         </button>
//       </div>
//   </div>
//     </>
//   )
// }

// export default App







import { useEffect, useRef } from 'react';
import './App.css';
import Lottie from 'react-lottie';
import animationSuporte from './assets/suporte.json';

function App() {
  // Referência para o componente Lottie
  const lottieRef = useRef(null);

  // Função para ir para o último frame quando a animação carrega
  useEffect(() => {
    if (lottieRef.current) {
      const animation = lottieRef.current.anim;
      animation.goToAndStop(animation.totalFrames - 1, true); // Vai para o último frame inicialmente
    }
  }, []);

  // Função para reiniciar a animação quando o mouse entrar
  const handleMouseEnter = () => {
    if (lottieRef.current) {
      const animation = lottieRef.current.anim;
      animation.goToAndPlay(0, true); // Reinicia do frame 0
    }
  };

  // Função para parar e definir no último frame quando o mouse sair
  const handleMouseLeave = () => {
    if (lottieRef.current) {
      const animation = lottieRef.current.anim;
      animation.goToAndStop(animation.totalFrames - 1, true); // Vai para o último frame ao sair o mouse
    }
  };

  // Configurações padrão
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationSuporte,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <div className="icons">
        {/* Ícones */}
        <div className="responsive">
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Responsividade
            <Lottie
              ref={lottieRef}
              options={defaultOptions}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;