const ProductService = require('../services/ProductService');
const CateService = require('../services/CateService');
const util = require('../util/Utility');
const product = require('../models/product');
const category = require('../models/category');
const { getDataSlug } = require('../util/Utility');


class SiteController{



    index(req, res, next){

        let name=null;
        
        const productPromises=[
            ProductService.listByFeatured()
        ]

        Promise.all(productPromises)
        .then(result=>{
            let products=result[0];


            //Lấy được product
            //Giờ lấy detail của cái product đó
            const productLength=products.length;
            let detailPromises=[];
    
            
           // console.log(products);
            for (let i=0;i<productLength;i++){
                detailPromises.push(ProductService.getImageLink(products[i].proID));
                detailPromises.push(ProductService.getProductDetail(products[i].proID));
                detailPromises.push(ProductService.getCateName(products[i].catID))
            }

            
            
            //Chuẩn bị render
            Promise.all(detailPromises)
            .then(result=>{
            
                    for (let i=0;i<productLength;i++){
                        products[i].image=result[i*3][0].proImage;
                        products[i].detail=result[i*3+1];
                        products[i].cate=result[i*3+2].catName;
                    }

                    
                    res.render('home',{products});
            })
            .catch(err=>{
                console.log(err);
                next();
            })


        })
        .catch(err=>{
            console.log(err);
            next();
        })
    }


    contact(req, res, next){
        res.render('contact');
    }

}

module.exports = new SiteController;