/**
 * Created with JetBrains WebStorm.
 * User: jiuyuehe
 * Date: 13-8-5
 * Time: 下午9:46
 * To change this template use File | Settings | File Templates.
 */

var weap={};



function choose(){
    var ico = $("img")[1].src;

    alert(ico);

    var img = "<img src=\""+ico+"\">";

    alert(img);

    $("#show").append(img);

}


function up (){
  /*  var data =[1,2,3,4,5,6];

    var sum = 0;
    data.forEach(function(value){ sum +=value});

    alert(sum);

     data.forEach(function(v,i,a){a[i] = v+1});

    alert(data);*/

    a = [1,2,3,5,7,9,12];
    b = a.map(function(x){return x*x;});
    alert(b)

    var  sun = a.reduce(function(x,y){return x+y},0);
         alert(sun);
    var product = a.reduce(function(x,y){return x*y},1);
         alert(product);


//    small = a.filter(function(x){return x<7;});
//    console.log(small);
//
//    big = a.filter(function(x,i){return i%2==0;});
//    console.log(big);

}
