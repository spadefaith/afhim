Cake.create('api',null,{
    type:'model',
    handlers:{},
    subscribe:{
        getAllProducts:{
            components:['product_list'],
            handler(e){
                return fetch('https://fakestoreapi.com/products',{
                    method:'GET',
                    mode:'cors',
                })
                    .then(res=>res.json())
                    .catch(err=>console.error(err));
            }
        }
    },
});