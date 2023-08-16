const rentalHandler = async (event) => {
    event.preventDefault();

    console.log('running rental.js');
    const vId = document.querySelector('#vId');

    const response = await fetch(`/rental/${vId}`, {
        method: 'PUT',
        body: JSON.stringify({isAvailable: false}),
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace('/rental');
    }
    else {
        alert("Failed to rent");
    }

};

document
.querySelector('#rentButton')
.addEventListener("click", rentalHandler)