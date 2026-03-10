function add(a,b){
    console.log(a+b)
}
add(2,4)
const sub=(a,b)=>{console.log(a-b)}
sub(10,2)
const calc=(a,b,fun)=>{
    fun(a,b)
}
calc(4,2,add)
