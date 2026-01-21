// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert('Thank you for your enquiry! We will contact you soon.\n\n' +
              'Name: ' + data.name + '\n' +
              'Email: ' + data.email + '\n' +
              'Phone: ' + data.phone);
        
        // Reset form
        this.reset();
    });
}

// Share Functions
function shareOnWhatsApp() {
    const text = encodeURIComponent('Check out Lucent International School, Surwaniya - A modern, future-ready institution in Gopalganj, Bihar!');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
}

function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareViaEmail() {
    const subject = encodeURIComponent('Lucent International School, Surwaniya - School Profile');
    const body = encodeURIComponent(`Check out Lucent International School, Surwaniya:\n\n${window.location.href}\n\nA modern, future-ready institution in Gopalganj, Bihar committed to delivering academic excellence with strong values and discipline.`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard!');
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Link copied to clipboard!');
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Animate on scroll (simple fade-in effect)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.feature-card, .review-card, .service-card, .about-item');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize photos gallery
    loadPhotos();
    checkAdminStatus();
});

// ==================== PHOTOS GALLERY FUNCTIONALITY ====================

// Admin credentials (in production, this should be on the backend)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// Check if user is admin
function isAdmin() {
    return localStorage.getItem('isAdmin') === 'true';
}

// Check admin status on page load
function checkAdminStatus() {
    if (isAdmin()) {
        showAdminControls();
    } else {
        hideAdminControls();
    }
}

// Show admin controls
function showAdminControls() {
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const adminLoginNav = document.getElementById('adminLoginNav');
    const adminLogoutNav = document.getElementById('adminLogoutNav');
    
    if (adminLoginBtn) adminLoginBtn.style.display = 'none';
    if (adminLoginNav) adminLoginNav.style.display = 'none';
    if (adminLogoutNav) adminLogoutNav.style.display = 'block';
    
    // Show delete buttons on all photos
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach(card => {
        card.classList.add('admin-mode');
    });
}

// Hide admin controls
function hideAdminControls() {
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const adminLoginNav = document.getElementById('adminLoginNav');
    const adminLogoutNav = document.getElementById('adminLogoutNav');
    
    if (adminLoginBtn) adminLoginBtn.style.display = 'block';
    if (adminLoginNav) adminLoginNav.style.display = 'block';
    if (adminLogoutNav) adminLogoutNav.style.display = 'none';
    
    // Hide delete buttons on all photos
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach(card => {
        card.classList.remove('admin-mode');
    });
}

// Show admin login modal
function showAdminLogin() {
    const modal = document.getElementById('adminModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Close admin modal
function closeAdminModal() {
    const modal = document.getElementById('adminModal');
    if (modal) {
        modal.style.display = 'none';
        // Reset form
        const form = document.getElementById('adminLoginForm');
        if (form) form.reset();
    }
}

// Admin login
const adminLoginForm = document.getElementById('adminLoginForm');
if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;
        
        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
            localStorage.setItem('isAdmin', 'true');
            closeAdminModal();
            showAdminControls();
            alert('Admin login successful! You can now delete photos.');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
}

// Admin logout
function adminLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('isAdmin');
        hideAdminControls();
        alert('Logged out successfully.');
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('adminModal');
    if (event.target === modal) {
        closeAdminModal();
    }
});

// Load photos from localStorage
function loadPhotos() {
    const gallery = document.getElementById('photosGallery');
    const noPhotos = document.getElementById('noPhotos');
    
    if (!gallery) return;
    
    const photos = JSON.parse(localStorage.getItem('schoolPhotos') || '[]');
    
    if (photos.length === 0) {
        if (noPhotos) noPhotos.style.display = 'block';
        return;
    }
    
    if (noPhotos) noPhotos.style.display = 'none';
    
    gallery.innerHTML = '';
    
    photos.forEach((photo, index) => {
        const photoCard = document.createElement('div');
        photoCard.className = 'photo-card';
        if (isAdmin()) {
            photoCard.classList.add('admin-mode');
        }
        
        photoCard.innerHTML = `
            <img src="${photo.dataUrl}" alt="${photo.caption || 'School Photo'}">
            <div class="photo-caption">${photo.caption || 'School Photo'}</div>
            <button class="delete-btn" onclick="deletePhoto(${index})" title="Delete Photo">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        gallery.appendChild(photoCard);
    });
}

// Upload photo
const uploadForm = document.getElementById('uploadForm');
if (uploadForm) {
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fileInput = document.getElementById('photoInput');
        const captionInput = document.getElementById('photoCaption');
        
        if (!fileInput.files || fileInput.files.length === 0) {
            alert('Please select a photo to upload.');
            return;
        }
        
        const file = fileInput.files[0];
        
        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please select a valid image file.');
            return;
        }
        
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('Image size should be less than 5MB.');
            return;
        }
        
        // Read file as data URL
        const reader = new FileReader();
        reader.onload = function(e) {
            const photos = JSON.parse(localStorage.getItem('schoolPhotos') || '[]');
            
            const newPhoto = {
                dataUrl: e.target.result,
                caption: captionInput.value.trim() || 'School Photo',
                uploadDate: new Date().toISOString()
            };
            
            photos.push(newPhoto);
            localStorage.setItem('schoolPhotos', JSON.stringify(photos));
            
            // Reset form
            uploadForm.reset();
            
            // Reload gallery
            loadPhotos();
            
            alert('Photo uploaded successfully!');
        };
        
        reader.readAsDataURL(file);
    });
}

// Delete photo (admin only)
function deletePhoto(index) {
    if (!isAdmin()) {
        alert('Only administrators can delete photos.');
        return;
    }
    
    if (confirm('Are you sure you want to delete this photo?')) {
        const photos = JSON.parse(localStorage.getItem('schoolPhotos') || '[]');
        photos.splice(index, 1);
        localStorage.setItem('schoolPhotos', JSON.stringify(photos));
        loadPhotos();
        alert('Photo deleted successfully.');
    }
}
