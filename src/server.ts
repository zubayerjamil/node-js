import app from './app';
import * as dotenv from "dotenv";

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});