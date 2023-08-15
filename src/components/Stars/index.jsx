
import { Container } from './style';

export function Stars( {icon: Icon}){
  <Container>
    {Icon && <Icon size={20}/>}
  </Container>
}