Cake.create('alert',null,{
    handlers:{},
    subscribe:{
        error:{
            components:['api'],
            handler(e){
                return Swal.fire({
                    title:'error',
                    text:e,
                    icon:'error',
                });
            }
        },
        success:{
            components:['api'],
            handler(e){
                return Swal.fire({
                    title:'success',
                    text:e,
                    icon:'success',
                });
            }
        },
        warning:{
            components:['api'],
            handler(e){
                return Swal.fire({
                    title:'warning',
                    text:e,
                    icon:'warning',
                });
            }
        },
        info:{
            components:['api'],
            handler(e){
                return Swal.fire({
                    title:'info',
                    text:e,
                    icon:'info',
                });
            }
        }
    },
});