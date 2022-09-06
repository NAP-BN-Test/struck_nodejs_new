module.exports = function(app) {
    var checkToken = require('./constants/token');
    var login = require('./controllers/login');
    const swaggerJsDoc = require('swagger-jsdoc')
    const swaggerUI = require('swagger-ui-express')
    var router = require('express').Router()
    const swaggerOption = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Library API",
                version: "1.0.0",
                description: "A simple Express Library API"
            }
        },
        servers: [{
            url: "http://localhost:3300"
        }],
        apis: ['./api/router.js']

    }
    const swaggerDocs = swaggerJsDoc(swaggerOption)
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
    /**
     * @swagger
     * components:
     *   schemas:
     *     Book:
     *       type: object
     *       required:
     *         - title
     *         - author
     *       properties:
     *         id:
     *           type: string
     *           description: The auto-generated id of the book
     *         title:
     *           type: string
     *           description: The book title
     *         author:
     *           type: string
     *           description: The book author
     *       example:
     *         id: d5fE_asz
     *         title: The New Turing Omnibus
     *         author: Alexander K. Dewdney
     */
    /**
     * @swagger
     * /login:
     *   get:
     *     summary: Returns the list of all the books
     *     tags: [Books]
     *     responses:
     *       200:
     *         description: The list of the books
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Book'
     */
    router.get('/login', (req, res) => {
        res.send([{
            id: 1
        }])
    });
    // app.route('/youtube').post(youtube.youtubev4);

}