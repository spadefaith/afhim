Cake.create('api',null,{
    type:'model',
    handlers:{},
    subscribe:{
        getAllProducts:{
            components:['product_list','filter'],
            handler(e){
                return fetch('https://fakestoreapi.com/products',{
                    method:'GET',
                    mode:'cors',
                })
                    .then(res=>res.json())
                    .catch(err=>console.error(err));
            }
        },
        getAllCategories:{
            components:['filter'],
            handler(e){
                console.log('get categories');
                return fetch('https://fakestoreapi.com/products/categories',{
                    method:'GET',
                    mode:'cors',
                })
                    .then(res=>res.json())
                    .catch(err=>console.error(err));
            }
        },


        getProductsByCategory:{
            components:['product_list'],
            handler(category){
                return fetch(`https://fakestoreapi.com/products/category/${category}`,{
                    method:'GET',
                    mode:'cors',
                })
                    .then(res=>res.json())
                    .catch(err=>console.error(err));
            }
        }
    },
});