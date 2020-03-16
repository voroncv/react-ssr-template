import React, { Component } from 'react'

// Styles
import {
  Wrapper,
  Title,
} from './styles'
import { Container } from '../../assets/styles/global'

// Components
import Navbar from '../../components/Navbar'

class TestPage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Wrapper>
        <Navbar />
        <Container>
          <Title>
            Test page
          </Title>
        </Container>
      </Wrapper>
    )
  }
}

export default TestPage
