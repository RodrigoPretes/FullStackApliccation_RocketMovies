import { Container } from './styles';
import { Tag } from '../Tag';
import { FiStar } from 'react-icons/fi';
import { AiFillStar } from "react-icons/ai";

export function Note({data, ...rest}){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div className="Star">

      <AiFillStar size={12}/>
      <AiFillStar size={12}/>
      <AiFillStar size={12}/>
      <AiFillStar size={12}/>
      <FiStar size={12}/>
      </div>
      <p>{data.p}</p>
      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => 
              <Tag key={tag.id} title={tag.name}/>             
            )
          }
        </footer>
      }
    </Container>
  )
}