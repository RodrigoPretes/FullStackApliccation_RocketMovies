import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from  "../../components/Button";
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Form } from './styles';

export default function New(){
  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
          <a href="#">
            <FiArrowLeft />
            Voltar
          </a>
          <h1>Novo Filme</h1>
          </header>
            
          <div className="tag">
            <Input type="text" placeholder="Título"/>
            <Input type="text" placeholder="Sua nota (de 0 a 5)"/>
          </div>
          <Textarea placeholder="Observações"/>        
            <h2>Marcadores</h2>
            <div className="tags">
              <NoteItem value="React"/>
              <NoteItem isNew placeholder="Novo marcador"/>
            </div>

          
          <div className="tag">
            <button className="ActionButton">Excluir filme</button>
            <Button title="Salvar Alterações"/>
          </div>
          </Form>
      </main>
    </Container>
  )
}