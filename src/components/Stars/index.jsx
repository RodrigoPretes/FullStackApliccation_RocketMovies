import { Container } from './style';
import { FiStar } from 'react-icons/fi';
import { AiFillStar } from "react-icons/ai";

export default function Stars(){
  return(
  <Container>
    <AiFillStar />
    <AiFillStar />
    <AiFillStar />
    <AiFillStar />
    <FiStar />
  </Container>
  )
}