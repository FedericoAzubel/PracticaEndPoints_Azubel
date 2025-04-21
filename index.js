import express from "express"; // Importa el módulo express
const app = express();
const PORT = 3000;

app.use(express.json()); // para poder leer JSON en POST y PUT

app.get("/", (req, res) => {
  res.json("Bienvenido a mi API de Práctica");
});

//
let saludo = "¡Hola mundo!";
let numero = "4";
const usuario = {
  nombre: "Ana",
  edad: "25",
};

const materias = [{ nombre: "Matemática" }, { nombre: "Lengua" }];

const productos = ["Mouse", "Teclado", "Monitor"];

app.get("/saludo", (req, res) => {
  res.json(saludo);
});

app.get("/numero", (req, res) => {
  res.json(numero);
});

app.get("/usuario", (req, res) => {
  res.json(usuario);
});

app.get("/productos", (req, res) => {
  res.json(productos);
});

app.get("/materias", (req, res) => {
  res.json(materias);
});

let personas = [];

// POST - Agregar una persona
app.post("/personas", (req, res) => {
  const persona = req.body;
  console.log(persona);
  if (!persona) return res.status(400).json({ error: "Faltan datos de la persona" });
  personas.push(persona);
  res.status(201).json({ mensaje: "Persona agregada", personas });
});

// GET - Ver todas las personas
app.get("/personas", (req, res) => {
  res.json(personas);
});

// DELETE - Borrar una persona por índice
app.delete('/personas/:indice', (req, res) => {
    const indice = parseInt(req.params.indice);
  
    if (isNaN(indice) || !personas[indice]) {
      return res.status(404).json({ error: 'Índice no válido' });
    }
  
    const eliminado = personas.splice(indice, 1);
    res.json({ mensaje: `Persona eliminada: ${eliminado[0].nombre}`, personas });
  });

  

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
