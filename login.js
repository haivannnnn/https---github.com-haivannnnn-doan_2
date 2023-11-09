let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let newpassword = document.getElementById("new-password");
let confirmpassword = document.getElementById("confirm-password");
let btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validation();
});
const setError = (ele, msg) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = msg;
  box.classList.add("error");
  box.classList.remove("success");
};
const setSuccess = (ele) => {
  let box = ele.parentElement;
  let error = box.querySelector(".error");

  error.innerText = "";
  box.classList.add("success");
  box.classList.remove("error");
};
const mailFormat = (e) => {
  const re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email);;
  return re;
}
const userFormat = (u) => {
    const re = /[^0-9]/;
    return re.test(u);
}
btn.addEventListener("click", () => {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    itemsList = [];
  } else {
    itemsList = localItems;
  }
  itemsList.push(username.value);
  itemsList.push(email.value);
  itemsList.push(newpassword.value);
  itemsList.push(confirmpassword.value);
  localStorage.setItem("localItem", JSON.stringify(itemsList));
});
function validation() {
    let user = username.value.trim();
    let mail = email.value.trim();
    let pass1 = newpassword.value.trim();
    let pass2 = confirmpassword.value.trim();

    if(user === '') {
        setError(username, 'Bạn cần nhập Username');
    } else if (!userFormat(user)) {
        setError(username, "Username không hợp lệ");
    }else {
        setSuccess(username);
    }
    if(mail === '') {
        setError(email, 'Bạn cần nhập Email');
    // } else if (!mailFormat(mail)) {
    //     setError(email, 'Email của bạn chưa hợp lệ');
    } else {
        setSuccess(email);
    }

    if(pass1 === '') {
        setError(newpassword, 'Bạn cần nhập mật khẩu');
    } else if (pass1.length < 8 ) {
        setError(newpassword, 'Mật khẩu ít nhất có 8 ký tự.')
    } else {
        setSuccess(newpassword);
    }

    if(pass2 === '') {
        setError(confirmpassword, 'Mời bạn nhập lại mật khẩu');
    } else if (pass2 !== pass1) {
        setError(confirmpassword, "Mật khẩu không khớp");
    } else {
        setSuccess(confirmpassword);
    }}