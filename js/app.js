//arrow function
 //const x =(x,y) => x*y
  //  x(6,6)

    // console.log(x(6,6));

 //spread operator//rest operator
 
// const sum = (...array) => {
  //  console.log("arguments",array)
 //};
// sum (1,2,4,5,6,7,8);
 //sum();
 //sum(1,2,3,4,5,6,7,8,9);

 ///obj .get name();

 //var value = "mugesh"
 //var value2 = "sample ${mugesh}";

// console.log("value2",value2);

///destruction method

//var mugesh = {
  // mobile:"vivo",
    //ram:"6gp"
//};
//const {mobile,ram}=mugesh

//console.log(mobile,ram);

//array destruction

//var mugesh1 = [1,2,4,5,6,6,8,8,];
//const [m,u,g,e,s,h,i] = mugesh1

//console.log(mobile,ram,m,u,g,e,s,h,i);


//class

//class mugesh{
  //  constructor(){
    //    this.name ="class method"
    //}
     //getName(){
       // console.log(this.name);
     //}    
//} 

//modules
export const value = "mugesh";
export const getName = () => {
    return value ;
}

export default ()=>{
    return value;
}