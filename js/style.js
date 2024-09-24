// Account balance and tracking donations
let accountBalance = 5500;
const accountBalanceElement = document.getElementById('account-balance');

function donate(location) {
    let donationInput = document.getElementById(`donation-amount-${location}`).value;
    let donationAmount = parseInt(donationInput);
    let currentDonation = document.getElementById(`donation-${location}`);

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount!");
        return;
    }

    if (donationAmount > accountBalance) {
        alert("Insufficient balance!");
        return;
    }

    // Update donation and balance
    accountBalance -= donationAmount;
    accountBalanceElement.textContent = accountBalance + " BDT";
    currentDonation.textContent = (parseInt(currentDonation.textContent) + donationAmount) + " BDT";

    // Add to history
    let historyItem = document.createElement('p');
    let date = new Date();
    historyItem.textContent = `${date.toLocaleString()}: Donated ${donationAmount} BDT to ${location.charAt(0).toUpperCase() + location.slice(1)}`;
    document.getElementById('history-list').appendChild(historyItem);

    alert("Donation successful!");
}

// Toggle Donation and History Section
document.getElementById('donation-btn').addEventListener('click', () => {
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});

document.getElementById('history-btn').addEventListener('click', () => {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
});