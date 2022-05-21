Cake.create('filter','#filter',{
    root:'.filter-container',
    handlers:{
        destroy(e){
            this.reset();
        },
        isConnected(e){
            console.log('filter is connected');
            console.log(this.$router.state);
            this.fire('getAllProducts').then(res=>{
                const dic = res.reduce((accu, item, index)=>{
                    const {category} = item;
                    if(!accu.counts[category]){
                        accu.categories.push({display:category.toUpperCase(), count:1, href:`#!/?category=${category}`});
                        accu.counts[category] = true;
                    } else {
                        const indexOf = accu.categories.findIndex(item=>item.display.toLowerCase() == category);
                        const found = accu.categories[indexOf];
                        found.count += 1;
                        accu.categories[indexOf] = found;
                    };
                    return accu;
                },{categories:[], counts:{}});

                dic.categories.unshift({display:'All',count:res.length, href:`#!/`});

                this.$scope.set('filters',dic.categories);
            })

        }
    },
    subscribe:{},
});