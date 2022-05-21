const router = new Cake.Router({
    '/':{
        name:'home',
        display:'Home',
        components:['product_list','pagination'],
        onrender:{
            product_list:{cleaned:true},
        }
    },
    '/filter':{
        name:'filter',
        display:'Filter',
        components:['overlay-side','filter'],
        overlay:true,
    }
});