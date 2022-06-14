import React, {FC, useEffect, useState} from 'react';
import {apiCharacter} from "../../api/Api";
import Loading from "../Loading/Loading";
import {Button, Card} from "react-bootstrap";

interface PropsCharacter {
    urlApi: string
}

const CharacterCard: FC<PropsCharacter> = ({urlApi}) => {

    const [character, setCharacter] = useState<any | null>(null)

    const dataCharacterCard = async (url: string) =>
        await apiCharacter.getCharacterCard(url).then(response =>
            setCharacter(response.data))


    useEffect(() => {
        dataCharacterCard(urlApi)
    }, [])
    console.log(character)
    return <>
        {character === null
            ? <Loading/>
            :
            <Card border="silver">
                <Card.Img variant="top" src={character.image}/>
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                        <div> Species - {character.species}</div>
                        <div> Gender - {character.gender}</div>

                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
            </Card>

        }
    </>
};

export default CharacterCard;