const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault(); // chan reload
  const fullName = document.getElementById("fullName").value; // data input
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const newUser = {
    name: fullName,
    email,
    password,
  };
  if (!email) {
    alert("Nhap email");
    return;
  }
  axios
    .post("http://localhost:3000/register", newUser)
    .then(() => {
      location.replace("index.html");
      alert("Đăng ký thành công");
    })
    .catch(() => {
      alert("Đăng ký thất bại");
    });
});
