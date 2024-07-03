function askName() {
    var userName = prompt("Please enter your name:");
    if (userName) {
        document.getElementById('welcome-message').innerText = "Hi " + userName + ", Welcome To Website";
    }
}

function submitForm() {
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var message = document.getElementById('message').value;
    var currentTime = new Date().toString();

    document.getElementById('currentTime').innerText = "Current time: " + currentTime;
    document.getElementById('outputName').innerText = "Nama: " + name;
    document.getElementById('outputDob').innerText = "Tanggal Lahir: " + dob;
    document.getElementById('outputGender').innerText = "Jenis Kelamin: " + gender;
    document.getElementById('outputMessage').innerText = "Pesan: " + message;
}
