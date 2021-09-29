import React from "react";
import { View, Text } from 'react-native'
import { Container, SearchContainer, SearchButton, Input } from './styles'
import Header from '../../components/header'
import {Feather} from '@expo/vector-icons'

function Home() {
    return (
        <Container>
            <Header title='Cesane Video' />

            <SearchContainer>
                <Input placeholder='Ex: Edward mãos de tesoura'
                />
                <SearchButton>
                    <Feather name='search' size={30} color='#FFF' />
                </SearchButton>
            </SearchContainer>

            
        </Container>
    )
}

export default Home;