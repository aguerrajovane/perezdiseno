import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from "../Item/Item";
import slider from "../../helper/slider.json";

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