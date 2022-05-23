Cake.create('skeleton','#skeleton',{
    root:'.product-list-container',
    animate:{
        skeleton:{
            render:{keyframes:['appear']},
            remove:{keyframes:['disappear']},
        },
    },
    handlers:{
        destroy(e){
            console.log('skeleton is destroyed')
            this.reset();
        },
        isConnected(e){
            console.log('skeleton is connected');
        },
    },
    subscribe:{
        removeSkeleton:{
            components:['filter', 'product_list'],
            handler(e){
                this.fire.destroy();
            }
        },
        renderSkeleton:{
            components:['filter', 'product_list'],
            handler(e){
                this.render();
            }
        }
    },
});