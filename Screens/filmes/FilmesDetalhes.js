import React, { useEffect, useState } from 'react'
import { Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = ({navigation, route}) => {

    const [filme, setFilme] = useState({})

    useEffect(()=> {
        const id = route.params.id
        apiFilmes.get(`/movie/${id}?language=pt-BR`).then(resultado => {
          setFilme(resultado.data)
        })
    
      },[])
    
  return (
    <>
     <Card>
          <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path}} />
          <Card.Content>
            <Text variant="titleLarge">{filme.title}</Text>
            <Text variant="bodyMedium">{filme.overview}</Text>
          </Card.Content>
        </Card>
        


    </>
  )
}

export default FilmesDetalhes