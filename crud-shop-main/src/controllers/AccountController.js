class AccountController{
    //[GET] /register-login
    registerLogin(req, res, next){
        res.render('register-login');
    }

    //[GET] /forgot-password
    forgotPassword(req, res, next){
        res.render('forgot-password');
    }

      //[GET] /verification-code
    verificationCode(req, res, next){
        res.render('verification-code');
    }


     //[GET] /new-password
     newPassword(req, res, next){
        res.render('new-password');
    }

     //[GET] /register-success
     registerSuccess(req, res, next){
        res.render('register-success');
    }

}

module.exports = new AccountController;