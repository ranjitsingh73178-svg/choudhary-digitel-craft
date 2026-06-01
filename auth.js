// ==========================
// REGISTER USER
// ==========================

async function registerUser(event) {

    event.preventDefault();

    const full_name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const response = await fetch(
        "http://localhost:5000/register",
        {
            method: "POST",

            headers: {
                "Content-Type":
                "application/json"
            },

            body: JSON.stringify({

                full_name,

                email,

                password

            })
        }
    );

    const data =
        await response.json();

    alert(data.message);

}

// ==========================
// LOGIN USER
// ==========================

async function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById(
            "loginEmail"
        ).value;

    const password =
        document.getElementById(
            "loginPassword"
        ).value;

    const response = await fetch(
        "http://localhost:5000/login",
        {

            method: "POST",

            headers: {

                "Content-Type":
                "application/json"

            },

            body: JSON.stringify({

                email,

                password

            })

        }
    );

    const data =
        await response.json();

    if (
        data.status === "success"
    ) {

        localStorage.setItem(
            "user",
            JSON.stringify(
                data.user
            )
        );

        window.location.href =
            "dashboard.html";

    }
    else {

        alert(
            "Invalid Login"
        );

    }

}