import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.routes.js';

const app = express();


const PORT = 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message : "welcome to the inventory system",
        status : "success",
        version : "1.0.0",
        developer : "Zakaria"
    })
});

// Routes
app.use('/api/products', productRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})