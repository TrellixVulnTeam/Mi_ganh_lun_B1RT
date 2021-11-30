const {models} = require('../models');
const Util = require('../util/Utility');

class ProductService{



	list(limit, page, name){
        if(name){
            return models.product.findAll({
                offset: (page - 1)*limit, 
                limit: limit, 
                raw:true,
            });
        }else{
            return models.product.findAll({offset: (page - 1)*limit, limit: limit, raw:true});
        }
    }

    getImageLink(id){
        return models.imagelink.findAll(
			{attributes: ['proImage'],
			where: {proID:id}, raw:true})
    }

    getProductTotal(){
      return models.product.count();
    }

    getProductDetail(id){
			return models.detail.findAll({
				raw:true,
				where:{
					proID: id,
				}
			})
    }

    getCateName(id){
        return models.category.findOne({
            raw:true,
            where: {
                catID: id,
            }
        })
    }

    listByGender(limit, page, gender){
            return models.product.findAll({
                offset: (page - 1)*limit, 
                limit: limit, 
                raw:true,
                where:{
                    sex: gender,
                }
            });
        }
    
     getProductTotalGender(gender){
        return models.product.count({
            where: {
                sex: gender
            }
        });
        }
        
    listByBrand(limit, page, brand){
        return models.product.findAll({
            offset: (page - 1)*limit, 
            limit: limit, 
             raw:true,
            where:{
                 brandID: brand,
            }
        });
    }


    getProductTotalBrand(id){
        return models.product.count({
            where: {
                 brandID: id,
            }
        });
        }
    

    getBrandID(name){
        return models.brand.findOne({
            raw:true,
            attributes: ['brandID'],
            where: {
                brandSlug: name,
            }
        })
    }

    getCateID(name){
        return models.category.findOne({
            raw:true,
            attributes: ['CatID'],
            where: {
                catSlug: name,
            }
        })
    }

    listByCate(limit, page, cate){
        return models.product.findAll({
            offset: (page - 1)*limit, 
            limit: limit, 
             raw:true,
            where:{
                 CatID: cate,
            }
        });
    }


    getProductTotalCate(id){
        return models.product.count({
            where: {
                 catID: id,
            }
        });
        }

    
    listByFeatured(){
        return models.product.findAll({
            raw:true,
            where:{
                isFeature: 1,
            }
        })
    }

    getBrandSlug(id){
        return models.brand.findOne({
            raw:true,
            attributes: ['brandSlug'],
            where: {
                brandID: id
            }
        })
    }

    getCateSlug(id){
        return models.category.findOne({
            raw:true,
            attributes: ['catSlug'],
            where: {
                catID: id
            }
        })
    }
    

    listByFeaturedLimit(amount){
        return models.product.findAll({
            raw:true,
            limit: amount,
            where:{    
                isFeature: 1,
            }
        })
    }
}

module.exports = new ProductService;