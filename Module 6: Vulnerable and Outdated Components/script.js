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

    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("role");
            window.location.href = "index.html";
        });
    }

    // ✅ Check Library Version
    const checkLibraryVersionBtn = document.getElementById("checkLibraryVersion");
    const libraryVersionResult = document.getElementById("libraryVersionResult");
    const runSecurityTestBtn = document.getElementById("runSecurityTest");
    const securityTestResult = document.getElementById("securityTestResult");
    const updateLibraryBtn = document.getElementById("updateLibrary");
    const updateResult = document.getElementById("updateResult");
    const securityLog = document.getElementById("securityLog");

    if (checkLibraryVersionBtn) {
        checkLibraryVersionBtn.addEventListener("click", () => {
            libraryVersionResult.innerHTML = `⚠️ Current Library Version: v1.2.3 (Vulnerable)`;
            runSecurityTestBtn.classList.remove("hidden");
        });
    }

    if (runSecurityTestBtn) {
        runSecurityTestBtn.addEventListener("click", () => {
            securityTestResult.innerHTML = `❌ Security Test Failed: XSS vulnerability detected in v1.2.3`;
            updateLibraryBtn.classList.remove("hidden");
            securityLog.innerHTML += `<li>❌ Outdated Component Detected: v1.2.3 (Vulnerable)</li>`;
        });
    }

    if (updateLibraryBtn) {
        updateLibraryBtn.addEventListener("click", () => {
            libraryVersionResult.innerHTML = `✅ Current Library Version: v2.0.0 (Secure)`;
            securityTestResult.innerHTML = `✅ Security Test Passed: No vulnerabilities detected`;
            updateResult.innerHTML = `✔ Library successfully updated!`;
            securityLog.innerHTML += `<li>✅ Component Updated to v2.0.0 (Secure)</li>`;
            updateLibraryBtn.classList.add("hidden");
        });
    }
});
