import {FiSearch} from 'react-icons/fi'
import { Container, Search, Profile} from './style'
import { Input } from '../Input';

export function Header( ){
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>
            <Profile>
                <div>
                    <strong>Rodrigo Pretes</strong>
                    <span>Sair</span>
                </div>
                <img src="https://github.com/rodrigopretes.png" alt="Foto do usuario" />
            </Profile>
            
        </Container>
    );
}