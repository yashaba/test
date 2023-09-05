import express, { Response, Request } from 'express'
import expensesRoutes from './routes/expenses.routes'
import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import dotenv from 'dotenv'
const app = express();
dotenv.config()

app.use(bodyParser.json());
const port = 8080
console.log('env', process.env);
console.log('env', process.env.KEY);


app.get('/test', (req: Request, res: Response)=> {
    console.log('I am alive')
    res.send('Response is alive')
} );

app.use('/api/v1', expensesRoutes)

app.listen(port,()=>{
    console.log(`Server is listening on port: ${port}`)
})