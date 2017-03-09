var banspans=$(".lb-banner-imgbox>span");
var banlis=$(".lb-banner-li");
var a=0;
var b;
var c;
var t=setInterval(move,2000);
function move (){
    if(a==3){
        a=0;
    }
    if(a<0){
        a=2;
    }
    if(a>2){
        a=0;
    }
    b=a+1;
    c=a+2;
    if(b==3){
        b=0;
    }
    if(c==3){
        c=0;
    }
    if(c==4){
        c=1;
    }
    banspans.className="";
    banlis.css({"width":"0.12rem","border-radius":"50%"});
    banspans[a].className="lb-banner-span1";
    banspans[b].className="lb-banner-span2";
    banspans[c].className="lb-banner-span3";
    banlis.eq(a).css({"width":"0.22rem","border-radius":"0.2rem"});
    a++;
}
// banner触摸
// touch.on('.lb-banner-imgbox', 'touchstart', function(ev){
//     ev.preventDefault();
// });
//
// var imgbox = document.getElementsByClassName("lb-banner-imgbox");
//
// touch.on(imgbox, 'swiperight', function(ev){
//     a--;
//     movem();
//     clearInterval(t);
//     setTimeout(function(){
//         var t=setInterval(move,2000);
//     },1000)
// });
//
// touch.on(imgbox, 'swipeleft', function(ev){
//     a++;
//     movem();
//     clearInterval(t);
//     setTimeout(function(){
//         var t=setInterval(move,2000);
//     },1000)
// });
//
// function movem (){
//     if(a==3){
//         a=0;
//     }
//     if(a<0){
//         a=2;
//     }
//     if(a>2){
//         a=0;
//     }
//     b=a+1;
//     c=a+2;
//     if(b==3){
//         b=0;
//     }
//     if(c==3){
//         c=0;
//     }
//     if(c==4){
//         c=1;
//     }
//     banspans.className="";
//     banlis.css({"width":"0.12rem","border-radius":"50%"});
//     banspans[a].className="lb-banner-span1";
//     banspans[b].className="lb-banner-span2";
//     banspans[c].className="lb-banner-span3";
//     banlis.eq(a).css({"width":"0.22rem","border-radius":"0.2rem"});
// }