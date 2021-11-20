let idtext= '';
let pwtext= '';
function clickidtext(){
    idtext = document.getElementById("id");
    idtext.addEventListener("focus", bgcolor);
    idtext.addEventListener("blur", myfunc);
}
function clickpwtext(){
    pwtext = document.getElementById("pw");
    pwtext.addEventListener("focus", bgcolor1);
    pwtext.addEventListener("blur", myfunc1);
}

function bgcolor(){
    idtext.style.backgroundColor="#F3E6BD";
    idtext.style.color="#8c6d62"
}
function myfunc(){
    idtext.style.backgroundColor="#F0F0F0";
    idtext.style.color="#1d1102"
}

function bgcolor1(){
    pwtext.style.backgroundColor="#F3E6BD";
    pwtext.style.color="#8c6d62"
}
function myfunc1(){
    pwtext.style.backgroundColor="#F0F0F0";
    pwtext.style.color="#1d1102"
}


function top_menu(){
    alert("페이지가 준비중입니다.");}

function rja(){
    alert("페이지가 준비중입니다.");}            

function login(){
    let id = document.getElementById("id").value;
    let pw = document.getElementById("pw").value;
    if(id==="admin"){
        if(pw=="1234"){
            document.getElementById("loginbox").innerHTML=
            "<p> 환영합니다.<br> <strong>" + id + "</strong> 님이 로그인하였습니다 </p>";
            alert("로그인하였습니다.");
        } else {
            alert("비밀번호를 확인하세요");
        }
    }else{
        alert("회원가입을 하세요");
    }





}
function join(){
    alert("페이지가 준비중입니다.");
    //document.getElementById("join").innerHTML="<p> 페이지가 준비중입니다. </p>"
}

function kakao(){
    alert("서비스가 준비중입니다.");
    //document.getElementById("kakao").innerHTML="<p> 서비스가 준비중입니다. </p>"
}
function inquiry(){
    alert("서비스가 준비중입니다.");
    //document.getElementById("inquiry").innerHTML="<p> 서비스가 준비중입니다. </p>"
}
function notice(){
    alert("페이지가 준비중입니다.");
}


function scrollToTop(){
    //스크롤 속도를 빠르게 하려면 이동 간격 시간을 줄이거나, 이동 크기 픽셀을 늘리면 됩니다.
    var between = 16; // 이동 간격 시간
    var scroll = window.setInterval(function() {
      var pos = window.pageYOffset;
      var step = 100; // 이동 크기 픽셀
      if ( pos > 0 ) {
            window.scrollTo( 0, pos - step );
        } else {
          window.clearInterval( scroll );
        }
    }, between);
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('gotop').addEventListener('click',function(){
        scrollToTop();
    });
});

