const accountRouter = require('./account');
const siteRouter = require('./site');
// const productsRouter = require('./products');
const meRouter = require('./me');
const shopRouter = require('./shop');
function route(app){
    app.use('/me', meRouter);
    app.use('/shop', shopRouter);
    app.use('/account', accountRouter);
    // app.use('/products', productsRouter);
    app.use('/', siteRouter);
    app.use(function (req, res, next) {
        res.status(404);
        res.render('404');
    });
}

module.exports = route;
