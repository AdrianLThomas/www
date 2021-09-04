import * as React from "react"

import { Link } from "gatsby"
import styled from "styled-components"

import { fullWindowWidth } from "../commonStyles"
import Bio from "../components/bio"

const Container = styled.div`
  ${fullWindowWidth()}
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5rem solid dodgerblue;
`

const Hero = () => {
  return (
    <Container>
      <Link to="/">
        <h1>Adrian L Thomas</h1>
      </Link>
      <Bio />
    </Container>
  )
}

export default Hero
