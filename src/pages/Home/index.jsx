import { Container,Content } from "./styles.js";
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { FiStar,FiPlus} from 'react-icons/fi';
import { Link } from 'react-router-dom';


export function Home(){

  return(
    <Container>
      <Header />
    
      <Content>
        <Section title="Meus filmes">
          <Link to="/new">
          <Button title=" Adicionar filme " icon={FiPlus} />
          </Link>
        </Section>
        <Link to="MoviePreview/1">
          <Note  data={{
            title:'Interestellar',
            
            p:"Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
            tags:[
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'},
            ]
            
          }}
          />
          </Link>
          <Link to="MoviePreview/1">
          <Note  data={{
            title:'Interestellar',
            p:"Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
            tags:[
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'},
            ]
            
          }}
         />
         </Link>
         <Link to="MoviePreview/1">
          <Note  data={{
            title:'Interestellar',
            p:"Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
            tags:[
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'},
            ]
            
          }}
          />
        </Link>
      </Content>
    </Container>

  );
}