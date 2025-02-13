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
                if (username === "admin") {
                    window.location.href = "dashboard_admin.html";
                } else {
                    window.location.href = "dashboard_user.html";
                }
            } else {
                errorMessage.textContent = "Invalid credentials.";
            }
        });
    }

    // ✅ Fix: Only Redirect When Necessary
    const role = localStorage.getItem("role");
    if (!role) {
        if (document.body.id !== "loginPage") {
            window.location.href = "index.html";
        }
    } else {
        if (document.body.id === "adminDashboard" && role !== "admin") {
            window.location.href = "index.html";
        }
        if (document.body.id === "userDashboard" && role !== "user") {
            window.location.href = "index.html";
        }
    }

    // ✅ Logout Functionality
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("role");
            window.location.href = "index.html";
        });
    }

    // ✅ SQL Injection Simulation
    const searchTransaction = document.getElementById("searchTransaction");
    if (searchTransaction) {
        searchTransaction.addEventListener("click", () => {
            const input = document.getElementById("transactionSearch").value;
            const transactionTable = document.getElementById("transactionTable");
            const transactionResults = document.getElementById("transactionResults");
            transactionResults.innerHTML = "";

            if (input === "' OR '1'='1") {
                transactionResults.innerHTML += `
                    <tr><td>10001</td><td>$200</td><td>Completed</td></tr>
                    <tr><td>10002</td><td>$450</td><td>Pending</td></tr>
                    <tr><td>10003</td><td>$1000</td><td>Failed</td></tr>
                `;
                document.getElementById("searchResult").innerHTML = "<b>🚨 SQL Injection Detected! All transactions displayed.</b>";
                transactionTable.classList.remove("hidden");

                // ✅ Log Injection in Admin Dashboard
                const injectionLog = document.getElementById("injectionLog");
                if (injectionLog) {
                    injectionLog.innerHTML += `<li>Injection Attempt: ${input}</li>`;
                }
            } else if (input === "12345") {
                transactionResults.innerHTML = `<tr><td>12345</td><td>$500</td><td>Completed</td></tr>`;
                document.getElementById("searchResult").innerHTML = "✅ Secure Query Executed! Transaction found.";
                transactionTable.classList.remove("hidden");
            } else {
                document.getElementById("searchResult").textContent = "❌ No results found.";
                transactionTable.classList.add("hidden");
            }
        });
    }
});
