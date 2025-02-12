document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("aside ul li a");
    const logoutBtn = document.getElementById("logout");

    // Navegación dentro del dashboard (cambio entre secciones)
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.id.replace("Link", "Section");
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove("hidden");
                } else {
                    section.classList.add("hidden");
                }
            });
        });
    });

    // Gestión de autenticación y credenciales
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            const credentials = {
                admin: "admin123",
                user: "user123",
            };

            if (credentials[username] && credentials[username] === password) {
                localStorage.setItem("role", username);
                if (username === "admin") {
                    window.location.href = "dashboard_admin.html";
                } else {
                    window.location.href = "dashboard_user.html";
                }
            } else {
                errorMessage.textContent = "Invalid username or password. Please try again.";
            }
        });
    }

    // Protección de rutas: Redirigir usuarios no autenticados al login
    const role = localStorage.getItem("role");
    if (role) {
        if (document.body.id === "adminDashboard" && role !== "admin") {
            window.location.href = "index.html";
        }
        if (document.body.id === "userDashboard" && role !== "user") {
            window.location.href = "index.html";
        }
    } else if (document.body.id !== "loginPage") {
        window.location.href = "index.html";
    }

    // Logout: Limpiar credenciales y redirigir a login
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("role");
            window.location.href = "index.html";
        });
    }

    // Simulación de vulnerabilidad y solución segura
    const secureCheckoutBtn = document.getElementById("secureCheckout");

    if (secureCheckoutBtn) {
        secureCheckoutBtn.addEventListener("click", () => {
            alert("Secure Checkout: Token handled in headers instead of URL.");
        });
    }
});
