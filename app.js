function showContent(section) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => {
      sec.style.display = 'none';
    });
  
    // Show the selected section
    const selectedSection = document.getElementById(`${section}-section`);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }
  
  // Call showContent() to show "Home" section on page load
  showContent('home');

  const testimonials = document.querySelectorAll('.testimonial');
  let currentIndex = 0;
  
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      if (i === index) {
        testimonial.classList.add('show');
      } else {
        testimonial.classList.remove('show');
      }
    });
  }
  
  function nextTestimonial() {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
      currentIndex = 0;
    }
    showTestimonial(currentIndex);
  }
  
  // Show the first testimonial initially
  showTestimonial(currentIndex);
  
  // Change testimonial every 3 seconds (adjust the duration as needed)
  setInterval(nextTestimonial, 3000);
  

  