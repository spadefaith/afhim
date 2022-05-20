Cake.create('carousel','#carousel',{
    root:'.carousel-container',
    handlers:{
        isConnected(){
            let banners = [
                {image:"/asset/images/banner/genz2.jpg"},
                {image:"/asset/images/banner/genz3.jpg"},
                {image:"/asset/images/banner/genz4.jpg"},
            ];
            this.$scope.set('banners', banners).then(()=>{
                this.html.getElement().querySelector('.cake-template').remove();
                new Splide( '#image-carousel' ,{
                    type:'slide',
                    rewind:true,
                    autoplay:true,
                    interval:3000,
                }).mount();
            });
            // new Splide( '#image-carousel' ).mount();

        }
    },
    subscribe:{},
});