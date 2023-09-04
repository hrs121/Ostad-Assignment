const express = require('express');
const router = express.Router();

const controllers = [
    'blogController',
    'blogDetailsController',
    'commentController',
    'messageController',
    'portfolioController',
    'productController',
    'profitController',
    'projectController',
    'serviceController',
    'titleController',
];
controllers.forEach((controller) => {
    const createRoute = `/${controller.toLowerCase()}/create`;
    const readRoute = `/${controller.toLowerCase()}/read`;
    const deleteRoute = `/${controller.toLowerCase()}/delete/:index`;
    const updateRoute = `/${controller.toLowerCase()}/update/:index`;

    const {
        create,
        read,
        delete: deleteItem,
        update,
    } = require(`../Controller/${controller}`);


    router.get(createRoute, create);
    router.get(readRoute, read);
    router.get(deleteRoute, deleteItem);
    router.get(updateRoute, update);
});

module.exports = router;
