class Vec{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    plus(vec){
        return new Vec(this.x+vec.x , this.y+vec.y);
    }
    minus(vec){
        return new Vec(this.x-vec.x , this.y-vec.y);
    }
    get lenth(){
        return Math.sqrt((this.x*this.x)+(this.y*this.y));
    }
}
let vector=new Vec(5,8);


console.log(vector.plus(1));
console.log(vector.plus(new Vec(5,3)));