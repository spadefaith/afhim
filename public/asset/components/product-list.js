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
            await this.$scope.set('products', products).then(()=>{
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
        }
    },
    subscribe:{},
});