document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    let securityLoggingEnabled = false;

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
                if (securityLoggingEnabled) {
                    logSecurityEvent(`❌ Failed login attempt with username: ${username}`);
                }
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

    const failedLoginBtn = document.getElementById("failedLoginAttempt");
    const accessAdminBtn = document.getElementById("accessAdminPanel");
    const modifyTransactionBtn = document.getElementById("modifyTransaction");
    const enableLoggingBtn = document.getElementById("enableLogging");
    const attackResult = document.getElementById("attackResult");
    const secureFixResult = document.getElementById("secureFixResult");

    if (failedLoginBtn) {
        failedLoginBtn.addEventListener("click", () => {
            attackResult.innerHTML = `❌ Failed login attempt detected!`;
            if (securityLoggingEnabled) {
                logUserSecurityEvent(`❌ Failed login attempt.`);
                logAdminSecurityEvent(`❌ Failed login attempt recorded.`);
            }
        });
    }

    if (accessAdminBtn) {
        accessAdminBtn.addEventListener("click", () => {
            attackResult.innerHTML = `❌ Unauthorized admin access attempt detected!`;
            if (securityLoggingEnabled) {
                logUserSecurityEvent(`❌ Unauthorized access attempt.`);
                logAdminSecurityEvent(`❌ Unauthorized admin access attempt recorded.`);
            }
        });
    }

    if (modifyTransactionBtn) {
        modifyTransactionBtn.addEventListener("click", () => {
            attackResult.innerHTML = `❌ Transaction modified without authorization!`;
            if (securityLoggingEnabled) {
                logUserSecurityEvent(`❌ Transaction modification detected.`);
                logAdminSecurityEvent(`❌ Unauthorized transaction modification recorded.`);
            }
        });
    }

    if (enableLoggingBtn) {
        enableLoggingBtn.addEventListener("click", () => {
            securityLoggingEnabled = !securityLoggingEnabled;
            if (securityLoggingEnabled) {
                enableLoggingBtn.textContent = "Disable Logging & Monitoring";
                secureFixResult.innerHTML = `✅ Security logging is now enabled!`;
                logAdminSecurityEvent(`✅ Security logging enabled.`);
            } else {
                enableLoggingBtn.textContent = "Enable Logging & Monitoring";
                secureFixResult.innerHTML = `❌ Security logging is disabled.`;
                logAdminSecurityEvent(`❌ Security logging disabled.`);
            }
        });
    }

    function logUserSecurityEvent(message) {
        const userSecurityLog = document.getElementById("userSecurityLog");
        if (userSecurityLog) {
            const logEntry = document.createElement("li");
            logEntry.textContent = message;
            userSecurityLog.appendChild(logEntry);
        }
    }

    function logAdminSecurityEvent(message) {
        const securityLog = document.getElementById("securityLog");
        if (securityLog) {
            const logEntry = document.createElement("li");
            logEntry.textContent = message;
            securityLog.appendChild(logEntry);
        }
    }
});
