import { Box, Paper } from '@mui/material'
import Image from "next/image"
import styles from './item.module.css'

function Item({item})
{
    return (
        <Box>
            <Paper elevation={0}>
                <div className={styles.container}>
                    <Image
                        className={styles.image}
                        src={item.url} 
                        alt={item.alt} 
                        width={1200}
                        height={700}
                        
                        />
                </div>
            </Paper>
        </Box>
    )
}

export default Item