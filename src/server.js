const express = require('express');
const app = express();
const cors = require('cors');
const { agregarPost, obtenerPosts } = require('./controllers.js')
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.listen(PORT, console.log( `Servidor encedido en puerto ${PORT}!`));


app.get('/posts', async (req, res) => {
    const posts = await obtenerPosts();
    res.json(posts)
});

app.post('/posts', async (req, res) => {
    const { titulo, url, descripcion } = req.body;
    const img = url;
    await agregarPost(titulo, img, descripcion);
    res.json(req.body)
});
