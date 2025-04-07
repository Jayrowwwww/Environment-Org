// Menu button(Mobile view)
document.addEventListener("click", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });
});

// donation costum amount
const donationSelect = document.getElementById('donation-amount');
const customAmountSection = document.getElementById('custom-amount-section');
const customAmountInput = document.getElementById('custom-amount');

donationSelect.addEventListener('change', () => {
    if (donationSelect.value === 'custom') {
        customAmountSection.classList.remove('hidden');
    } else {
        customAmountSection.classList.add('hidden');
        customAmountInput.value = ''; // Clear custom amount
    }
});

// Simulate getting the donation details from the backend or the previous form
const donationAmount = new URLSearchParams(window.location.search).get('amount');
const donorName = new URLSearchParams(window.location.search).get('name');
const donorEmail = new URLSearchParams(window.location.search).get('email');

    if (donationAmount) {
    document.getElementById('donation-amount').textContent = donationAmount;
    }
    if (donorName) {
    document.getElementById('donor-name').textContent = donorName;
    }
    if (donorEmail) {
    document.getElementById('donor-email').textContent = donorEmail;
    }