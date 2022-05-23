Cake.create('product_list','#product_list',{
    root:'.product-list-container',
    handlers:{
        destroy(e){
            console.log('product list is destroyed');
            this.reset();
        },
        async isConnected(e){
            const category = this.$router.state.category;
            let products;
            this.fire('renderSkeleton');
            if(category){
                products = await this.fire('getProductsByCategory',category);
            } else {
                products = await this.fire('getAllProducts');
            };
            this.data.products = products;


            const _products = JSON.parse(JSON.stringify(products));

            await this.$scope.set('products', _products).then(()=>{



                this.fire('removeSkeleton');
                this.fire.showCards();
            });
            

        },
        showCards(){
            const cards = this.html.getElement().querySelectorAll('.card.hide');
            const l = cards.length;
            let index = 0;


            const recur = ()=>{
                if(index < l){
                    const card = cards[index];
                    // console.log(card);
                    card.classList.remove('hide');
                    
                    index += 1;
                    setTimeout(()=>{
                        recur();
                    },200);
                };
            };recur();
        },
        click(e){
            const target = e.target;
            const role = target.dataset.role;
            if(role == 'quickview'){
                const productId = target.closest('.product').dataset.productId;

                if(productId){
                    const product = this.data.products.find(item=>item.id==productId);
                    product.ratings = product.rating.rate;
                    product.stock = product.rating.count;

                    this.fire('renderQuickView',{product,quickview:true});

                };
            };

        }
    },
    subscribe:{},
});