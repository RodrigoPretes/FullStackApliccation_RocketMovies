
import React from "react"; // Certifique-se de importar o React
import { Container } from "./styles";
import { FiStar } from "react-icons/fi";
import { Tag } from "../Tag";

export function Note(props){
    const { title, notes, tags } = props.data;
    return( 
        <Container {...props}>
            <h1>{title}</h1>
            <p>{notes}</p>
            {
                tags &&
                <footer>
                    {
                        tags.map(tag=>
                            <Tag key={tag.id} title={tag.name}/>)
                    }
                </footer>
            }
        </Container>
    )
}

