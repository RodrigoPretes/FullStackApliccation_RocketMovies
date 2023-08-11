import { Fragment } from "react";
import { Container,Content,UpperContent } from "./styles.js";
import { FiPlus } from 'react-icons/fi';

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Note } from "../../components/Note"

export default function Details(){

  return(
    <Container>
      <Header />
      <UpperContent>
        <div>
          <h1>Meus filmes</h1>   
          <Button title=" Adicionar filme " />
        </div>
      </UpperContent>
      <Content>
      <Note data={{
      title: 'Interestellar',
      notes: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária",
      tags: [
          { id: '1', name: 'Ficção Cientifica' },
          { id: '2', name: 'Drama' },
          { id: '3', name: 'Familia' },
      ]
  }} />

      </Content>
    </Container>

  );
}