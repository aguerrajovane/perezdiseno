import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from 'next/link';
import styles from './card.module.css';
import Grid from '@mui/material/Grid';

const projects = [
  {
    id: 1,
    title: 'Nana Colectivo',
    description: 'Tipo',
    image: '/static/images/image01.jpeg',
    url: '/proyectos/nana-colectivo',
  },
  {
    id: 2,
    title: 'Verano Canal 2020',
    description: 'Tipo',
    image: '/static/images/image01.jpeg',
    url: '/proyectos/verano-canal-2020',
  },
  {
    id: 3,
    title: 'Environmental Graphic Design in Office',
    description: 'Tipo',
    image: '/static/images/image01.jpeg',
    url: '/proyectos/environmental-graphic-design-in-office',
  },
  {
    id: 4,
    title: 'PTY Brothers',
    description: 'Tipo',
    image: '/static/images/image01.jpeg',
    url: '/proyectos/pty-brothers',
  },
  {
    id: 5,
    title: 'Kitchen',
    description: 'Tipo',
    image: '/static/images/image01.jpeg',
    url: '/proyectos/kitchen',
  },
  {
    id: 6,
    title: 'BannabáFest',
    description: 'Tipo',
    image: '/static/images/image01.jpeg',
    url: '/proyectos/bannabafest',
  },
  {
    id: 7,
    title: 'Invent',
    description: 'Tipo',
    image: '/static/images/image01.jpeg',
    url: '/proyectos/invent',
  },
  {
    id: 8,
    title: 'Conversaciones del Cine Panameño',
    description: 'Tipo',
    image: '/static/images/image01.jpeg',
    url: '/proyectos/conversaciones-del-cine-panameno',
  },
  {
    id: 9,
    title: 'Jóvenes y Cambio Climático',
    description: 'Tipo',
    image: '/static/images/image01.jpeg',
    url: '/proyectos/jovenes-y-cambio-climatico',
  },
].reverse();

export default function ActionAreaCard() {
  return (
    <Grid container spacing={2}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <Card className={styles.container} sx={{ maxWidth: 345 }}>
            <Link style={{ textDecoration: 'none' }} href={project.url} passHref legacyBehavior>
              <CardActionArea>
                <CardMedia component="img" height="240" image={project.image} alt={project.title} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" fontSize={16}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
