import {FiSearch} from 'react-icons/fi'
import { Container, Search, Profile} from './style'
import { Input } from '../Input';
import { api } from '../../service/api'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import  avatarPlaceholder  from '../../assets/avatar_placeholder.svg'
import { useAuth } from "../../hooks/auth"

export function Header( ){
    const { signOut, user } = useAuth();
    const navigation = useNavigate;
    const [tagsSelected, setTagsSelected] =  useState([]);
    const [notes, setNotes] = useState([]);
  
    function handleSignOut(){
        navigation("/");
        alert("saindo da aplicação")
        signOut();
    }
  
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [search, setSearch] = useState("");
    useEffect(() => {
        async function fetchNotes(){
          const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
          console.log(response.data);
          setNotes(response.data);
        }
        fetchNotes();
      }, [tagsSelected, search]);
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Search>
                <Input placeholder="Pesquisar pelo título" 
                icon={FiSearch}
                onChange={(e) => setSearch(e.target.value)}
                />
            </Search>
                <div>
                    <strong>{user.name}</strong>
                    <a onClick={signOut}>Sair</a>
                </div>
            <Profile to="/profile">
                <img src={avatarUrl} alt={user.name} />
            </Profile>
            
        </Container>
    );
}