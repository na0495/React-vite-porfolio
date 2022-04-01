import Hero from '../sections/Hero';
import Particles from '../components/animation/Particles'

// import { useColorMode } from "@chakra-ui/react"

export default function LandingPage() {
  // const { colorMode } = useColorMode();

    return (
        <>
          <Particles>
            <Hero/>
          </Particles>
        </>
    )

}