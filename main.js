// Step1: Capture the elements of the website
const name_input = document.querySelector(".name-input");
const message_input = document.querySelector(".message-input");
const submitBtn = document.querySelector(".submit-btn");
const greetResponses = document.querySelector("#greet-responses");

// Step2: Setup an Event Listener for Submit Button
submitBtn.addEventListener("click", function () {
	// Step3: Take the data from the captured elements
	const name = name_input.value;
	const message = message_input.value;

	if (name.length > 0 && message.length > 0) {
		// Success Block - Create the black card and insert it to the gree-responses div element
		greetResponses.innerHTML += `
            <div class="card">
                <div class="greet-name"> ${name} </div>
                <div class="greet-message"> ${message} </div>
            </div>
        `;

		// Clear the input boxes
		name_input.value = "";
		message_input.value = "";
	} else {
		// Failure block
		alert("Both are required fields!!");
	}
});

// Clear all cards function
const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", function () {
	greetResponses.innerHTML = "";
});
