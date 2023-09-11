import { useState } from "react";
import { Container,Form,Background } from "./style";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../service/api";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos")
    }

    await api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuario cadastrado com sucesso");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }
      else{
        alert("Não foi possivel cadastrar o usuario")
      }
    })
    
    

  }
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
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignUp}/>
        <Link to="/"> &lt;- Voltar para o login</Link>
      </Form>
      
    </Container>
  )
}