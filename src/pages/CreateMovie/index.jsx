import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../service/api';

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from  "../../components/Button";
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Form } from './styles';

export function New(){
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  function handleAddTag(){
    setTags(prevState => [...prevState,newTag]);
    setNewTag("");
  }
  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote(){
    if(!title){
      return alert("Digite o titulo da nota");
    }
    if(newTag){
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou no icone de adicionar.");
    }
    await api.post("/notes", {
      title,
      rating,
      description,
      tags,
    });
    alert("Nota criada com sucesso!");
    navigate(-1);
  }
  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
          <Link onClick={handleBack}>
            <FiArrowLeft />
            Voltar
          </Link>
          <h1>Novo Filme</h1>
          </header>
            
          <div className="nota">
            <Input 
            type="text" 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
            />
            <Input 
            type="text" 
            placeholder="Sua nota (de 0 a 5)"
            onChange={e => setRating(e.target.value)}
            />
          </div>
          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />        
            <h2>Marcadores</h2>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}                  
                  />
                ))
              }
              <NoteItem 
                isNew 
                placeholder="Nova tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}/>
            </div>

          
          <div className="tag">
            <button 
              className="ActionButton"
              onClick={handleBack}
            >
              Excluir filme
            </button>
            <Button 
              title="Salvar Alterações"
              onClick={handleNewNote}
            />
          </div>
          </Form>
      </main>
    </Container>
  );
}