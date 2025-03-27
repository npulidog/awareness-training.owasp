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
    const guessInput = document.getElementById("guessPassword");

    if (testWeakLoginBtn) {
        testWeakLoginBtn.addEventListener("click", () => {
            const passwordGuess = guessInput.value.trim();

            if (weakPasswords.includes(passwordGuess)) {
                weakLoginResult.innerHTML = `
                    ✅ <strong>Access granted!</strong><br>
                    The system accepted <em>${passwordGuess}</em> as a valid password.<br>
                    <span style="color:red;">This highlights how weak authentication exposes systems to unauthorized access.</span>
                `;
                guessInput.disabled = true;
                testWeakLoginBtn.disabled = true;
                logSecurityEvent(`❌ Weak password used: ${passwordGuess}`);
            } else {
                failedAttempts++;
                if (failedAttempts >= 5) {
                    weakLoginResult.innerHTML = `🔒 Account locked due to multiple failed attempts!`;
                    testWeakLoginBtn.disabled = true;
                    guessInput.disabled = true;
                    logSecurityEvent(`❌ Account locked after ${failedAttempts} failed attempts.`);
                } else {
                    weakLoginResult.innerHTML = `❌ Login failed. (${failedAttempts}/5 attempts used)`;
                }
            }
        });
    }

    const enableMFAButton = document.getElementById("enableMFA");
    const secureFixResult = document.getElementById("secureFixResult");

    if (enableMFAButton) {
        enableMFAButton.addEventListener("click", () => {
            mfaEnabled = true;
            const code = prompt("🔐 MFA Enabled!\nEnter the 6-digit code sent to your device:");
            if (code === "123456") {
                secureFixResult.innerHTML = `✅ MFA code verified. Strong authentication is now active.`;
                logSecurityEvent(`✅ MFA enabled and verified by user.`);
            } else {
                secureFixResult.innerHTML = `❌ Invalid MFA code. Try again.`;
                logSecurityEvent(`❌ MFA verification failed.`);
            }
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
