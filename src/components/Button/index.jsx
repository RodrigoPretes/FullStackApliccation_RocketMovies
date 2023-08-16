import { Container } from "./styles";
import { Link } from 'react-router-dom';

export function Button({ title, loading = false ,icon: Icon, ...rest}){
    return(
        <Container 
        type="button"
        disabled={loading}
        >
            {Icon && <Icon size={20}/>}
            { loading ? 'Carregando...' : title }
        
            
        </Container>
    )

}