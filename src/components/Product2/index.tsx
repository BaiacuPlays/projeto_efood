import React from 'react'
import { ButtonButton, Card, Descricao, Titulo, Estrela } from './styles'
import Tag2 from '../header/Tag2'
import estrela from '../../assets/images/estrela.png'
import { Link } from 'react-router-dom'
import { Restaurante } from '../../pages/Home'

type Props = {
  restaurante: Restaurante
}

const Product2: React.FC<Props> = ({ restaurante }) => (
  <Card>
    <div style={{ position: 'relative' }}>
      <img src={restaurante.capa} alt={restaurante.titulo} />
      <div style={{ position: 'absolute', top: 9, right: 12 }}>
        {restaurante.tipo && <Tag2>{restaurante.tipo}</Tag2>}
        {restaurante.destacado && <Tag2>Destaque da semana</Tag2>}
      </div>
    </div>
    <Titulo>
      <span>{restaurante.titulo}</span>
      <Estrela src={estrela} alt={restaurante.titulo} />
      <span style={{ marginRight: '10px', float: 'right' }}>
        {restaurante.avaliacao}
      </span>
    </Titulo>
    <Descricao>{restaurante.descricao}</Descricao>
    <div>
      <Link to={`/cardapio/${restaurante.id}`}>
        <ButtonButton>Saiba mais</ButtonButton>
      </Link>
    </div>
  </Card>
)

export default Product2
