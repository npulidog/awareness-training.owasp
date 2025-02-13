document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    let cryptographicVerificationEnabled = false;

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
            localStorage.removeItem("role");
            window.location.href = "index.html";
        });
    }

    const checkUpdateBtn = document.getElementById("checkUpdate");
    const updateStatus = document.getElementById("updateStatus");
    const tamperAttackBtn = document.getElementById("runTamperAttack");
    const tamperResult = document.getElementById("tamperResult");
    const verifyUpdateBtn = document.getElementById("verifyUpdate");
    const secureFixResult = document.getElementById("secureFixResult");

    if (checkUpdateBtn) {
        checkUpdateBtn.addEventListener("click", () => {
            updateStatus.innerHTML = `⚠️ Warning: Update source is unverified!`;
            tamperAttackBtn.classList.remove("hidden");
        });
    }

    if (tamperAttackBtn) {
        tamperAttackBtn.addEventListener("click", () => {
            if (!cryptographicVerificationEnabled) {
                tamperResult.innerHTML = `❌ Malicious update applied! System compromised.`;
                logSecurityEvent(`❌ Unauthorized update installed!`);
            } else {
                tamperResult.innerHTML = `✅ Update blocked! Cryptographic signature required.`;
                logSecurityEvent(`✅ Unauthorized update attempt blocked.`);
            }
        });
    }

    if (verifyUpdateBtn) {
        verifyUpdateBtn.addEventListener("click", () => {
            cryptographicVerificationEnabled = !cryptographicVerificationEnabled;
            if (cryptographicVerificationEnabled) {
                secureFixResult.innerHTML = `✅ Cryptographic Signature Verification Enabled!`;
                logSecurityEvent(`✅ Secure update verification activated.`);
            } else {
                secureFixResult.innerHTML = `❌ Cryptographic Signature Verification Disabled. Updates can be tampered with!`;
                logSecurityEvent(`❌ Secure verification disabled. Updates are now unprotected.`);
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
