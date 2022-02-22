const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#confirm-pwd");

pwdConfirm.addEventListener("change", checkPwd);

function checkPwd(ev) {
	if(!!pwdConfirm.value && pwd.value != pwdConfirm.value) {
		pwd.setAttribute("unconfirmed", "");
		pwdConfirm.setAttribute("unconfirmed", "");
	} else {
		pwd.removeAttribute("unconfirmed");
		pwdConfirm.removeAttribute("unconfirmed");
	}
}