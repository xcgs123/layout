//请填充代码，使mySort()能使传入的参数按照从小到大的顺序显示出来。
function mySort() {
    var tags = new Array();//使用数组作为参数存储容器
    tags=Array.prototype.slice.call(arguments);
    tags.sort(function(a,b){
    	return a-b;
    });
    return tags;//返回已经排序的数组
}
 
var result = mySort(50,11,16,32,24,99,57,100);//传入参数个数不确定
console.log(result);//显示结果


/**
*请给Array本地对象增加一个原型方法，它用于删除数组条目中重复的
*条目(可能有多个)，返回值是一个包含被删除的重复条目的新数组。
*/
//方法1
Array.prototype.distinct = function() {
    var ret = [];
    for (var i = 0; i < this.length; i++)
    {
        for (var j = i+1; j < this.length;) {   
            if (this[i] === this[j]) {
                ret.push(this.splice(j, 1)[0]);
            } else {
                j++;
            }
        }
     }
     return ret;
}
//test
alert(['a','b','c','d','b','a','e'].distinct());

//方法2
Array.prototype.distinct = function (){
      var ret = [];
      for(var i=0;i<this.length;i++){
        if(this.indexOf(this[i])!=i){
            ret.push(this[i]);
        }
      }
      return ret;
  }
alert(['a','b','c','d','b','"a"','e','1','2','3','2','"3"'].distinct());