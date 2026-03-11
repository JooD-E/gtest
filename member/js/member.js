function validateForm () {
    const f = document.member;

    const x = document.forms ["member"]["user_name"].value;
    if (x==null || x==""){
        alert("이름을 입력해주세요.")
        return false;
    }

    const reg_exp= new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{4,12}$");
    const match = reg_exp.exec(f.user_id.value)

    if(match==null) {
        alert("아이디는 4~12자 사이의 영문과 숫자를 조합하여 입력해주세요.");
        return false;
    }

    const reg_exp1=new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{8,30}$");
    const match1=reg_exp1.exec(f.user_password.value);

    if(match1==null){
        alert ("비밀번호는 8자 이상 영문과 숫자를 조합하여 입력해주세요.");
        return false;
    }

    const x1 = document.forms ["member"]["user_password"].value
    const x2 = document.forms ["member"]["user_password_chk"].value
    if(x1!=x2){
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    }

    const t = document.forms["member"]["user_tel"].value
    if( t==null || t==""){
        alert("전화번호를 입력해주세요.");
        return false;
    }

    const e = document.forms["member"]["user_email"].value
    if(e==null || e==""){
        alert("이메일 주소를 입력해주세요.");
        return false;
    }

    const ad = document.forms["member"]["user_add"].value
    if(ad==null || ad==""){
        alert("배송을 위한 주소를 입력해주세요.");
        return false;
    }


    alert("폼 제출 성공! (테스트용, PHP 없이 동작");
    document.member.reset();
    return false;


}