class MeController{
    //[GET] /me/cart
    showCart(req, res, next){
        res.render('me/cart');
    }

    //[GET] /me/checkout
    checkout(req, res, next){
        res.render('me/checkout');
    }

    //[GET] /me/profile
    profile(req, res, next){
        res.render('me/profile');
    }

    // //[GET] /me/wishlist
    // wishlist(req, res, next){
    //     res.render('me/wishlist');
    // }

    //[GET] /me/change-password
    changePassword(req, res, next){
        res.render('me/change-password');
    }
    //[GET] /me/order
    showOrder(req, res, next){
        res.render('me/order');
    }

     //[GET] /me/order/:id
     showOrderDetail(req, res, next){
        res.render('me/order-detail');
    }
}

module.exports = new MeController;