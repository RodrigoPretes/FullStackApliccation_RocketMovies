import { Container,Content } from './styles';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { api } from '../../service/api'
import { useAuth } from "../../hooks/auth"
import { Header } from '../../components/Header';
import { FiArrowLeft,FiStar, } from 'react-icons/fi';
import { AiFillStar } from "react-icons/ai";
import { LuClock3 } from "react-icons/lu";
import { Tag } from '../../components/Tag';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import  avatarPlaceholder  from '../../assets/avatar_placeholder.svg'

export function MoviePreview(){
  const { user } = useAuth();
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchnote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
      
    }
    
    fetchnote();
  }, []);
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  return(
    <Container>
      <Header />
      {
        data 
        &&
      
      <Content>
        <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>
            <Button title="Excluir nota" onClick = {handleRemove}/>
        </header>
            <div className="star">
              <h1>{data.title}</h1>
              <AiFillStar size={25}/>
              <AiFillStar size={25}/>
              <AiFillStar size={25}/>
              <AiFillStar size={25}/>
              <FiStar size={25}/>
            </div>
            <div className="Personal">
              <img src={avatarUrl} alt={user.name}/>
              <p>{user.name}</p>
              <LuClock3 size={16}/>
              <p>{data.created_at}</p>
            </div>
            {
              data.tags &&
              <div className="Tags">
                {
                  data.tags.map( tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </div>
            }
            <p>
              {data.description}
            </p>
      </Content>
      }
    </Container>
  )
}