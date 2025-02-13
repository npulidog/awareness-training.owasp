document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    let ssrfProtectionEnabled = false;
    const whitelistedURLs = ["https://api.secure.com/data", "https://payments.example.com"];

    const credentials = {
        admin: "admin123",
        user: "user123"
    };

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (credentials[username] && credentials[username] === password) {
                localStorage.setItem("role", username);
                window.location.href = username === "admin" ? "dashboard_admin.html" : "dashboard_user.html";
            } else {
                errorMessage.textContent = "❌ Invalid credentials.";
                logSecurityEvent(`❌ Failed login attempt with username: ${username}`);
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
            localStorage.removeItem("role"); // Clears session
            window.location.href = "index.html"; // Redirects to login
        });
    }

    const sendSSRFRequestBtn = document.getElementById("sendSSRFRequest");
    const ssrfInput = document.getElementById("ssrfInput");
    const ssrfResult = document.getElementById("ssrfResult");
    const enableSSRFProtectionBtn = document.getElementById("enableSSRFProtection");
    const secureFixResult = document.getElementById("secureFixResult");

    if (sendSSRFRequestBtn) {
        sendSSRFRequestBtn.addEventListener("click", () => {
            const url = ssrfInput.value.trim();

            if (!ssrfProtectionEnabled || whitelistedURLs.includes(url)) {
                ssrfResult.innerHTML = `✅ Request sent to: ${url}`;
            } else {
                ssrfResult.innerHTML = `❌ SSRF attack blocked!`;
                logSecurityEvent(`❌ Attempted unauthorized request to: ${url}`);
            }
        });
    }

    if (enableSSRFProtectionBtn) {
        enableSSRFProtectionBtn.addEventListener("click", () => {
            ssrfProtectionEnabled = true;
            secureFixResult.innerHTML = `✅ SSRF Protection Enabled!`;
            logSecurityEvent(`✅ SSRF protection activated.`);
        });
    }

    function logSecurityEvent(message) {
        const securityLog = document.getElementById("securityLog");
        if (securityLog) {
            const logEntry = document.createElement("li");
            logEntry.textContent = message;
            securityLog.appendChild(logEntry);
        }
    }
});
