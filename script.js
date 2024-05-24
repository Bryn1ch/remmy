document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');
    const openAccordionBtn = document.getElementById('openAccordionBtn');
    const accordionContainer = document.getElementById('accordionContainer');

    accordionItems.forEach(item => {
        const button = item.querySelector('.accordion-button');

        button.addEventListener('click', function () {
            const content = item.querySelector('.accordion-content');

            // Toggle the active class on the accordion item
            item.classList.toggle('active');

            // Show or hide the content
            if (item.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });

    openAccordionBtn.addEventListener('click', function () {
        // Toggle the display of the accordion container
        if (accordionContainer.style.display === 'block') {
            accordionContainer.style.display = 'none';
        } else {
            accordionContainer.style.display = 'block';
        }
    });

    // Получаем кнопку
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Когда пользователь прокручивает страницу вниз на высоту шапки, показываем кнопку
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        // Получаем высоту шапки
        let headerHeight = document.querySelector(".header").offsetHeight;

        if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    // Когда пользователь нажимает на кнопку, прокручиваем наверх документа
    scrollToTopBtn.onclick = function() {
        document.body.scrollTop = 0; // Для Safari
        document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
    };
});

// Функция для прокрутки к определенному разделу страницы
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("close-button")[0];

    const buttons = document.querySelectorAll('.request-invite');
    buttons.forEach(button => {
        button.onclick = function() {
            modal.style.display = "block";
        };
    });

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
