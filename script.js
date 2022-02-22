const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#confirm-pwd");

pwd.addEventListener("change", checkPwd);
pwdConfirm.addEventListener("change", checkPwd);

function checkPwd(ev) {
	if(!!pwd.value && pwd.value != pwdConfirm.value) {
		pwd.setAttribute("unconfirmed", "");
		pwdConfirm.setAttribute("unconfirmed", "");
	} else {
		pwd.removeAttribute("unconfirmed");
		pwdConfirm.removeAttribute("unconfirmed");
	}
}