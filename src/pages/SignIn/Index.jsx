import { Container,Form,Background } from "./style";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export default function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que quer assistir</p>

        <h2>Faça seu Login</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        
        <Input 
          placeholder="Senha"
          type="text"
          icon={FiLock}
        />
        <Button title="Entrar"/>
        <a href="#">Criar conta</a>
      </Form>
      <Background />
    </Container>
  )
}