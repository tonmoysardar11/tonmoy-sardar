import React,{useCallback} from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import object from './particlesjs-config.json'

const ParticleBG = () => {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    

  return (
    <Particles 
    id="tsparticles"
    init={particlesInit}
    // loaded={particlesLoaded}
    options={object}/>
  )
}

export default ParticleBG
