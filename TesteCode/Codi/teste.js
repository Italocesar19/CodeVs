document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.swiper', {
        // Ativa a navegação entre os slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Ativa a paginação (pontos)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Ativa a barra de progresso
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        // Configurações de loop e autoplay
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        // Configurações de efeito de transição
        effect: 'fade', // Outros efeitos: 'slide', 'cube', 'coverflow', 'flip'
        fadeEffect: {
            crossFade: true,
        },

        // Configurações avançadas de slides por visualização e espaçamento
        slidesPerView: 1,
        spaceBetween: 30,

        // Responsividade
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
});
