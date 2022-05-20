Cake.create('nav','#nav',{
    handlers:{
        burger(e){
            this.container.dropdown.classList.toggle('show');
        }
    },
    subscribe:{},
});