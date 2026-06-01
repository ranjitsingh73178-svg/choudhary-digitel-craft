// ======================================================
// CHOUDHARY DIGITAL CRAFT - app.js
// Main Frontend Script
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Choudhary Digital Craft Loaded");

    initNavbar();
    initSearch();
    initLogin();
    initRegister();

});

// =========================
// Navbar Scroll Effect
// =========================
function initNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

}

// =========================
// Toast Notification
// =========================
function showToast(message, type = "info") {

    let container = document.getElementById("toast-container");

    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");

    toast.className = `toast ${type}`;
    toast.innerHTML = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);

}

// =========================
// Login System
// =========================
function initLogin() {

    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const email =
            document.getElementById("loginEmail").value;

        const password =
            document.getElementById("loginPassword").value;

        const user =
            JSON.parse(localStorage.getItem("cdc_user"));

        if (!user) {
            showToast("User not found", "error");
            return;
        }

        if (
            user.email === email &&
            user.password === password
        ) {

            localStorage.setItem(
                "cdc_logged_in",
                "true"
            );

            showToast("Login Successful", "success");

            setTimeout(() => {
                window.location.href =
                    "dashboard.html";
            }, 1000);

        } else {

            showToast(
                "Invalid Email or Password",
                "error"
            );

        }

    });

}

// =========================
// Register System
// =========================
function initRegister() {

    const form =
        document.getElementById("registerForm");

    if (!form) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const user = {
            name,
            email,
            password
        };

        localStorage.setItem(
            "cdc_user",
            JSON.stringify(user)
        );

        showToast(
            "Registration Successful",
            "success"
        );

        setTimeout(() => {
            window.location.href =
                "login.html";
        }, 1000);

    });

}

// =========================
// Logout
// =========================
function logout() {

    localStorage.removeItem(
        "cdc_logged_in"
    );

    showToast("Logged Out", "info");

    setTimeout(() => {

        window.location.href =
            "login.html";

    }, 1000);

}

// =========================
// Search Function
// =========================
function initSearch() {

    const searchInput =
        document.getElementById("searchInput");

    if (!searchInput) return;

    searchInput.addEventListener("keyup", () => {

        const value =
            searchInput.value.toLowerCase();

        const cards =
            document.querySelectorAll(".card");

        cards.forEach(card => {

            const text =
                card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// =========================
// Dashboard Check
// =========================
function checkLogin() {

    const logged =
        localStorage.getItem(
            "cdc_logged_in"
        );

    if (!logged) {

        window.location.href =
            "login.html";

    }

}

// =========================
// User Profile
// =========================
function loadUser() {

    const user =
        JSON.parse(
            localStorage.getItem(
                "cdc_user"
            )
        );

    const username =
        document.getElementById(
            "username"
        );

    if (
        user &&
        username
    ) {
        username.innerText =
            user.name;
    }

}