<template>
  <div class="vehciles-box">
    <div class="childpage_wrapper news_detail_wrapper news_wrapper">
      <div class="content_block clearfix">
        <div class="second_page news_detail_content news_content fadeInUpSmall">
          <section class="bde-section-68-118 bde-section rsd-section-full">
            <div class="section-container" style="display: block;">
              <div class="bde-image-68-689 bde-image">
                <figure class="breakdance-image breakdance-image--584">
                  <div class="breakdance-image-container">
                    <div class="breakdance-image-clip">
                      <img class="breakdance-image-object" src="https://iveco.gr/storage/2024/08/Iveco-icons-Daily.svg"
                      width="" height="">
                    </div>
                  </div>
                </figure>
              </div>
              <h4 class="bde-heading-68-690 bde-heading bde-h4">
                Drive the icon
              </h4>
              <!-- <el-carousel class="vehciles-slide-container" trigger="click" height="500px" :autoplay="true">
                <el-carousel-item v-for="(item, index) in vehiclesBanner" :key="index">
                  <div class="banner-img-box" :style="`background-image: url(${item.img});`"></div>
                </el-carousel-item>
              </el-carousel> -->
              <swiper
                class="new_center"
                :pagination="pagination"
                :grabCursor="true"
                :loop="true"
                :initialSlide="1" 
                :slidesPerView="2"
                :centeredSlides="true" 
                :spaceBetween="50" 
                :modules="modules"
                :navigation="true" 
                :autoplay="{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }" 
                :breakpoints="{
                  '640': {
                    slidesPerView: 1,
                  },
                  '768': {
                    slidesPerView: 2,
                  },
                  '1024': {
                    slidesPerView: 2,
                  },
                }"
              >
                <swiper-slide v-for="(item, index) in vehiclesBanner" :key="index">
                  <div class="banner-img-box" :style="`background-image: url(${item.img});`"></div>
                </swiper-slide>
              </swiper>
            </div>
          </section>
          <div class="bde-globalblock-68-952 bde-globalblock">
            <div class="breakdance">
              <section class="bde-section-1339-100-1339-1 bde-section scroll-to-section bde-section-1339-100">
                <div class="section-container">
                  <div class="bde-grid-1339-101-1339-1 bde-grid bde-grid-1339-101">
                    <div class="bde-div-1339-102-1339-1 bde-div bde-div-1339-102">
                      <div class="bde-text-1339-103-1339-1 bde-text bde-text-1339-103">
                        1
                      </div>
                      <h5 class="bde-heading-1339-104-1339-1 bde-heading bde-heading-1339-104">
                        Driving Experience
                      </h5>
                      <h5 class="bde-heading-1339-105-1339-1 bde-heading bde-heading-1339-105">
                        Even more user-friendly and comfortable
                      </h5>
                    </div>
                    <div class="bde-div-1339-106-1339-1 bde-div bde-div-1339-106">
                      <div class="bde-text-1339-107-1339-1 bde-text bde-text-1339-107">
                        2
                      </div>
                      <h5 class="bde-heading-1339-108-1339-1 bde-heading bde-heading-1339-108">
                        Safe and Strong
                      </h5>
                      <h5 class="bde-heading-1339-109-1339-1 bde-heading bde-heading-1339-109">
                        Safety all round in every situation and all conditions
                      </h5>
                    </div>
                    <div class="bde-div-1339-110-1339-1 bde-div bde-div-1339-110">
                      <div class="bde-text-1339-111-1339-1 bde-text bde-text-1339-111">
                        3
                      </div>
                      <h5 class="bde-heading-1339-112-1339-1 bde-heading bde-heading-1339-112">
                        Versatile
                      </h5>
                      <h5 class="bde-heading-1339-113-1339-1 bde-heading bde-heading-1339-113">
                        Ready to follow your business - even in the most demanding missions
                      </h5>
                    </div>
                    <div class="bde-div-1339-114-1339-1 bde-div bde-div-1339-114">
                      <div class="bde-text-1339-115-1339-1 bde-text bde-text-1339-115">
                        4
                      </div>
                      <h5 class="bde-heading-1339-116-1339-1 bde-heading bde-heading-1339-116">
                        100% Connected
                      </h5>
                      <h5 class="bde-heading-1339-117-1339-1 bde-heading bde-heading-1339-117">
                        Maximises uptime and business productivity
                      </h5>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="bde-globalblock-68-955 bde-globalblock">
            <div class="breakdance">
              <section class="bde-section-1343-100-1343-1 bde-section bde-section-1343-100">
                <div class="section-container">
                  <div class="bde-div-1343-128-1343-1 bde-div bde-div-1343-128">
                    <h2 class="bde-heading-1343-129-1343-1 bde-heading bde-heading-1343-129">
                      What's new?
                    </h2>
                    <div class="bde-text-1343-130-1343-1 bde-text bde-text-1343-130">
                      Your companion in business success is safer and more productive than ever
                      - and has a stylish new look!
                    </div>
                  </div>
                  <div class="" style="width: 100%; height: 400px; padding: 0 20px">
                    <div style="width: 90%; height: 400px; background: rgba(0,0,0,.5)"></div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div class="bde-globalblock-68-956 bde-globalblock">
            <div class="breakdance">
              <section class="bde-section-1344-100-1344-1 bde-section rsd-section-black bde-section-1344-100">
                <div class="section-container">
                  <h2 class="bde-heading-1344-101-1344-1 bde-heading bde-heading-1344-101">
                    Driving Experience
                  </h2>
                </div>
              </section>
              <section class="bde-section-1344-102-1344-1 bde-section rsd-section-black bde-section-1344-102">
                <div class="section-container">
                  <div class="bde-advancedslider-1344-103-1344-1 bde-advancedslider rsd-slider-cards bde-advancedslider-1344-103">
                    <div class="breakdance-swiper-wrapper" data-swiper-id="103">
                      <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                        <div class="swiper-wrapper" id="swiper-wrapper-bdd10325102378d7a1" aria-live="polite"
                        style="transform: translate3d(0px, 0px, 0px);">
                          <div class="bde-advancedslide-1344-104-1344-1 bde-advancedslide bde-advancedslide-1344-104 swiper-slide swiper-slide-visible swiper-slide-active"
                          role="" aria-label="1 / 5" style="width: 436.364px;">
                            <div class="advanced-slider__slide">
                              <a class="bde-container-link-1344-105-1344-1 bde-container-link rsd-slider-cards-item bde-container-link-1344-105 breakdance-link"
                              href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;773&quot;}}">
                                <div class="bde-image-1344-106-1344-1 bde-image bde-preset-626f688b-6e4f-45fc-ad82-8641dbd3febf bde-image-1344-106">
                                  <figure class="breakdance-image breakdance-image--1234">
                                    <div class="breakdance-image-container">
                                      <div class="breakdance-image-clip">
                                        <img class="breakdance-image-object" src="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Dashboard-banner.jpg"
                                        width="428" height="618" srcset="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Dashboard-banner.jpg 428w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Dashboard-banner-208x300.jpg 208w"
                                        sizes="(max-width: 428px) 100vw, 428px">
                                      </div>
                                    </div>
                                  </figure>
                                </div>
                                <div class="bde-div-1344-107-1344-1 bde-div bde-div-1344-107">
                                  <div class="bde-text-1344-108-1344-1 bde-text bde-text-1344-108">
                                    Functional dashboard
                                  </div>
                                  <h5 class="bde-heading-1344-109-1344-1 bde-heading bde-heading-1344-109">
                                    Designed to make your life on board easier
                                  </h5>
                                  <div class="bde-button-1344-110-1344-1 bde-button rsd-button-text bde-button-1344-110">
                                    <button type="button" class="button-atom button-atom--text bde-button__button">
                                      <span class="button-atom__text">
                                        Read more
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="bde-advancedslide-1344-111-1344-1 bde-advancedslide bde-advancedslide-1344-111 swiper-slide swiper-slide-visible swiper-slide-next"
                          role="" aria-label="2 / 5" style="width: 436.364px;">
                            <div class="advanced-slider__slide">
                              <a class="bde-container-link-1344-112-1344-1 bde-container-link rsd-slider-cards-item bde-container-link-1344-112 breakdance-link"
                              href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;775&quot;}}">
                                <div class="bde-image-1344-113-1344-1 bde-image bde-preset-626f688b-6e4f-45fc-ad82-8641dbd3febf bde-image-1344-113">
                                  <figure class="breakdance-image breakdance-image--1235">
                                    <div class="breakdance-image-container">
                                      <div class="breakdance-image-clip">
                                        <img class="breakdance-image-object" src="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Drive-friendly-banner.jpeg"
                                        width="1048" height="1310" srcset="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Drive-friendly-banner.jpeg 1048w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Drive-friendly-banner-240x300.jpeg 240w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Drive-friendly-banner-819x1024.jpeg 819w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Drive-friendly-banner-768x960.jpeg 768w"
                                        sizes="(max-width: 1048px) 100vw, 1048px">
                                      </div>
                                    </div>
                                  </figure>
                                </div>
                                <div class="bde-div-1344-114-1344-1 bde-div bde-div-1344-114">
                                  <div class="bde-text-1344-115-1344-1 bde-text bde-text-1344-115">
                                    Driver-friendly vehicle interface
                                  </div>
                                  <h5 class="bde-heading-1344-116-1344-1 bde-heading bde-heading-1344-116">
                                    Productivity and comfort on board
                                  </h5>
                                  <div class="bde-button-1344-117-1344-1 bde-button rsd-button-text bde-button-1344-117">
                                    <button type="button" class="button-atom button-atom--text bde-button__button">
                                      <span class="button-atom__text">
                                        Read more
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="bde-advancedslide-1344-118-1344-1 bde-advancedslide bde-advancedslide-1344-118 swiper-slide swiper-slide-visible"
                          role="" aria-label="3 / 5" style="width: 436.364px;">
                            <div class="advanced-slider__slide">
                              <a class="bde-container-link-1344-119-1344-1 bde-container-link rsd-slider-cards-item bde-container-link-1344-119 breakdance-link"
                              href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;782&quot;}}">
                                <div class="bde-image-1344-120-1344-1 bde-image bde-preset-626f688b-6e4f-45fc-ad82-8641dbd3febf bde-image-1344-120">
                                  <figure class="breakdance-image breakdance-image--1236">
                                    <div class="breakdance-image-container">
                                      <div class="breakdance-image-clip">
                                        <img class="breakdance-image-object" src="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Keyless-banner.jpeg"
                                        width="1048" height="1310" srcset="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Keyless-banner.jpeg 1048w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Keyless-banner-240x300.jpeg 240w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Keyless-banner-819x1024.jpeg 819w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Keyless-banner-768x960.jpeg 768w"
                                        sizes="(max-width: 1048px) 100vw, 1048px">
                                      </div>
                                    </div>
                                  </figure>
                                </div>
                                <div class="bde-div-1344-121-1344-1 bde-div bde-div-1344-121">
                                  <div class="bde-text-1344-122-1344-1 bde-text bde-text-1344-122">
                                    Keyless Entry &amp; Go
                                  </div>
                                  <h5 class="bde-heading-1344-123-1344-1 bde-heading bde-heading-1344-123">
                                    Speed and convenience in deliveries
                                  </h5>
                                  <div class="bde-button-1344-124-1344-1 bde-button rsd-button-text bde-button-1344-124">
                                    <button type="button" class="button-atom button-atom--text bde-button__button">
                                      <span class="button-atom__text">
                                        Read more
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="bde-advancedslide-1344-125-1344-1 bde-advancedslide bde-advancedslide-1344-125 swiper-slide swiper-slide-visible"
                          role="" aria-label="4 / 5" style="width: 436.364px;">
                            <div class="advanced-slider__slide">
                              <a class="bde-container-link-1344-126-1344-1 bde-container-link rsd-slider-cards-item bde-container-link-1344-126 breakdance-link"
                              href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;788&quot;}}">
                                <div class="bde-image-1344-127-1344-1 bde-image bde-preset-626f688b-6e4f-45fc-ad82-8641dbd3febf bde-image-1344-127">
                                  <figure class="breakdance-image breakdance-image--1233">
                                    <div class="breakdance-image-container">
                                      <div class="breakdance-image-clip">
                                        <img class="breakdance-image-object" src="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Seats-banner.jpeg"
                                        width="1048" height="1310" srcset="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Seats-banner.jpeg 1048w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Seats-banner-240x300.jpeg 240w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Seats-banner-819x1024.jpeg 819w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Seats-banner-768x960.jpeg 768w"
                                        sizes="(max-width: 1048px) 100vw, 1048px">
                                      </div>
                                    </div>
                                  </figure>
                                </div>
                                <div class="bde-div-1344-128-1344-1 bde-div bde-div-1344-128">
                                  <div class="bde-text-1344-129-1344-1 bde-text bde-text-1344-129">
                                    Seats
                                  </div>
                                  <h5 class="bde-heading-1344-130-1344-1 bde-heading bde-heading-1344-130">
                                    Supreme comfort with Hi-ADAPTIVE seats
                                  </h5>
                                  <div class="bde-button-1344-131-1344-1 bde-button rsd-button-text bde-button-1344-131">
                                    <button type="button" class="button-atom button-atom--text bde-button__button">
                                      <span class="button-atom__text">
                                        Read more
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="bde-advancedslide-1344-132-1344-1 bde-advancedslide bde-advancedslide-1344-132 swiper-slide"
                          role="" aria-label="5 / 5" style="width: 436.364px;">
                            <div class="advanced-slider__slide">
                              <a class="bde-container-link-1344-133-1344-1 bde-container-link rsd-slider-cards-item bde-container-link-1344-133 breakdance-link"
                              href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;822&quot;}}">
                                <div class="bde-image-1344-134-1344-1 bde-image bde-preset-626f688b-6e4f-45fc-ad82-8641dbd3febf bde-image-1344-134">
                                  <figure class="breakdance-image breakdance-image--819">
                                    <div class="breakdance-image-container">
                                      <div class="breakdance-image-clip">
                                        <img class="breakdance-image-object" src="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Daily-air-pro.jpeg"
                                        width="1048" height="1310" srcset="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Daily-air-pro.jpeg 1048w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Daily-air-pro-240x300.jpeg 240w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Daily-air-pro-819x1024.jpeg 819w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Driving-experience-Daily-air-pro-768x960.jpeg 768w"
                                        sizes="(max-width: 1048px) 100vw, 1048px">
                                      </div>
                                    </div>
                                  </figure>
                                </div>
                                <div class="bde-div-1344-135-1344-1 bde-div bde-div-1344-135">
                                  <div class="bde-text-1344-136-1344-1 bde-text bde-text-1344-136">
                                    Daily Air-Pro
                                  </div>
                                  <h5 class="bde-heading-1344-137-1344-1 bde-heading bde-heading-1344-137">
                                    The intelligent suspension
                                  </h5>
                                  <div class="bde-button-1344-138-1344-1 bde-button rsd-button-text bde-button-1344-138">
                                    <button type="button" class="button-atom button-atom--text bde-button__button">
                                      <span class="button-atom__text">
                                        Read more
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true">
                        </span>
                      </div>
                      <div class="swiper-button-prev swiper-button-disabled" tabindex="-1" role="button"
                      aria-label="Previous slide" aria-controls="swiper-wrapper-bdd10325102378d7a1"
                      aria-disabled="true">
                      </div>
                      <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide"
                      aria-controls="swiper-wrapper-bdd10325102378d7a1" aria-disabled="false">
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div class="bde-globalblock-68-957 bde-globalblock">
            <div class="breakdance">
              <section class="bde-section-1348-100-1348-1 bde-section bde-section-1348-100">
                <div class="section-container">
                  <h2 class="bde-heading-1348-101-1348-1 bde-heading bde-heading-1348-101">
                    Performance
                  </h2>
                </div>
              </section>
              <section class="bde-section-1348-102-1348-1 bde-section bde-section-1348-102">
                <div class="section-container">
                  <div class="bde-advancedslider-1348-103-1348-1 bde-advancedslider rsd-slider-cards bde-advancedslider-1348-103">
                    <div class="breakdance-swiper-wrapper" data-swiper-id="103">
                      <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                        <div class="swiper-wrapper" id="swiper-wrapper-4933a2613a0b5e62" aria-live="polite"
                        style="transform: translate3d(0px, 0px, 0px);">
                          <div class="bde-advancedslide-1348-104-1348-1 bde-advancedslide bde-advancedslide-1348-104 swiper-slide swiper-slide-visible swiper-slide-active"
                          role="" aria-label="1 / 3" style="width: 436.364px;">
                            <div class="advanced-slider__slide">
                              <a class="bde-container-link-1348-105-1348-1 bde-container-link rsd-slider-cards-item bde-container-link-1348-105 breakdance-link"
                              href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;824&quot;}}">
                                <div class="bde-image-1348-106-1348-1 bde-image bde-preset-626f688b-6e4f-45fc-ad82-8641dbd3febf bde-image-1348-106">
                                  <figure class="breakdance-image breakdance-image--1237">
                                    <div class="breakdance-image-container">
                                      <div class="breakdance-image-clip">
                                        <img class="breakdance-image-object" src="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-banner.jpg"
                                        width="1048" height="1310" srcset="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-banner.jpg 1048w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-banner-240x300.jpg 240w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-banner-819x1024.jpg 819w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-banner-768x960.jpg 768w"
                                        sizes="(max-width: 1048px) 100vw, 1048px">
                                      </div>
                                    </div>
                                  </figure>
                                </div>
                                <div class="bde-div-1348-107-1348-1 bde-div bde-div-1348-107">
                                  <div class="bde-text-1348-108-1348-1 bde-text bde-text-1348-108">
                                    Engines
                                  </div>
                                  <h5 class="bde-heading-1348-109-1348-1 bde-heading bde-heading-1348-109">
                                    Engineered to perform
                                  </h5>
                                  <div class="bde-button-1348-110-1348-1 bde-button rsd-button-text bde-button-1348-110">
                                    <button type="button" class="button-atom button-atom--text bde-button__button">
                                      <span class="button-atom__text">
                                        Read more
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="bde-advancedslide-1348-111-1348-1 bde-advancedslide bde-advancedslide-1348-111 swiper-slide swiper-slide-visible swiper-slide-next"
                          role="" aria-label="2 / 3" style="width: 436.364px;">
                            <div class="advanced-slider__slide">
                              <a class="bde-container-link-1348-112-1348-1 bde-container-link rsd-slider-cards-item bde-container-link-1348-112 breakdance-link"
                              href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;832&quot;}}">
                                <div class="bde-image-1348-113-1348-1 bde-image bde-preset-626f688b-6e4f-45fc-ad82-8641dbd3febf bde-image-1348-113">
                                  <figure class="breakdance-image breakdance-image--1238">
                                    <div class="breakdance-image-container">
                                      <div class="breakdance-image-clip">
                                        <img class="breakdance-image-object" src="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-HI-MATIC-banner.jpg"
                                        width="1048" height="1310" srcset="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-HI-MATIC-banner.jpg 1048w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-HI-MATIC-banner-240x300.jpg 240w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-HI-MATIC-banner-819x1024.jpg 819w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-HI-MATIC-banner-768x960.jpg 768w"
                                        sizes="(max-width: 1048px) 100vw, 1048px">
                                      </div>
                                    </div>
                                  </figure>
                                </div>
                                <div class="bde-div-1348-114-1348-1 bde-div bde-div-1348-114">
                                  <div class="bde-text-1348-115-1348-1 bde-text bde-text-1348-115">
                                    HI-MATIC Automatic gearbox
                                  </div>
                                  <h5 class="bde-heading-1348-116-1348-1 bde-heading bde-heading-1348-116">
                                    Absolute driving pleasure
                                  </h5>
                                  <div class="bde-button-1348-117-1348-1 bde-button rsd-button-text bde-button-1348-117">
                                    <button type="button" class="button-atom button-atom--text bde-button__button">
                                      <span class="button-atom__text">
                                        Read more
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div class="bde-advancedslide-1348-118-1348-1 bde-advancedslide bde-advancedslide-1348-118 swiper-slide swiper-slide-visible"
                          role="" aria-label="3 / 3" style="width: 436.364px;">
                            <div class="advanced-slider__slide">
                              <a class="bde-container-link-1348-119-1348-1 bde-container-link rsd-slider-cards-item bde-container-link-1348-119 breakdance-link"
                              href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;835&quot;}}">
                                <div class="bde-image-1348-120-1348-1 bde-image bde-preset-626f688b-6e4f-45fc-ad82-8641dbd3febf bde-image-1348-120">
                                  <figure class="breakdance-image breakdance-image--837">
                                    <div class="breakdance-image-container">
                                      <div class="breakdance-image-clip">
                                        <img class="breakdance-image-object" src="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-Manual-gearbox.jpg"
                                        width="1048" height="1310" srcset="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-Manual-gearbox.jpg 1048w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-Manual-gearbox-240x300.jpg 240w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-Manual-gearbox-819x1024.jpg 819w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Perfonmance-Manual-gearbox-768x960.jpg 768w"
                                        sizes="(max-width: 1048px) 100vw, 1048px">
                                      </div>
                                    </div>
                                  </figure>
                                </div>
                                <div class="bde-div-1348-121-1348-1 bde-div bde-div-1348-121">
                                  <div class="bde-text-1348-122-1348-1 bde-text bde-text-1348-122">
                                    Manual gearbox
                                  </div>
                                  <h5 class="bde-heading-1348-123-1348-1 bde-heading bde-heading-1348-123">
                                    Precision shifting
                                  </h5>
                                  <div class="bde-button-1348-124-1348-1 bde-button rsd-button-text bde-button-1348-124">
                                    <button type="button" class="button-atom button-atom--text bde-button__button">
                                      <span class="button-atom__text">
                                        Read more
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true">
                        </span>
                      </div>
                      <div class="swiper-button-prev swiper-button-disabled swiper-button-lock"
                      tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-4933a2613a0b5e62"
                      aria-disabled="true">
                      </div>
                      <div class="swiper-button-next swiper-button-lock swiper-button-disabled"
                      tabindex="-1" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-4933a2613a0b5e62"
                      aria-disabled="true">
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div class="bde-globalblock-68-958 bde-globalblock">
            <div class="breakdance">
              <section class="bde-section-1351-100-1351-1 bde-section rsd-section-blue bde-section-1351-100">
                <div class="section-container">
                  <div class="bde-columns-1351-101-1351-1 bde-columns bde-columns-1351-101">
                    <div class="bde-column-1351-102-1351-1 bde-column bde-column-1351-102">
                      <h4 class="bde-heading-1351-103-1351-1 bde-heading bde-heading-1351-103">
                        Safety with driver-assistance systems
                      </h4>
                      <div class="bde-text-1351-104-1351-1 bde-text bde-text-1351-104">
                        Comfort and functionality with the new Car Like dashboard, configurable
                        instrument cluster and infotainment.
                      </div>
                    </div>
                    <div class="bde-column-1351-105-1351-1 bde-column bde-column-1351-105">
                      <div class="bde-advancedslider-1351-106-1351-1 bde-advancedslider rsd-slider-slides bde-advancedslider-1351-106"
                      safety-drive="true">
                        <div class="breakdance-swiper-wrapper" data-swiper-id="106">
                          <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                            <div class="swiper-wrapper" id="swiper-wrapper-536548174fcfb35a" aria-live="off"
                            style="transition-duration: 0ms; transform: translate3d(-2538px, 0px, 0px);">
                              <div class="bde-advancedslide-1351-139-1351-1 bde-advancedslide bde-advancedslide-1351-139 swiper-slide swiper-slide-duplicate"
                              role="" aria-label="9 / 9" style="width: 814px; margin-right: 32px;" data-swiper-slide-index="8">
                                <div class="advanced-slider__slide">
                                  <div class="bde-div-1351-140-1351-1 bde-div bde-div-1351-140">
                                    <h2 class="bde-heading-1351-141-1351-1 bde-heading bde-heading-1351-141">
                                      Reverse with confidence
                                    </h2>
                                    <div class="bde-button-1351-142-1351-1 bde-button bde-button-1351-142">
                                      <a class="breakdance-link button-atom button-atom--primary bde-button__button"
                                      href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;857&quot;}}">
                                        <span class="button-atom__text">
                                          Read more
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bde-advancedslide-1351-107-1351-1 bde-advancedslide bde-advancedslide-1351-107 swiper-slide"
                              role="" aria-label="1 / 9" style="width: 814px; margin-right: 32px;" data-swiper-slide-index="0">
                                <div class="advanced-slider__slide">
                                  <div class="bde-div-1351-108-1351-1 bde-div bde-div-1351-108">
                                    <h4 class="bde-heading-1351-109-1351-1 bde-heading bde-heading-1351-109">
                                      Traffic Jam Assist
                                    </h4>
                                    <div class="bde-button-1351-110-1351-1 bde-button bde-button-1351-110">
                                      <a class="breakdance-link button-atom button-atom--primary bde-button__button"
                                      href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;839&quot;}}">
                                        <span class="button-atom__text">
                                          Read more
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bde-advancedslide-1351-111-1351-1 bde-advancedslide bde-advancedslide-1351-111 swiper-slide swiper-slide-prev"
                              role="" aria-label="2 / 9" data-swiper-slide-index="1" style="width: 814px; margin-right: 32px;">
                                <div class="advanced-slider__slide">
                                  <div class="bde-div-1351-112-1351-1 bde-div bde-div-1351-112">
                                    <h4 class="bde-heading-1351-113-1351-1 bde-heading bde-heading-1351-113">
                                      Advanced Lane Centering
                                    </h4>
                                    <div class="bde-button-1351-114-1351-1 bde-button bde-button-1351-114">
                                      <a class="breakdance-link button-atom button-atom--primary bde-button__button"
                                      href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;842&quot;}}">
                                        <span class="button-atom__text">
                                          Read more
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bde-advancedslide-1351-115-1351-1 bde-advancedslide bde-advancedslide-1351-115 swiper-slide swiper-slide-visible swiper-slide-active"
                              role="" aria-label="3 / 9" data-swiper-slide-index="2" style="width: 814px; margin-right: 32px;">
                                <div class="advanced-slider__slide">
                                  <div class="bde-div-1351-116-1351-1 bde-div bde-div-1351-116">
                                    <h2 class="bde-heading-1351-117-1351-1 bde-heading bde-heading-1351-117">
                                      Adaptive Cruise Control with Stop &amp; Go
                                    </h2>
                                    <div class="bde-button-1351-118-1351-1 bde-button bde-button-1351-118">
                                      <a class="breakdance-link button-atom button-atom--primary bde-button__button"
                                      href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;844&quot;}}">
                                        <span class="button-atom__text">
                                          Read more
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bde-advancedslide-1351-119-1351-1 bde-advancedslide bde-advancedslide-1351-119 swiper-slide swiper-slide-next"
                              role="" aria-label="4 / 9" data-swiper-slide-index="3" style="width: 814px; margin-right: 32px;">
                                <div class="advanced-slider__slide">
                                  <div class="bde-div-1351-120-1351-1 bde-div bde-div-1351-120">
                                    <h2 class="bde-heading-1351-121-1351-1 bde-heading bde-heading-1351-121">
                                      AEBS &amp; City Brake
                                    </h2>
                                    <div class="bde-button-1351-122-1351-1 bde-button bde-button-1351-122">
                                      <a class="breakdance-link button-atom button-atom--primary bde-button__button"
                                      href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;846&quot;}}">
                                        <span class="button-atom__text">
                                          Read more
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bde-advancedslide-1351-123-1351-1 bde-advancedslide bde-advancedslide-1351-123 swiper-slide"
                              role="" aria-label="5 / 9" data-swiper-slide-index="4" style="width: 814px; margin-right: 32px;">
                                <div class="advanced-slider__slide">
                                  <div class="bde-div-1351-124-1351-1 bde-div bde-div-1351-124">
                                    <h2 class="bde-heading-1351-125-1351-1 bde-heading bde-heading-1351-125">
                                      Turn Assist
                                    </h2>
                                    <div class="bde-button-1351-126-1351-1 bde-button bde-button-1351-126">
                                      <a class="breakdance-link button-atom button-atom--primary bde-button__button"
                                      href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;848&quot;}}">
                                        <span class="button-atom__text">
                                          Read more
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bde-advancedslide-1351-127-1351-1 bde-advancedslide bde-advancedslide-1351-127 swiper-slide"
                              role="" aria-label="6 / 9" data-swiper-slide-index="5" style="width: 814px; margin-right: 32px;">
                                <div class="advanced-slider__slide">
                                  <div class="bde-div-1351-128-1351-1 bde-div bde-div-1351-128">
                                    <h2 class="bde-heading-1351-129-1351-1 bde-heading bde-heading-1351-129">
                                      Intelligent Speed Assist &amp; Traffic Sign Recognition Safety Warnings
                                    </h2>
                                    <div class="bde-button-1351-130-1351-1 bde-button bde-button-1351-130">
                                      <a class="breakdance-link button-atom button-atom--primary bde-button__button"
                                      href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;850&quot;}}">
                                        <span class="button-atom__text">
                                          Read more
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bde-advancedslide-1351-131-1351-1 bde-advancedslide bde-advancedslide-1351-131 swiper-slide"
                              role="" aria-label="7 / 9" data-swiper-slide-index="6" style="width: 814px; margin-right: 32px;">
                                <div class="advanced-slider__slide">
                                  <div class="bde-div-1351-132-1351-1 bde-div bde-div-1351-132">
                                    <h2 class="bde-heading-1351-133-1351-1 bde-heading bde-heading-1351-133">
                                      Blind Spot Warning &amp; Blind Spot Information System
                                    </h2>
                                    <div class="bde-button-1351-134-1351-1 bde-button bde-button-1351-134">
                                      <a class="breakdance-link button-atom button-atom--primary bde-button__button"
                                      href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;852&quot;}}">
                                        <span class="button-atom__text">
                                          Read more
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bde-advancedslide-1351-135-1351-1 bde-advancedslide bde-advancedslide-1351-135 swiper-slide"
                              role="" aria-label="8 / 9" data-swiper-slide-index="7" style="width: 814px; margin-right: 32px;">
                                <div class="advanced-slider__slide">
                                  <div class="bde-div-1351-136-1351-1 bde-div bde-div-1351-136">
                                    <h2 class="bde-heading-1351-137-1351-1 bde-heading bde-heading-1351-137">
                                      Door Opening Warning
                                    </h2>
                                    <div class="bde-button-1351-138-1351-1 bde-button bde-button-1351-138">
                                      <a class="breakdance-link button-atom button-atom--primary bde-button__button"
                                      href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;854&quot;}}">
                                        <span class="button-atom__text">
                                          Read more
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bde-advancedslide-1351-139-1351-1 bde-advancedslide bde-advancedslide-1351-139 swiper-slide"
                              role="" aria-label="9 / 9" style="width: 814px; margin-right: 32px;" data-swiper-slide-index="8">
                                <div class="advanced-slider__slide">
                                  <div class="bde-div-1351-140-1351-1 bde-div bde-div-1351-140">
                                    <h2 class="bde-heading-1351-141-1351-1 bde-heading bde-heading-1351-141">
                                      Reverse with confidence
                                    </h2>
                                    <div class="bde-button-1351-142-1351-1 bde-button bde-button-1351-142">
                                      <a class="breakdance-link button-atom button-atom--primary bde-button__button"
                                      href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;857&quot;}}">
                                        <span class="button-atom__text">
                                          Read more
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="bde-advancedslide-1351-107-1351-1 bde-advancedslide bde-advancedslide-1351-107 swiper-slide swiper-slide-duplicate"
                              role="" aria-label="1 / 9" style="width: 814px; margin-right: 32px;" data-swiper-slide-index="0">
                                <div class="advanced-slider__slide">
                                  <div class="bde-div-1351-108-1351-1 bde-div bde-div-1351-108">
                                    <h4 class="bde-heading-1351-109-1351-1 bde-heading bde-heading-1351-109">
                                      Traffic Jam Assist
                                    </h4>
                                    <div class="bde-button-1351-110-1351-1 bde-button bde-button-1351-110">
                                      <a class="breakdance-link button-atom button-atom--primary bde-button__button"
                                      href="#" target="_self" data-type="action" data-action="{&quot;type&quot;:&quot;popup&quot;,&quot;popupOptions&quot;:{&quot;popupId&quot;:&quot;839&quot;}}">
                                        <span class="button-atom__text">
                                          Read more
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <span class="swiper-notification" aria-live="assertive" aria-atomic="true">
                            </span>
                          </div>
                          <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide"
                          aria-controls="swiper-wrapper-536548174fcfb35a">
                          </div>
                          <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide"
                          aria-controls="swiper-wrapper-536548174fcfb35a">
                          </div>
                          <div class="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal">
                            <span class="swiper-pagination-current">
                              3
                            </span>
                            /
                            <span class="swiper-pagination-total">
                              9
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div class="bde-globalblock-68-960 bde-globalblock">
            <div class="breakdance">
              <section class="bde-section-1354-100-1354-1 bde-section rsd-section-full bde-section-1354-100">
                <div class="section-container">
                  <div class="bde-div-1354-101-1354-1 bde-div bde-div-1354-101">
                    <div class="section-background-overlay">
                    </div>
                    <div class="bde-div-1354-102-1354-1 bde-div bde-div-1354-102">
                      <h2 class="bde-heading-1354-103-1354-1 bde-heading bde-heading-1354-103">
                        Did you know that DAILY is also electric?
                      </h2>
                      <div class="bde-button-1354-104-1354-1 bde-button rsd-blue-buttons bde-button-1354-104">
                        <a class="breakdance-link button-atom button-atom--custom bde-button__button"
                        href="#" target="_self" data-type="url">
                          <span class="button-atom__text">
                            Discover eDAILY range
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <section class="bde-section-68-539 bde-section">
            <div class="section-container">
              <div class="bde-div-68-581 bde-div">
                <div class="bde-image-68-540 bde-image">
                  <figure class="breakdance-image breakdance-image--584">
                    <div class="breakdance-image-container">
                      <div class="breakdance-image-clip">
                        <img class="breakdance-image-object" src="https://iveco.gr/storage/2024/08/Iveco-icons-Daily.svg"
                        width="" height="">
                      </div>
                    </div>
                  </figure>
                </div>
                <h5 class="bde-heading-68-541 bde-heading">
                  Choose your version
                </h5>
                <div class="bde-grid-68-543 bde-grid">
                  <div class="bde-div-68-544 bde-div">
                    <div class="bde-image-68-545 bde-image">
                      <figure class="breakdance-image breakdance-image--1246">
                        <div class="breakdance-image-container">
                          <div class="breakdance-image-clip">
                            <img class="breakdance-image-object" src="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Versions-Daily-van.jpg"
                            width="750" height="500" srcset="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Versions-Daily-van.jpg 750w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Versions-Daily-van-300x200.jpg 300w"
                            sizes="(max-width: 750px) 100vw, 750px">
                          </div>
                        </div>
                      </figure>
                    </div>
                    <div class="bde-columns-68-546 bde-columns">
                      <div class="bde-column-68-547 bde-column">
                        <h4 class="bde-heading-68-548 bde-heading">
                          DAILY Van
                        </h4>
                        <div class="bde-text-68-579 bde-text">
                          Active promotions
                        </div>
                      </div>
                      <div class="bde-column-68-549 bde-column">
                        <div class="bde-button-68-550 bde-button rsd-black-buttons rsd-button-icon-divide">
                          <a class="breakdance-link button-atom button-atom--custom bde-button__button"
                          href="#" target="_self" data-type="url">
                            <span class="button-atom__text">
                              Discover more
                            </span>
                          </a>
                        </div>
                        <div class="bde-button-68-580 bde-button rsd-black-buttons rsd-button-icon-divide">
                          <a class="breakdance-link button-atom button-atom--custom bde-button__button"
                          href="#" target="_self" data-type="url">
                            <span class="button-atom__text">
                              Configure
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bde-div-68-582 bde-div">
                    <div class="bde-image-68-583 bde-image">
                      <figure class="breakdance-image breakdance-image--1244">
                        <div class="breakdance-image-container">
                          <div class="breakdance-image-clip">
                            <img class="breakdance-image-object" src="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Versions-Daily-cab.jpg"
                            width="750" height="500" srcset="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Versions-Daily-cab.jpg 750w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Versions-Daily-cab-300x200.jpg 300w"
                            sizes="(max-width: 750px) 100vw, 750px">
                          </div>
                        </div>
                      </figure>
                    </div>
                    <div class="bde-columns-68-584 bde-columns">
                      <div class="bde-column-68-585 bde-column">
                        <h4 class="bde-heading-68-586 bde-heading">
                          DAILY Chassis Cab
                        </h4>
                        <div class="bde-text-68-587 bde-text">
                          Active promotions
                        </div>
                      </div>
                      <div class="bde-column-68-588 bde-column">
                        <div class="bde-button-68-589 bde-button rsd-black-buttons rsd-button-icon-divide">
                          <a class="breakdance-link button-atom button-atom--custom bde-button__button"
                          href="#" target="_self" data-type="url">
                            <span class="button-atom__text">
                              Discover more
                            </span>
                          </a>
                        </div>
                        <div class="bde-button-68-590 bde-button rsd-black-buttons rsd-button-icon-divide">
                          <a class="breakdance-link button-atom button-atom--custom bde-button__button"
                          href="#" target="_self" data-type="url">
                            <span class="button-atom__text">
                              Configure
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bde-div-68-591 bde-div">
                    <div class="bde-image-68-592 bde-image">
                      <figure class="breakdance-image breakdance-image--1243">
                        <div class="breakdance-image-container">
                          <div class="breakdance-image-clip">
                            <img class="breakdance-image-object" src="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Versions-Daily-4x4-1.jpg"
                            width="750" height="500" srcset="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Versions-Daily-4x4-1.jpg 750w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Versions-Daily-4x4-1-300x200.jpg 300w"
                            sizes="(max-width: 750px) 100vw, 750px">
                          </div>
                        </div>
                      </figure>
                    </div>
                    <div class="bde-columns-68-593 bde-columns">
                      <div class="bde-column-68-594 bde-column">
                        <h4 class="bde-heading-68-595 bde-heading">
                          DAILY 4x4
                        </h4>
                        <div class="bde-text-68-596 bde-text">
                          Active promotions
                        </div>
                      </div>
                      <div class="bde-column-68-597 bde-column">
                        <div class="bde-button-68-598 bde-button rsd-black-buttons rsd-button-icon-divide">
                          <a class="breakdance-link button-atom button-atom--custom bde-button__button"
                          href="#" target="_self" data-type="url">
                            <span class="button-atom__text">
                              Discover more
                            </span>
                          </a>
                        </div>
                        <div class="bde-button-68-599 bde-button rsd-black-buttons rsd-button-icon-divide">
                          <a class="breakdance-link button-atom button-atom--custom bde-button__button"
                          href="#" target="_self" data-type="url">
                            <span class="button-atom__text">
                              Configure
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bde-div-68-609 bde-div">
                    <div class="bde-image-68-610 bde-image">
                      <figure class="breakdance-image breakdance-image--1245">
                        <div class="breakdance-image-container">
                          <div class="breakdance-image-clip">
                            <img class="breakdance-image-object" src="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Versions-Daily-cng.jpg"
                            width="750" height="500" srcset="https://iveco.gr/storage/2024/08/1.Iveco-Daily-Versions-Daily-cng.jpg 750w, https://iveco.gr/storage/2024/08/1.Iveco-Daily-Versions-Daily-cng-300x200.jpg 300w"
                            sizes="(max-width: 750px) 100vw, 750px">
                          </div>
                        </div>
                      </figure>
                    </div>
                    <div class="bde-columns-68-611 bde-columns">
                      <div class="bde-column-68-612 bde-column">
                        <h4 class="bde-heading-68-613 bde-heading">
                          DAILY CNG
                        </h4>
                        <div class="bde-text-68-614 bde-text">
                          Active promotions
                        </div>
                      </div>
                      <div class="bde-column-68-615 bde-column">
                        <div class="bde-button-68-616 bde-button rsd-black-buttons rsd-button-icon-divide">
                          <a class="breakdance-link button-atom button-atom--custom bde-button__button"
                          href="#" target="_self" data-type="url">
                            <span class="button-atom__text">
                              Discover more
                            </span>
                          </a>
                        </div>
                        <div class="bde-button-68-617 bde-button rsd-black-buttons rsd-button-icon-divide">
                          <a class="breakdance-link button-atom button-atom--custom bde-button__button"
                          href="#" target="_self" data-type="url">
                            <span class="button-atom__text">
                              Configure
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  export default defineComponent({
    name: 'VEHICLES_PAGE',
    components: {
      Swiper,
      SwiperSlide,
    },
  });
