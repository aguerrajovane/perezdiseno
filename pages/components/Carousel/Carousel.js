import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from "../Item/Item";

const slider = [
    {
        "id":1,
        "image":"/static/images/image01.jpeg",
        "title":"Titulo1"
    },
    {
        "id":2,
        "image":"/static/images/image02.jpeg",
        "title":"Titulo2"
    },
    {
        "id":3,
        "image":"/static/images/image03.jpeg",
        "title":"Titulo3"
    },
    {
        "id":4,
        "image":"/static/images/image04.jpeg",
        "title":"Titulo4"
    },
    {
        "id":5,
        "image":"/static/images/image05.jpeg",
        "title":"Titulo5"
    }
]

function Example()
{

    return (
        <Carousel>
            {
                slider.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}
export default Example