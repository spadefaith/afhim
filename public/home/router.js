const router = new Cake.Router({
    '/shop':{
        name:'shop',
        display:'Shop',
        components:['product_list','pagination'],
    }
});