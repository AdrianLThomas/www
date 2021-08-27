import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Bio from "../components/bio"

const fullWindowWidth = `
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const Container = styled.div`
    ${fullWindowWidth}
    background-color: violet;
    height: 200px;
` 

const Hero = () => {
  return (
    <Container>
        <Link to="/">Adrian L Thomas</Link>
        <Bio />
    </Container>
  )
}

export default Hero
