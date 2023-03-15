import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from './form.module.css'

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Mensaje enviado');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
        <TextField
            id="name"
            label="Nombre"
            type="text"
            variant="outlined"
            fullWidth
            required
            style={{ marginBottom: 14 }}
            />
        <TextField
            id="lastname"
            label="Apellido"
            type="text"
            variant="outlined"
            fullWidth
            required
            style={{ marginBottom: 14 }}
            />
        <TextField
            id="email"
            label="Correo"
            type="email"
            variant="outlined"
            fullWidth
            required
            style={{ marginBottom: 14 }}
            />
        <TextField
            id="phone"
            label="Telefono"
            type="tel"
            variant="outlined"
            fullWidth
            style={{ marginBottom: 14 }}
            />
        <TextField
            id="company"
            label="Empresa"
            type="text"
            variant="outlined"
            fullWidth
            style={{ marginBottom: 14 }}
            />
        <TextField
            id="message"
            label="Mensaje"
            multiline
            rows={9}
            variant="outlined"
            fullWidth
            required
            style={{ marginBottom: 14 }}
            />
        <Button style={{ backgroundColor: "#000" }} variant="contained" type="submit">
            Enviar
        </Button>
    </form>
  );
}
