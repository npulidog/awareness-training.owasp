document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const credentials = { admin: "admin123", user: "user123" };

            if (credentials[username] && credentials[username] === password) {
                localStorage.setItem("role", username);
                window.location.href = username === "admin" ? "dashboard_admin.html" : "dashboard_user.html";
            } else {
                errorMessage.textContent = "Invalid credentials.";
            }
        });
    }

    const role = localStorage.getItem("role");
    if (!role && document.body.id !== "loginPage") {
        window.location.href = "index.html";
    } else {
        if (document.body.id === "adminDashboard" && role !== "admin") window.location.href = "index.html";
        if (document.body.id === "userDashboard" && role !== "user") window.location.href = "index.html";
    }

    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("role");
            window.location.href = "index.html";
        });
    }

    // ✅ Sidebar Navigation: Ensure "Account Security" is shown first
    document.querySelectorAll(".content").forEach(section => section.classList.add("hidden"));
    document.getElementById("securityIssueSection").classList.remove("hidden");

    const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelectorAll(".content").forEach(section => section.classList.add("hidden"));
            const targetSection = document.getElementById(link.id.replace("Link", "Section"));
            if (targetSection) targetSection.classList.remove("hidden");
        });
    });

    const changePasswordBtn = document.getElementById("changePassword");
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener("click", () => {
            document.getElementById("passwordChangeResult").innerHTML = "⚠️ Password changed **without verification**! This is insecure.";
            const log = document.getElementById("passwordChangeLog");
            if (log) {
                log.innerHTML += `<li>❌ Insecure password change detected.</li>`;
            }
        });
    }

    const changePasswordSecureBtn = document.getElementById("changePasswordSecure");
    if (changePasswordSecureBtn) {
        changePasswordSecureBtn.addEventListener("click", () => {
            const oldPassword = document.getElementById("oldPassword").value.trim();
            if (oldPassword !== "user123") {
                document.getElementById("passwordChangeSecureResult").innerHTML = "❌ Invalid old password. Password change failed.";
            } else {
                document.getElementById("passwordChangeSecureResult").innerHTML = "✅ Password changed securely.";
            }
        });
    }
});
