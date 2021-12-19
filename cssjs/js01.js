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


function checkAll(){
    if(!checkUserId(form.userId.value)) {
        return false;
     }
     //유저 아이디 벨루(입력값)이 
     if(!checkPassword(form.password1.value, form.password2.value)){
        return false;
     }
     if(!checkName(form.name.value)){
        return false;
     }
     if(!checkEmail(form.email.value)){
        return false;
     }
    return true;
    //모드 트루일때 회원가입!!!
}
function checkPassword(password1, password2){
    //비밀번호가 입력되었는지ㅣ 확인
    if(!checkExistData(form.password1.value, "비밀번호를 ")){
        return false;
    }
    //비밀번호 확인에 
    if(!checkExistData(form.password2.value, "비밀번호 확인을 ")){
        return false;
    }
    const passwordRegExp= /^[a-zA-Z0-9]{4,12}$/ ; //비밀번호 유효성 검사
    if(!passwordRegExp.test(password1)){
        alert("비밀번호는 영문대소문자와 숫자 4~12자리로 입력해주세요");
        form.password1.value="";
        form.password1.focus();
        return false;
    }
    if(password1 != password2){
        alert("비밀번호가 일치하지 않습니다");
        form.password1.value =""
        form.password2.value =""
        //초기화
        form.password1.focus();
        //패스워드1로 포커스, 입력하라고...
        return false;
    }
    return true;//확인이 완련되면 
}

//패스워드 규칙이 맞는가
// 패스워드 1 2가 맞는가 체크

function checkUserId(id){
    if(!checkExistData(form.userId.value, "아이디를 ")){
        return false;
    }
    //JS의 정규표현식 ( !!!중요!!! )
    // /는 시작과 끝을 표시
    // [ ] : 문자셑 ex) [a-z]는 소문자 a~z를 입력
    // {min, max } : 문자열의 길이
    // ^ : 문장의 시작
    // $ : 문장의 끝
    const idRegExp = /^[a-zA-Z0-9]{4,12}$/ ;
    if(!idRegExp.test(id)){
        alert("아이디는 영문대소문자와 숫자 4~12자리로 입력해주세요");
        form.userId.value="";
        form.userId.focus();
        return false;
    }
    return true;
}


//checkExistData 비어 있다면 = 빈칸인지 아닌지 확인
function checkEmail(email){
    if(!checkExistData(form.email.value, "이메일을 ")){
        return false;
    }
    return true;
}
function checkName(name){
    if(!checkExistData(form.name.value, "이름을 ")){
        return false;
    }
    return true;
}
function checkExistData(value, dataName){
    if(value==""){
        alert(dataName + "입력해주세요");
        return false;
    }
    return true;
}

//확인 하는 것들이 중요하다!!!


function home(){ location.href = '/project/index.html'; }
