import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.use(cors({
    origin: [`${HOSTNAME}`]
}))

app.listen(PORT, () => {
    console.log(`Server is running on ${HOSTNAME}:${PORT}`);
});