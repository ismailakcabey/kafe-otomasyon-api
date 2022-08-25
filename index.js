// import moduls
import express from 'express';
import { connectDB } from './db/db.js';
import routerCustomer from './routers/customerRouter.js'
import waiterRouter from './routers/waiterRouter.js'
import tableRouter from './routers/tableRouter.js'
import stokRouter from './routers/stokeRouter.js'
import  cors  from 'cors'
const app = express();
app.use(cors())
app.use(express.json());

// routers

app.use('/customers',routerCustomer)
app.use('/waiters',waiterRouter)
app.use('/tables',tableRouter)
app.use('/stoks',stokRouter)

//localhost:8080 run
app.listen(8080,()=>{
    console.log(8080 + " portunda çalışıyor ")
    //db connected
    connectDB()
})