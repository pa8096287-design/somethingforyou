const naBtn = document.getElementById('naBtn');
const haBtn = document.getElementById('haBtn');
const successModal = document.getElementById('successModal');

function moveButton() {
    const x = Math.random() * (window.innerWidth - naBtn.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - naBtn.offsetHeight - 50);
    naBtn.style.position = 'fixed';
    naBtn.style.left = `${x}px`;
    naBtn.style.top = `${y}px`;
}
naBtn.addEventListener('mouseover', moveButton);
naBtn.addEventListener('touchstart', moveButton);
naBtn.addEventListener('click', moveButton);

// YAHAN APNA NUMBER DALO
const tumharaNumber = "916395541408"; // apna WhatsApp number likho 91 ke sath

haBtn.addEventListener('click', () => {
    successModal.style.display = 'flex';
    document.querySelector('.container').style.display = 'none';

    // 2 second baad WhatsApp pe bhej dega
    setTimeout(() => {
        const msg = encodeURIComponent("Maine Haan bol diya! ❤️ Kya tum meri mahila mittar banogi ka jawab Haan hai 😍");
        window.open(`https://wa.me/${tumharaNumber}?text=${msg}`, "_blank");
    }, 2000);
});