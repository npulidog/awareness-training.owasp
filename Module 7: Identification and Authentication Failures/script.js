document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    const weakPasswords = ["123456", "password", "admin", "qwerty"];
    let failedAttempts = 0;
    let mfaEnabled = false;

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const credentials = { 
                admin: "admin123", 
                user: "user123" 
            };

            if (credentials[username] && credentials[username] === password) {
                localStorage.setItem("role", username);
                window.location.href = username === "admin" ? "dashboard_admin.html" : "dashboard_user.html";
            } else {
                errorMessage.textContent = "❌ Invalid credentials.";
                logSecurityEvent(`❌ Failed login attempt with username: ${username}`);
            }
        });
    }

    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("role");
            window.location.href = "index.html";
        });
    }

    const testWeakLoginBtn = document.getElementById("testWeakLogin");
    const weakLoginResult = document.getElementById("weakLoginResult");

    if (testWeakLoginBtn) {
        testWeakLoginBtn.addEventListener("click", () => {
            const passwordGuess = document.getElementById("guessPassword").value.trim();
            if (weakPasswords.includes(passwordGuess)) {
                weakLoginResult.innerHTML = `⚠️ Weak password accepted: "${passwordGuess}" (Security risk!)`;
                logSecurityEvent(`❌ Weak password used: ${passwordGuess}`);
            } else {
                weakLoginResult.innerHTML = `❌ Login failed.`;
                failedAttempts++;

                if (failedAttempts >= 5) {
                    weakLoginResult.innerHTML = `🔒 Account locked due to multiple failed attempts!`;
                    logSecurityEvent(`❌ Account locked after ${failedAttempts} failed attempts.`);
                }
            }
        });
    }

    const enableMFAButton = document.getElementById("enableMFA");
    const secureFixResult = document.getElementById("secureFixResult");

    if (enableMFAButton) {
        enableMFAButton.addEventListener("click", () => {
            mfaEnabled = true;
            secureFixResult.innerHTML = `✅ Multi-Factor Authentication (MFA) Enabled.`;
            logSecurityEvent(`✅ MFA enabled for better security.`);
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
