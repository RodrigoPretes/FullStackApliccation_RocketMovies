import { Container,Content } from "./styles.js";
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { Stars } from "../../components/Stars/index.jsx";
import { FiStar,FiPlus} from 'react-icons/fi';


export default function Home(){

  return(
    <Container>
      <Header />
    
      <Content>
        <Section title="Meus filmes">
          <Button title=" Adicionar filme " icon={FiPlus}/>
        </Section>
          <Note  data={{
            title:'Interestellar',
            p:"Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
            tags:[
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'},
            ]
            
          }}
          icon={FiStar}/>
          <Note  data={{
            title:'Interestellar',
            p:"Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
            tags:[
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'},
            ]
            
          }}
          icon={FiStar}/>
          <Note  data={{
            title:'Interestellar',
            p:"Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
            tags:[
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'},
            ]
            
          }}
          icon={FiStar}/>
          
      </Content>
    </Container>

  );
}