</script>
<script lang="ts" setup>
import { ref, onMounted, computed, watch, defineComponent } from "vue";
import router from "@/router";
// import { vehiclesBanner } from "@/store/config";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination];

// import Detail from './detail.vue';
// import List from './list.vue';

// const showType = ref('list'); //list-新闻列表 detail-文章详情
// watch(
//   () => router.currentRoute.value,
//   (r) => {
//     const { query } = r;
//     if (query.id) {
//       // 详情
//       showType.value = 'detail';
//     } else {
//       // 列表
//       showType.value = 'list';
//     }
//   },
//   { deep: true, immediate: true },
// )
const names = {
  '0': 'Van',
  '1': 'Cab',
  '2': '4X4',
  '3': 'CNG',
}
const pagination = {
          clickable: true,
          renderBullet: function (index, className) {
            // return '<div id="van" class="bde-button-68-635 bde-button">' +
	          //           '<a class="breakdance-link button-atom button-atom--custom bde-button__button" href="#">' +
		        //             '<span class="button-atom__text">' + names[index] + '</span>' +
	          //           '</a>' +
            //         '</div>'
            return '<span class="bde-button-68-637 bde-button ' + className + '">' + names[index] + '</span>';
          },
        }
</script>
<style lang="less">
.vehciles-box {
  .swiper {
    width: 100%;
    height: 500px;
    background: #fff;
    .swiper-pagination-clickable .swiper-pagination-bullet {
      cursor: pointer;
      width: 50px;
      color: #000;
      border-radius: 20px;
      line-height: 20px;
      height: 20px;
      background: transparent;
      opacity: 1;
      margin-bottom: 20px;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background: transparent;
      border: 2px solid #1554FF;
      color: #1554FF;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #444;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .banner-img-box {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: contain;
    background-color: #fff;
  }
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }
  .bde-heading-68-690.bde-h4 {
    margin: 20px auto;
  } 
  .vehciles-slide-container {
    // margin-bottom: 20px;
  }
  .breakdance .bde-advancedslide .advanced-slider__slide {
    background: #000;
  }
}

</style>
