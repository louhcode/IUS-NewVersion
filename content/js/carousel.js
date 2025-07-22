let index = 0;
const slides = document.querySelectorAll('.hero-slide');
// const container = document.querySelector('.hero-container'); // Baris ini tidak lagi digunakan untuk transform

function updateCarousel() {
  // Hapus kelas 'active' dari semua slide
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Tambahkan kelas 'active' ke slide saat ini
  slides[index].classList.add('active');

  // Animasi teks akan otomatis dipicu oleh CSS saat kelas 'active' ditambahkan
}

function moveSlide(dir) {
  index = (index + dir + slides.length) % slides.length;
  updateCarousel();
}

// Panggil updateCarousel() sekali saat halaman dimuat untuk menampilkan slide pertama
updateCarousel();

// auto-slide tiap 4 detik (Anda bisa uncomment jika ingin mengaktifkan lagi)
// setInterval(() => moveSlide(1), 4000);