import app from './middleware/router';
import config from './config';

const {PORT} = config;

app.listen(PORT, () => {
    console.log(`Server is up on Start : http://localhost:${PORT}`);
});
