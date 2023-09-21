import app from './src/app.js';

const port = 4091;

app.listen(port, () => {
    console.log(`servidor está rodando na porta ${port}`)
})