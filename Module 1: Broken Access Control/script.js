document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("aside ul li a");
    const addUserBtn = document.getElementById("addUserBtn");
    const addUserForm = document.getElementById("addUserForm");

    // Toggle visibility of sections based on menu selection
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const targetId = link.id.replace("Link", "Section");
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove("hidden");
                } else {
                    section.classList.add("hidden");
                }
            });
        });
    });

    // Add user functionality for Admin dashboard
    if (addUserBtn && addUserForm) {
        addUserBtn.addEventListener("click", () => {
            addUserForm.classList.toggle("hidden");
        });
    }

    // Login functionality
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    const credentials = {
        admin: "admin123",
        user: "user123",
    };

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (credentials[username] && credentials[username] === password) {
                if (username === "admin") {
                    window.location.href = "dashboard_admin.html";
                } else {
                    window.location.href = "dashboard_user.html";
                }
            } else {
                errorMessage.textContent = "Invalid username or password. Please try again.";
            }
        });
    }

    // Simulate privilege escalation vulnerability
    const privilegeEscalationForm = document.getElementById("privilegeEscalationForm");
    const escalationMessage = document.getElementById("escalationMessage");

    if (privilegeEscalationForm) {
        privilegeEscalationForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const role = document.getElementById("role").value;

            if (role === "admin") {
                escalationMessage.classList.remove("hidden");
                escalationMessage.innerHTML = `
                    <strong>Vulnerability Demonstrated:</strong> You have been granted admin access! <br>
                    <a href="dashboard_admin.html" class="btn">Go to Admin Dashboard</a>
                `;
            } else {
                escalationMessage.classList.add("hidden");
                escalationMessage.textContent = "You remain a regular user.";
            }
        });
    }
});
