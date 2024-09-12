
import { useEffect, useRef } from 'react';
import './App.css';
import Lottie from 'react-lottie';
import animationSuporte from './assets/suporte.json';
import animationLayout from "./assets/layout.json"
import animationFast from "./assets/fast.json"
import animationGoogle from "./assets/google.json"
import animationUi from "./assets/ui_ux.json"
import animationPersonalizacao from "./assets/personalizacao.json"


function App() {
  // Referência para o componente Lottie
  const lottieRef = useRef(null);
  const suporteRef = useRef(null);
  const fastRef = useRef(null);
  const googleRef = useRef(null);
  const personalizacaoRef = useRef(null)
  const uixRef = useRef(null)


  // Função para ir para o último frame quando a animação carrega
  useEffect(() => {
    if (lottieRef.current) {
      const animation = lottieRef.current.anim;
      animation.goToAndStop(2000); // Vai para o último frame inicialmente

      const animationSuporte = suporteRef.current.anim;
      animationSuporte.goToAndStop(2000); // Vai para o último frame inicialmente

      const animationFast = fastRef.current.anim;
      animationFast.goToAndStop(2000); // Vai para o último frame inicialmente

      const animationGoogle = googleRef.current.anim;
      animationGoogle.goToAndStop(3000); // Vai para o último frame inicialmente

      const animationPersonalizacao = personalizacaoRef.current.anim;
      animationPersonalizacao.goToAndStop(2000); // Vai para o último frame inicialmente

      const animationUix = uixRef.current.anim;
      animationUix.goToAndStop(2000); // Vai para o último frame inicialmente
    }
  }, []);


  // Configurações padrão
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationSuporte,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const layout = {
    loop: true,
    autoplay: false, 
    animationData: animationLayout,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const fast = {
    loop: true,
    autoplay: false, 
    animationData: animationFast,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const google = {
    loop: true,
    autoplay: false, 
    animationData: animationGoogle,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const personalizacao = {
    loop: true,
    autoplay: false, 
    animationData: animationPersonalizacao,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const ui = {
    loop: true,
    autoplay: false, 
    animationData: animationUi,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <div className="icons">
        {/* Ícones */}
        <div className="suporte">
          <button
            onMouseEnter={() => {
              if (suporteRef.current) {
                const animationSuporte = suporteRef.current.anim;
                animationSuporte.goToAndPlay(0, true); // Reinicia do frame 0
              }
            }}

            onMouseLeave={() => {
              if (suporteRef.current) {
                const animationSuporte = suporteRef.current.anim;
                animationSuporte.goToAndStop(2000); // Vai para o último frame ao sair o mouse
              }
            }}
          >
            Suporte
            <Lottie
              ref={suporteRef}
              options={defaultOptions}
            />
          </button>
          
        </div>

        <div className="layout">
          <button
            onMouseEnter={() => {
              if (lottieRef.current) {
                const animation = lottieRef.current.anim;
                animation.goToAndPlay(0, true); // Reinicia do frame 0
              }
            }}

            onMouseLeave={() => {
              if (lottieRef.current) {
                const animation = lottieRef.current.anim;
                animation.goToAndStop(2000); // Vai para o último frame ao sair o mouse
              }
            }}
        >
            Layout
            <Lottie
              ref={lottieRef}
              options={layout}
            />
          </button>
        </div>

        
        {/* --------------------------------------------- */}
        {/* icone relampago */}
        <div className="fast">
          <button
            onMouseEnter={() => {
              if (fastRef.current) {
                const animationFast = fastRef.current.anim;
                animationFast.goToAndPlay(0, true); // Reinicia do frame 0
              }
            }}

            onMouseLeave={() => {
              if (fastRef.current) {
                const animaFast = fastRef.current.anim;
                animaFast.goToAndStop(2000); // Vai para o último frame ao sair o mouse
              }
            }}
        >
            Fast
            <Lottie
              ref={fastRef}
              options={fast}
            />
          </button>
        </div>
        
        {/* --------------------------------------------- */}
        {/* Icone Google */}
        <div className="google">
          <button
            onMouseEnter={() => {
              if (googleRef.current) {
                const animationGoogle = googleRef.current.anim;
                animationGoogle.goToAndPlay(0, true); // Reinicia do frame 0
              }
            }}

            onMouseLeave={() => {
              if (googleRef.current) {
                const animationGoogle = googleRef.current.anim;
                animationGoogle.goToAndStop(3000); // Vai para o último frame ao sair o mouse
              }
            }}
        >
            Fast
            <Lottie
              ref={googleRef}
              options={google}
            />
          </button>
        </div>
            
       {/* --------------------------------------------- */}
        {/* Icone Personalização */}
        <div className="personalizacao">
          <button
            onMouseEnter={() => {
              if (personalizacaoRef.current) {
                const animationPersonalizacao = personalizacaoRef.current.anim;
                animationPersonalizacao.goToAndPlay(0, true); // Reinicia do frame 0
              }
            }}

            onMouseLeave={() => {
              if (personalizacaoRef.current) {
                const animationPersonalizacao = personalizacaoRef.current.anim;
                animationPersonalizacao.goToAndStop(2000); // Vai para o último frame ao sair o mouse
              }
            }}
        >
            Personalização
            <Lottie
              ref={personalizacaoRef}
              options={personalizacao}
            />
          </button>
        </div>

       {/* --------------------------------------------- */}
        {/* Icone UI/UX */}
        <div className="UIX">
          <button
            onMouseEnter={() => {
              if (uixRef.current) {
                const animationUix = uixRef.current.anim;
                animationUix.goToAndPlay(0, true); // Reinicia do frame 0
              }
            }}

            onMouseLeave={() => {
              if (uixRef.current) {
                const animationUix = uixRef.current.anim;
                animationUix.goToAndStop(2000); // Vai para o último frame ao sair o mouse
              }
            }}
        >
            Personalização
            <Lottie
              ref={uixRef}
              options={ui}
            />
          </button>
        </div>



      </div>

    </>
  );
}

export default App;