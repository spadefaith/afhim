Cake.create('pagination','#pagination',{
    root:'.product-list-pagination-container',
    handlers:{
        destroy(e){
            this.reset();
        }
    },
    subscribe:{},
});