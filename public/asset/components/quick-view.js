Cake.create('quick-view', '#quick-view', {
    root:'.modal-content',
    state:{
        product:null,
    },
    handlers:{
        destroy(){
            this.reset();
        },
        isConnected(e){
            Promise.all(Object.keys(this.$state.product).map(key=>{
                return this.$scope.set(key, this.$state.product[key]);
            })).then(()=>{
                this.fire.adjustImg()
            });
        },
        adjustImg(){
            const img = this.container.img;
            const parent = img.parentElement;
            if(img && parent){
                const availableSpace = parent.offsetHeight - img.offsetHeight;
                const mid = availableSpace / 2;
                img.style.marginTop = (mid-(mid*0.30))+'px';
            };
        },
    },
    subscribe:{
        product_list:{
            renderQuickView(e){
                this.fire('renderModal',{quickview:e.quickview}).then(()=>{
                    this.$state.product = e.product;
                    this.render();
                });
            }
        },
        modal:{
            destroy(e){
                this.fire.destroy();
            }
        }
    },
});