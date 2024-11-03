document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    animateElements.forEach(element => {
      observer.observe(element);
    });
  
    const destinationsData = [
        {
          city: "Paris",
          country: "France",
          price: "100",
          properties: "1000+",
          image: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_90:120,w_3840,g_auto/f_auto/q_auto/v1/gc-v1/paris/3%20giorni%20a%20Parigi%20Tour%20Eiffel",
          coordinates: [48.8566, 2.3522]
        },
        {
          city: "Tokyo",
          country: "Japan",
          price: "120",
          properties: "800+",
          image: "https://images.goway.com/production/featured_images/japan_tokyo_akihabara_AdobeStock_295310062_Editorial_Use_Only.jpg",
          coordinates: [35.6762, 139.6503]
        },
        {
          city: "New York",
          country: "USA",
          price: "150",
          properties: "1200+",
          image: "https://media.architecturaldigest.com/photos/665e36b24bd20392cc7d50ab/16:9/w_2560%2Cc_limit/GettyImages-533998713.jpg",
          coordinates: [40.7128, -74.0060]
        },
        {
          city: "Rome",
          country: "Italy",
          price: "110",
          properties: "950+",
          image: "https://i.natgeofe.com/k/a6c9f195-de20-445d-9d36-745ef56042c5/OG_Colosseum_Ancient-Rome_KIDS_1122_3x2.jpg",
          coordinates: [41.9028, 12.4964]
        },
        {
          city: "Barcelona",
          country: "Spain",
          price: "95",
          properties: "750+",
          image: "https://st4.depositphotos.com/5826430/23568/i/600/depositphotos_235683708-stock-photo-panoramic-view-park-guell-barcelona.jpg",
          coordinates: [41.3851, 2.1734]
        },
        {
          city: "Dubai",
          country: "UAE",
          price: "200",
          properties: "600+",
          image: "https://st2.depositphotos.com/1000633/10430/i/600/depositphotos_104307976-stock-photo-panorama-of-dubai-marina.jpg",
          coordinates: [25.2048, 55.2708]
        },
        {
          city: "London",
          country: "UK",
          price: "180",
          properties: "1500+",
          image: "https://st2.depositphotos.com/1004061/7948/i/600/depositphotos_79480544-stock-photo-big-ben-westminster-bridge.jpg",
          coordinates: [51.5074, -0.1278]
        },
        {
          city: "Sydney",
          country: "Australia",
          price: "130",
          properties: "700+",
          image: "https://static5.depositphotos.com/1049689/525/i/380/depositphotos_5254555-stock-photo-sydney-opera-house-at-night.jpg",
          coordinates: [-33.8688, 151.2093]
        }
      ];
  
    const sliderContainer = document.querySelector('.slider-container');
    
    function createDestinationElement(destination) {
      return `
        <div class="destination">
          <div class="destination-image">
            <img src="${destination.image}" alt="${destination.city}" loading="lazy">
          </div>
          <div class="destination-info">
            <h3>${destination.city}</h3>
            <p class="country">${destination.country}</p>
            <p class="price">From $${destination.price}/night</p>
            <div class="destination-stats">
              <span class="stat-count">${destination.properties}</span> properties
            </div>
            <button class="explore-btn" data-city="${destination.city}">
              Explore Properties
            </button>
          </div>
        </div>
      `;
    }
  
    sliderContainer.innerHTML = destinationsData
      .map(destination => createDestinationElement(destination))
      .join('');
  
    const slider = document.querySelector('.slider-container');
    const destinations = document.querySelectorAll('.destination');
    let currentIndex = 0;
    const destinationWidth = 350 + 32; 
    const visibleDestinations = window.innerWidth >= 1200 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    
    const sliderWrapper = document.querySelector('.slider');
    const navButtons = document.createElement('div');
    navButtons.className = 'slider-nav';
    navButtons.innerHTML = `
      <button class="slider-prev" aria-label="Previous destinations">❮</button>
      <button class="slider-next" aria-label="Next destinations">❯</button>
    `;
    sliderWrapper.appendChild(navButtons);
  
    const pagination = document.createElement('div');
    pagination.className = 'slider-pagination';
    const totalPages = Math.ceil(destinations.length / visibleDestinations);
    
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('button');
      dot.className = 'pagination-dot';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goToPage(i));
      pagination.appendChild(dot);
    }
    sliderWrapper.appendChild(pagination);
  
    function updateSlider() {
      const normalizedIndex = ((currentIndex % destinations.length) + destinations.length) % destinations.length;
      slider.style.transform = `translateX(-${normalizedIndex * destinationWidth}px)`;
      
      document.querySelectorAll('.pagination-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === Math.floor(normalizedIndex / visibleDestinations));
      });
      
      document.querySelector('.slider-prev').disabled = false;
      document.querySelector('.slider-next').disabled = false;
    }
  
    function nextSlide() {
      currentIndex++;
      if (currentIndex >= destinations.length) {
        setTimeout(() => {
          slider.style.transition = 'none';
          currentIndex = 0;
          updateSlider();
          setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease';
          }, 50);
        }, 500);
      }
      updateSlider();
    }
  
    function prevSlide() {
      currentIndex--;
      if (currentIndex < 0) {
        setTimeout(() => {
          slider.style.transition = 'none';
          currentIndex = destinations.length - 1;
          updateSlider();
          setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease';
          }, 50);
        }, 500);
      }
      updateSlider();
    }
  
    function goToPage(pageIndex) {
      currentIndex = pageIndex * visibleDestinations;
      updateSlider();
    }
  
    document.querySelector('.slider-prev').addEventListener('click', prevSlide);
    document.querySelector('.slider-next').addEventListener('click', nextSlide);
  
    function initMap() {
      const mapElement = document.getElementById('map');
      if (!mapElement) return;
  
      const map = L.map('map').setView([20, 0], 2); 
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
  
      destinationsData.forEach(dest => {
        const popup = L.popup().setContent(`
          <div class="map-popup">
            <h3>${dest.city}, ${dest.country}</h3>
            <p>From $${dest.price}/night</p>
            <p>${dest.properties} properties</p>
            <button onclick="exploreCity('${dest.city}')" class="popup-button">
              View Properties
            </button>
          </div>
        `);
  
        L.marker(dest.coordinates)
          .bindPopup(popup)
          .addTo(map);
      });
    }
  

    window.exploreCity = function(city) {
      const destination = destinationsData.find(d => d.city === city);
      if (destination) {
       
        showCityModal(destination);
      }
    };
  
    function showCityModal(destination) {
      const modal = document.createElement('div');
      modal.className = 'city-modal';
      modal.innerHTML = `
        <div class="modal-content">
          <button class="modal-close">&times;</button>
          <h2>${destination.city}, ${destination.country}</h2>
          <img src="${destination.image}" alt="${destination.city}" />
          <div class="modal-info">
            <p>Starting from $${destination.price} per night</p>
            <p>${destination.properties} available properties</p>
            <button class="search-properties-btn">
              Search Available Properties
            </button>
          </div>
        </div>
      `;
  
      document.body.appendChild(modal);
      
      modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
      });
      
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.remove();
        }
      });
    }
  
    let touchStartX = 0;
    let touchEndX = 0;
  
    slider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
  
    slider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  
    function handleSwipe() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
  
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
  
    window.addEventListener('resize', () => {
      const newVisibleDestinations = window.innerWidth >= 1200 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      if (newVisibleDestinations !== visibleDestinations) {
        location.reload();
      }
    });
  
    if (document.getElementById('map')) {
      initMap();
    }
  
    let autoSlideInterval = setInterval(nextSlide, 5000);
  
    sliderWrapper.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
    });
  
    sliderWrapper.addEventListener('mouseleave', () => {
      autoSlideInterval = setInterval(nextSlide, 5000);
    });
  
    updateSlider();
  });