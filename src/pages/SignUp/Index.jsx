import { Container,Form,Background } from "./style";
import { FiUser,FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export default function SignIn(){
  return(
    <Container>
      <Background />
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que quer assistir</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />
        <Button title="Cadastrar"/>
        <a href="#"> &lt;- Voltar para o login</a>
      </Form>
      
    </Container>
  )
}