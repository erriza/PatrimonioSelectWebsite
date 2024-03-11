// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import './App.css'
import { motion } from "framer-motion";
import { ImagesSlider } from './components/ui/images-slider'
import Navigationbar from './components/navigationBar';
import { HoverEffect } from './components/ui/card-hover-effect';
import { TfiWrite } from "react-icons/tfi";
import { MdContentPasteSearch } from "react-icons/md";
import { SiHomeadvisor } from "react-icons/si";
import { FaFileSignature } from "react-icons/fa";
import YoutubeEmbed from './components/youtubeEmbed';
import FormComponent from './components/form';
import WhatsappButton from './components/whatsappButton';
// import {
//   TextRevealCard,
//   TextRevealCardDescription,
//   TextRevealCardTitle,
// } from "./components/ui/text-reveal-card";


function App() {


  const videoId : string = '5WpbmSfVbEs';
  const images = [
    "/public/assets/main.jpg",
    "/public/src/assets/second.jpg",
    "/public/src/assets/third.jpg",
    "/public/src/assets/fourth.jpg",
  ];

  const projects : {
    title: string;
    description: string;
    link: string;
  }[] = [
    {
      title: "Llenado",
      description:
        "Llena el formulario.",
      icon: <TfiWrite/>
    },
    {
      title: "Analisis",
      description:
        "Recibe el analisis de tus operaciones",
      icon: <MdContentPasteSearch/>
    },
    {
      title: "Seguimiento",
      description:
        "Te asesoramos personalmente.",
      icon: <SiHomeadvisor/>
    },
    {
      title: "Firma",
      description:
        "Integracion de tu expediente. Autorizacion y firma.",
      icon: <FaFileSignature/>
    },
  ];
  

  return (
    <>
    <WhatsappButton/>
      <Navigationbar></Navigationbar>
      <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Disfruta el proceso <br /> de lograr tu sueño
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-amber-500/20 border-amber-500/30 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Empieza ahora →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-amber-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>

    <div className="max-w-2xl mx-auto px-2 md:max-xl:flex sm:max-width100% m-4 py-5">
      <HoverEffect items={projects} />
    </div>

    <div className='text-black text-center'>
      Aclara tus dudas viendo mis videos ...
    </div>
    <div className='md:flex md:justify-center md:items-center sm:flex'>
      <YoutubeEmbed videoId={videoId} />
    </div>

    <FormComponent></FormComponent>
    </>
  )
}

export default App
