document.addEventListener("DOMContentLoaded", function () {
    const infoForm = document.getElementById("infoForm");
    const dashboard = document.getElementById("dashboard");
    const userName = document.getElementById("userName");
    const userPhone = document.getElementById("userPhone");
    const progress = document.getElementById("progress");

    infoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;

        // Simulate user registration and dashboard data (replace with actual backend code).
        const userData = {
            name: name,
            phone: phone,
            progress: Math.floor(Math.random() * 101) // Simulated progress.
        };

        // Update the user dashboard.
        userName.textContent = userData.name;
        userPhone.textContent = userData.phone;
        progress.textContent = userData.progress + "%";
        dashboard.style.display = "block";
    });
});
