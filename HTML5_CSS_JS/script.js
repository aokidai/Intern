/* eslint-env es6 */
/* eslint-disable */
const users = ["Admin", "UserA", "UserB"];
const pass = ["Admin", "1234", "4231"];
function checkLogin(){
	if(document.frmLogin.txtusername.value==""){
		alert("Nhap username!");
		document.form.txtUsername.focus();
		return;
	}
	if(document.frmLogin.txtpassword.value==""){
		alert("Nhap password!");
		document.form.txtPassword.focus();
		return;
	}

	let ulen = users.length;
	let plen = pass.length;
	let tmp=-1;
	for(i = 0; i<ulen; i++){
		if(document.frmLogin.txtusername.value==users[i])
		{
			for(y = 0; y<plen; y++){
				if(document.frmLogin.txtpassword.value==pass[y]){
					alert("Đúng tài khoản mật khẩu");				tmp=0;
				}
			}
		}

	}
	if(tmp==-1)
		alert("Sai tài khoản mật khẩu");
}
