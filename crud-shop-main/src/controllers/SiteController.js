class SiteController{

    //[GET] /
    index(req, res, next){
        res.render('home');
    }

    contact(req, res, next){
        res.render('contact');
    }

}

module.exports = new SiteController;