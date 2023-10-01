function dowCre() {
    var element = document.getElementById('cremation-card');
    html2pdf(element, {
        margin: 0,
        filename: 'Funeral.pdf',
        image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}
function dowRom() {
    var element = document.getElementById('romantic-card');
    html2pdf(element, {
        margin: 0,
        filename: 'Romantic.pdf',
        image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}
function dowWsh() {
    var element = document.getElementById('wish-card');
    html2pdf(element, {
        margin: 0,
        filename: 'Wish.pdf',
        image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}
function displayInput() {
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var rsvp = document.getElementById('rsvp').value;
    var cre_name = document.getElementById('cre-name');
    var cre_details = document.getElementById('cre-details');
    var cre_rsvp = document.getElementById('cre-yourdetails');
    var displayField = document.getElementById('display');
    cre_name.innerHTML = name;
    cre_details.innerHTML = message;
    cre_rsvp.innerHTML = rsvp;
    var rom_name = document.getElementById('rom-name');
    var rom_details = document.getElementById('rom-details');
    var rom_yourdetails = document.getElementById('rom-yourdetails');
    rom_name.innerHTML = name;
    rom_details.innerHTML = message;
    rom_yourdetails.innerHTML = rsvp;
    var wsh_name = document.getElementById('wsh-name');
    var wsh_details = document.getElementById('wsh-details');
    var wsh_rsvp = document.getElementById('wsh-yourdetails');
    wsh_name.innerHTML = name;
    wsh_details.innerHTML = message;
    wsh_rsvp.innerHTML = rsvp;
}
function simulateSubmit() {
    document.getElementById("loader").style.display = "flex";
    document.querySelector(".loading-text").style.display = "block";
    document.getElementById("content").classList.add("hide");
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        document.querySelector(".loading-text").style.display = "none";
        document.getElementById("content").classList.remove("hide");
    }, 2000);
}
function changeTheme() {
    const themeButtons = document.querySelectorAll('.theme-button');
    themeButtons.forEach(button => {
        button.style.display = 'none';
    });
    const selectedTheme = document.getElementById('themeSelector').value;
    const themeButton = document.getElementById(`${selectedTheme}Theme`);
    themeButton.style.display = 'block';
}
function validateForm() {
    var form = document.getElementById("userForm");
    if (form.checkValidity()) {
        simulateSubmit();
        displayInput();
    } else {
        form.reportValidity();
    }
}