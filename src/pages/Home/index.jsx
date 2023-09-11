import { Container,Content } from "./styles.js";
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { FiPlus} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { api } from '../../service/api'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Home(){
  const [search, setSearch] = useState("");
  const [tags, setTags] =  useState([]);
  const [searchedName, setSearchedName] = useState([]);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();


   function handleSearch(titleName){
    const filteredNotes = searchedName.filter(notes => notes !== titleName);
    setSearchedName(filteredNotes);
  }

  function handleDetails(id){
    navigate(`/MoviePreview/${id}`)
  }

  useEffect(() => {
    async function fetchTags(){
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${searchedName}`);
      setNotes(response.data);
    }
    fetchNotes();
  }, [searchedName, search]);

  return(
    <Container>
      <Header />
    
      <Content>
        <Section title="Meus filmes">
          <Link to="/new">
          <Button title=" Adicionar filme " icon={FiPlus} />
          </Link>
        </Section>
        {
          notes.map(note => (
            <Note 
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            
            />
          ))
        }
      </Content>
    </Container>

  );
}