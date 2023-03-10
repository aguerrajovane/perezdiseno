import { Box, Paper } from '@mui/material'
import Image from "next/image"


function Item({item})
{
    return (
        <Box>
            <Paper elevation={0}>
                <Image 
                    src={item.image} 
                    alt={item.alt} 
                    width={500}
                    height={300}/>
            </Paper>
            <h2>{item.title}</h2>
        </Box>
    )
}

export default Item