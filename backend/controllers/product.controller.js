import prisma from '../config/prisma.js';


export const createProduct = async (req, res) => {
    const { name, price, quantity, image, description } = req.body;
    const product = await prisma.product.create({
        data: { name, price, quantity, image, description }
    });
    res.json(product);
}

export const getProducts = async (req, res) => {
    const products = await prisma.product.findMany();
    res.json(products);
}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
        where: { id }
    });
    res.json(product);
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, quantity, image, description } = req.body;     
    const product = await prisma.product.update({
        where: { id },
        data: { name, price, quantity, image, description }
    });
    res.json(product);
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await prisma.product.delete({
        where: { id }
    }); 
    res.json(product);
}
