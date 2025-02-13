document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

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

    const enableDebugModeBtn = document.getElementById("enableDebugMode");
    const disableDebugModeBtn = document.getElementById("disableDebugMode");
    const debugInfo = document.getElementById("debugInfo");
    const attackCommandInput = document.getElementById("attackCommand");
    const runAttackBtn = document.getElementById("runAttack");
    const attackResult = document.getElementById("attackResult");

    if (enableDebugModeBtn) {
        enableDebugModeBtn.addEventListener("click", () => {
            debugInfo.classList.remove("hidden");
            enableDebugModeBtn.classList.add("hidden");
            disableDebugModeBtn.classList.remove("hidden");
            console.log("❌ Debug Mode Enabled");
        });
    }

    if (disableDebugModeBtn) {
        disableDebugModeBtn.addEventListener("click", () => {
            debugInfo.classList.add("hidden");
            enableDebugModeBtn.classList.remove("hidden");
            disableDebugModeBtn.classList.add("hidden");
            console.log("✅ Debug Mode Disabled");
        });
    }

    if (runAttackBtn) {
        runAttackBtn.addEventListener("click", () => {
            if (!debugInfo.classList.contains("hidden")) {
                attackResult.innerHTML = `⚠️ Exploit Successful: Server files exposed!`;
                console.log(`❌ Exploit Attempt: ${attackCommandInput.value}`);
            } else {
                attackResult.innerHTML = `✅ Attack Blocked: Debug Mode is disabled.`;
            }
        });
    }
});
