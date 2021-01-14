var post_1 = 'Since JavaScript does not have any type-checking,'+ 
'either of these keywords can be used to declare a variable  of any type (datatype) in JavaScript.'+
 'Though all the three  keywords are used for the same purpose, they are different.';

 var title1 = "‘let’ me be a ‘const’(ant), not a ‘var’(iable)!";

 var name1 = "Srishti Gupta";

 var i = -1;

showPost();
function showPost() {
            var a = window.location.search.split('?');
            //console.log(a[1]);
            //console.log(a[0]);
            if(a[1] == 1) {
                        document.getElementById('heading1').innerHTML = title1;
                        var name = document.getElementById('headingName');
                        name.innerHTML += name1;
                        name.innerHTML += '<button id = "edit" class = "btn btn-danger"style = "margin-left : 90%;" onclick = "editPost()">EDIT <i class="fa fa-edit"></i> </button>';
                        var b = document.getElementById('post1Text');
                        var c = document.createElement('p');
                        c.innerHTML = post_1;
                        b.appendChild(c);
                 
            }
    }

    function editPost() {
            //'button id = "update" class = "btn btn-danger"style = "margin-left : 90%;" onclick = "updatePost()">SAVE <i class="fa fa-edit"></i> </button>'
                var but = document.createElement('button');
                but.setAttribute('id', 'update');
                but.setAttribute('class','btn btn-danger');
                but.setAttribute('style', 'margin-left : 90%');
                but.setAttribute('onclick', 'updatePost()');
                but.innerHTML = 'SAVE <i class="fa fa-edit"></i>';


                document.getElementById('edit').replaceWith(but);
                var a = document.getElementById('heading1');
                var b = document.createElement('input');
                b.setAttribute('id', 'title');
                b.setAttribute('type', 'text');
                a.replaceWith(b);
                b.setAttribute('style', 'width : 100%; margin-left : 30%');
                b.value = title1;

                var c = document.getElementById('post1Text');
                var b = document.createElement('textArea');
                b.setAttribute('id', 'post');
                c.replaceWith(b);
                b.setAttribute('style', 'width : 100%;');
                b.value = post_1;       
                
    }

    function updatePost() {
           var update =  document.getElementById('update');
           update.remove();
        var name = document.getElementById('headingName');
        name.innerHTML += '<button id = "edit" class = "btn btn-danger"style = "margin-left : 90%;" onclick = "editPost()">EDIT <i class="fa fa-edit"></i> </button>';
            var a = document.getElementById('title');
            var b = document.createElement('h3');
            b.setAttribute('id', 'heading1');
            b.innerHTML = a.value;
            a.replaceWith(b);


            var c = document.getElementById('post');
            //<div id="post1Text">
             var d = document.createElement('div');
             d.setAttribute('id', 'post1Text');
             var e = document.createElement('p');
                        e.innerHTML = post.value;
                        c.replaceWith(d);
                        d.appendChild(e);


        }
        displayCount();
function displayCount() {
        i++;
        if(i === 0) {
                document.getElementById('count').innerHTML = 'Be the first one to like this!';
        }
        else if(i === 1) {
                document.getElementById('like').innerHTML = '<i class = "fa fa-thumbs-up"></i>Liked!';
                document.getElementById('count').innerHTML = i + ' person likes this!';
        }
        else {
                document.getElementById('count').innerHTML = i + ' people like this!';
        }
}
function displayComment(id) {
        var a = document.getElementById(id);
        var b = document.createElement('p');
        b.setAttribute('style', 'margin-bottom : 10px;');
        var c =  document.getElementById('0');
        b.innerHTML = c.innerHTML;
        c.innerHTML = a.value;
        c.appendChild(b);
        a.value = '';
}