async function createPayment(
    amount
) {

    const response =
    await fetch(

        "http://localhost:5000/create-order",

        {

            method: "POST",

            headers: {

                "Content-Type":
                "application/json"

            },

            body: JSON.stringify({

                amount

            })

        }

    );

    const data =
    await response.json();

    alert(
        "Order Created"
    );

    console.log(
        data
    );

}