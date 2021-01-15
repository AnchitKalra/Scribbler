function deletePost1() {
     document.getElementById('Post1').remove();//removing the first post
     document.getElementById('name1').remove();
     var a = document.getElementById('post3');
     if(a!= null || a!= '') {
          var b = document.getElementsByClassName('box1')[0];
          
          var c = document.getElementById('name3');
          b.appendChild(c);
          b.appendChild(a);
          var d = document.getElementById('post5');
          if(d!= null || d!= '') {
               var e = document.getElementsByClassName('box2')[0];
               var f = document.getElementById('name5');
               e.appendChild(f);
               e.appendChild(d);
          }
     }
     
}
function deletePost2() {
     document.getElementById('post2').remove();
    document.getElementById('name2').remove();


    var a = document.getElementById('post3');
    if(a!= null || a!= '') {
         var b = document.getElementsByClassName('box1')[0];
         
         var c = document.getElementById('name3');
         b.appendChild(c);
         b.appendChild(a);
         var d = document.getElementById('post5');
         if(d!= null || d!= '') {
              var e = document.getElementsByClassName('box2')[0];
              var f = document.getElementById('name5');
              e.appendChild(f);
              e.appendChild(d);
         }
    }
    
}
function deletePost3() {
     document.getElementById('post3').remove();
     document.getElementById('name3').remove();

     var a = document.getElementById('post5');
     if(a!= null || a!= '') {
          var b = document.getElementsByClassName('box2')[0];
          
          var c = document.getElementById('name5');
          b.appendChild(c);
          b.appendChild(a);
          
     }
     
    
}
function deletePost4() {
     document.getElementById('post4').remove();
     document.getElementById('name4').remove();

     var a = document.getElementById('post5');
     if(a!= null || a!= '') {
          var b = document.getElementsByClassName('box2')[0];
          
          var c = document.getElementById('name5');
          b.appendChild(c);
          b.appendChild(a);
          
     }
    
}
function deletePost5() {
     document.getElementById('post5').remove();
     document.getElementById('name5').remove();
    
}
function boxShadow(id) {
document.getElementById(id).style = 'box-shadow: 5px 10px;';
}
showPost1();
function showPost1() {
     var a = 'Since JavaScript does not have any type-checking,/n'+ 
     'either of these keywords can be used to declare a variable /n of any type (datatype) in JavaScript.'+
      'Though all the three /n keywords are used for the same purpose,/n they are different.';
      var c = a.split('/n');
     
     var i = 2;
     for(var d= 0; d <= i; d++) {
         document.getElementById('firstPost').innerHTML += c[d] + '<br>';
     }
         


}
showPost2('secondPost');
function showPost2(id) {
     var a = 'One of the biggest challenges in software /n development is time. It’s something /n we can’t easily get more of, but linting /n can help us make the most out of the /n time we have.';
     var c = a.split('/n');
     
     var i = 2;
     for(var d= 0; d <= i; d++) {
         document.getElementById(id).innerHTML += c[d] + '<br>';
     }
}
showPost4();
function showPost4() {
     var a = 'When code is not describable using words, /n most people have to do some mental mapping to turn it in /n to words. This wastes mental energy, and you run the risk /n of getting the mapping wrong. Different people /n will map to different words, which /n'+
     'leads to confusion when discussing the code.';
     var c = a.split('/n');
     
     var i = 2;
     for(var d= 0; d <= i; d++) {
         document.getElementById('fourthPost').innerHTML += c[d] + '<br>';
     }
}
showPost5();
function showPost5() {
     var a = 'Node.js treats each JavaScript file as a separate /n module. For instance, if you have a file containing /n some code and this file is named xyz.js, /n then this file is treated as a module /n in Node, and you can say that you’ve /n created a module '+
     'named xyz.';
     var c = a.split('/n');
     
     var i = 2;
     for(var d= 0; d <= i; d++) {
         document.getElementById('fifthPost').innerHTML += c[d] + '<br>';
     }
}
showPost3();
function showPost3() {
     var a = "If you're a developer with a Twitter account, you've /n already seen everyone and their cat start /n a blog, YouTube channel, or Patreon./n We all want to become stars, /n or at the very least, /n a recognizable name in the industry.";
     var c = a.split('/n');
     
     var i = 2;
     for(var d= 0; d <= i; d++) {
         document.getElementById('thirdPost').innerHTML += c[d] + '<br>';
     }
}