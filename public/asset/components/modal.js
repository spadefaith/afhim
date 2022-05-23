Cake.create('modal','#modal',{
    handlers:{
        destroy(e){
            this.reset();
        },
        isConnected(e){
            let {emit} = e;
            if(emit.quickview){
                this.fire
                setTimeout(()=>{
                    this.$scope.set('show',true);
                },50);
                setTimeout(()=>{
                    this.$scope.set('dialog-show',true);
                },100);

            };
            
        },
    },
    subscribe:{
        renderModal:{
            components:['quick-view'],
            handler(e){
                this.render({emit:e});
            }
        },
        'quick-view':{
            destroy(){
                this.fire.destroy(null, false);
            }
        }
    },
});