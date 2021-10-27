class group{
   constructor() {
        this.group=[];
   }
    

   add(value){
       if(!this.has(value)){
           this.group.push(value);
       }
   }

    
   delete(value){
       if(this.has(value)){
           this.group=this.group.filter(n=> n !==value);
       }
   }
   has(value){
       return this.group.includes(value);
   }
   
   
   from(iteratableObject){
       for(let value of iteratableObject){
           this.add(value);
       }
   }

}




