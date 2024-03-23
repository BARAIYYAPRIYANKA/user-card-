// Check if user information is already stored in local storage
const storedUserInfo = localStorage.getItem("userInformation");

if (storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);

    // Display user information in the card
    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
   
}else{
    storeUserInfo();
}

// Function to store user information in local storage
function storeUserInfo() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");

    const userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
    };

    // Store user information in local storage as a JSON string
    localStorage.setItem("userInformation", JSON.stringify(userInfo));

    // Display user information in the card
    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
}

