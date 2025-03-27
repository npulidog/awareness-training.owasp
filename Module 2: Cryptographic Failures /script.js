document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", (event) => {
            event.preventDefault();
            localStorage.clear(); // Clear user session data
            window.location.href = "index.html"; // Redirect to login
        });
    }

    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    let strongHashingEnabled = false;
    const bcryptHash = "$2b$10$yZKN6r7ZrYcRTF1T6G8RA.TFVs7i5frnFqDj1DZyRJmlIb.8i9E6e"; // bcrypt-hashed "user123"
    const weakHash = "5f4dcc3b5aa765d61d8327deb882cf99"; // MD5 of "password"

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            if (username === "user" && password === "user123") {
                localStorage.setItem("role", "user");
                window.location.href = "dashboard_user.html";
            } else if (username === "admin" && password === "admin123") {
                localStorage.setItem("role", "admin");
                window.location.href = "dashboard_admin.html";
            } else {
                errorMessage.textContent = "❌ Invalid credentials.";
                logSecurityEvent(`❌ Failed login attempt for user: ${username}`);
            }
        });
    }

    const storedPasswordHash = document.getElementById("storedPasswordHash");
    if (storedPasswordHash) {
        storedPasswordHash.textContent = weakHash;
    }

    const crackPasswordBtn = document.getElementById("crackPassword");
    const crackResult = document.getElementById("crackResult");

    if (crackPasswordBtn) {
        crackPasswordBtn.addEventListener("click", () => {
            if (!strongHashingEnabled) {
                crackResult.innerHTML = `❌ Password cracked: "password" (MD5 is weak!)`;
                logSecurityEvent(`❌ Weak password cracked.`);
            } else {
                crackResult.innerHTML = `✅ Crack attempt failed! bcrypt is secure.`;
                logSecurityEvent(`✅ Secure password hashing prevented cracking.`);
            }
        });
    }

    const enableStrongHashingBtn = document.getElementById("enableStrongHashing");
    const secureFixResult = document.getElementById("secureFixResult");

    if (enableStrongHashingBtn) {
        enableStrongHashingBtn.addEventListener("click", () => {
            strongHashingEnabled = true;
            storedPasswordHash.textContent = bcryptHash;
            secureFixResult.innerHTML = `✅ bcrypt Hashing Enabled! Passwords are now secure.`;
            logSecurityEvent(`✅ Secure password hashing activated.`);
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
