import express from 'express';
import { routes } from './routes';

const app = express();
const port = 8080;

app.use((req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
})


app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server is running on port ${port}` ));