// akun bawaan
const DEFAULT_USERS = [
 { username:"admin", password:"admin123", role:"owner" }
];

function getUsers(){
 return JSON.parse(localStorage.getItem("rezonexd_users") || "[]");
}

function saveUsers(u){
 localStorage.setItem("rezonexd_users", JSON.stringify(u));
}

function saveSession(u){
 localStorage.setItem("rezonexd_session", JSON.stringify(u));
}

function login(){
 let u = login_user.value.trim();
 let p = login_pass.value.trim();
 if(!u || !p) return alert("Isi username & password");

 let users = [...DEFAULT_USERS, ...getUsers()];
 let found = users.find(x=>x.username===u && x.password===p);
 if(!found) return alert("Login gagal");

 saveSession({username:found.username, role:found.role||"user"});
 location.href="../index.html";
}

function register(){
 let u = reg_user.value.trim();
 let p = reg_pass.value.trim();
 let d = reg_dob.value;
 if(!u || !p || !d) return alert("Lengkapi data");

 let users = getUsers();
 if(users.find(x=>x.username===u))
  return alert("Username sudah digunakan");

 users.push({username:u,password:p,dob:d});
 saveUsers(users);

 alert("Akun berhasil dibuat, silakan login");
 showLogin();
}

function showSignup(){
 loginBox.classList.add("hidden");
 signupBox.classList.remove("hidden");
}

function showLogin(){
 signupBox.classList.add("hidden");
 loginBox.classList.remove("hidden");
   }
