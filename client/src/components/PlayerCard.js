import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';


export default function PlayerCard(props){

    // console.log(props);
    const player = props.player;
    // console.log(player);

    return(
        <Card>
            <CardBody>
                <CardTitle>{player.name}</CardTitle>
                <CardSubtitle>{player.country}</CardSubtitle>
                <CardText>
                Searches: {player.searches}
                </CardText>
                <CardText>
                    ID: {player.id}
                </CardText>
            </CardBody>
        </Card>
    )

}