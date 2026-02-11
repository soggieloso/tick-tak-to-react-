import React, { useContext } from 'react'
import {Container,Subtitle, Title} from "../../styles/General.styled"
import Button from '../../Components/Button/Button'
import {useNavigate} from "react-router-dom"
import { SfxContext } from '../../Contexts/SfxContext'


const Home = () => {
  const navigate = useNavigate();
  const {hoverSfx} = useContext(SfxContext);
  return (
    <Container columnBased>
      <Title>TicTactoe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Button 
      onClick={() => {
        navigate("/game-on")
           

      }} onMouseEnter={() => hoverSfx()}>
        Play Now
        </Button>
    </Container>
  )
}

export default Home
