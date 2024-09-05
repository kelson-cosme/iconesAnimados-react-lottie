import { useState } from 'react'

import "./app.css"

import Lottie from 'react-lottie';
import animationData from "./assets/animacao.json"
import animationLayout from "./assets/layout.json"
import animationSuporte from "./assets/suporte.json"
import animationFast from "./assets/fast.json"

function App() {

  const [like, setLike] = useState(false)


  //ESTADO DA ANIMAÇÃO

  const [animationState, setAnimatinoState ] = useState({
    isStopped: true, isPaused: false
  })

  const [aniStateLayout, setAniStateLayout ] = useState({
    isStopped: true, isPaused: false
  })

  const [aniStateSuporte, setAniStateSuporte ] = useState({
    isStopped: true, isPaused: false
  })

  const [aniStateFast, setAniStateFast ] = useState({
    isStopped: true, isPaused: false
  })



  //CONFIGURAÇÕES DEFALT

  const defaultOptions = {
    loop: true,
    autoplay: false, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const layout = {
    loop: true,
    autoplay: false, 
    animationData: animationLayout,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const suporte = {
    loop: true,
    autoplay: false, 
    animationData: animationSuporte,
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



  return (

<>
    <h1>Icones Animados</h1>
    <h2>react-lottie</h2>
    <h2>https://lottiefiles.com/</h2>
    <h4>*Passe o mouse por cima dos botões*</h4>


  <div className='icons'>

    {/* ICONES */}
      <div className='responsive'> 
        <button 
          onMouseEnter={() => { 
              setAnimatinoState({
                ...animationState,
                isStopped: false,
              })
            setLike(!like)}}

            onMouseLeave={() => {
              setAnimatinoState({
                ...animationState,
                isStopped: true,
              })
            }}>Responsividade

        <Lottie 
          options={defaultOptions}
          // height={400}
          // width={400}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}/>
        </button>

        {/* <span>
          {like ? 1 : 0}
        </span> */}

      </div>

      <div className='responsive'> 
        <button 
          onMouseEnter={() => { 
            setAniStateLayout({
                ...aniStateLayout,
                isStopped: false,
              })
            setLike(!like)}}

            onMouseLeave={() => {
              setAniStateLayout({
                ...aniStateLayout,
                isStopped: true,
              })
            }}>layout

        <Lottie 
          options={layout}
          // height={400}
          // width={400}
          isStopped={aniStateLayout.isStopped}
          isPaused={aniStateLayout.isPaused}/>
        </button>

        {/* <span>
          {like ? 1 : 0}
        </span> */}

      </div>

      <div className='responsive'> 
        <button 
          onMouseEnter={() => { 
            setAniStateSuporte({
                ...aniStateSuporte,
                isStopped: false,
              })
            setLike(!like)}}

            onMouseLeave={() => {
              setAniStateSuporte({
                ...aniStateSuporte,
                isStopped: true,
              })
            }}>Suporte

        <Lottie 
          options={suporte}
          // height={400}
          // width={400}
          isStopped={aniStateSuporte.isStopped}
          isPaused={aniStateSuporte.isPaused}/>
        </button>

        {/* <span>
          {like ? 1 : 0}
        </span> */}

      </div>

      <div className='responsive'> 
        <button 
          onMouseEnter={() => { 
            setAniStateFast({
                ...aniStateFast,
                isStopped: false,
              })
            setLike(!like)}}

            onMouseLeave={() => {
              setAniStateFast({
                ...aniStateFast,
                isStopped: true,
              })
            }}>Relampago

        <Lottie 
          options={fast}
          // height={400}
          // width={400}
          isStopped={aniStateFast.isStopped}
          isPaused={aniStateFast.isPaused}/>
        </button>

        {/* <span>
          {like ? 1 : 0}
        </span> */}

      </div>
    </div>

    </>
  )
}

export default App
