// Tahun dinamis di footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// Placeholder interaksi kartu (aktif di Bab 2)
function notReady(name) {
const msg = `${name} belum diaktifkan di Bab 1. Lanjut ke Bab 2 untuk menggunakannya.`;
// Notif sederhana agar tidak mengganggu layout
alert(msg);
}


const cards = document.querySelectorAll('[data-generator]');
cards.forEach(card => {
const key = card.getAttribute('data-generator');
const btn = card.querySelector('button');
if (btn) {
btn.addEventListener('click', () => notReady(key));
} else {
card.addEventListener('click', () => notReady(key));
}
});


// Catatan: Di Bab 2 kita akan:
// - Membuat modul generator pertama (Random Color)
// - Menambahkan UI panel hasil yang elegan
// - Memastikan aksesibilitas (keyboard + ARIA)
