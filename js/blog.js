const questionsPerPage = 6; // Количество вопросов на странице
let currentPage = 1; // Текущая страница
const totalQuestions = 12; // Общее количество вопросов (измените, если нужно)
const totalPages = Math.ceil(totalQuestions / questionsPerPage); // Общее количество страниц

// Функция для отображения вопросов
function displayQuestions() {
    const questions = document.querySelectorAll('.questions__item'); // Получаем все блоки
    questions.forEach((question, index) => {
        // Скрываем или показываем в зависимости от текущей страницы
        if (index >= (currentPage - 1) * questionsPerPage && index < currentPage * questionsPerPage) {
            question.style.display = 'block'; // Показываем блок
        } else {
            question.style.display = 'none'; // Скрываем блок
        }
    });
}

// Функция для создания пагинации
function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Очищаем пагинацию

    const ul = document.createElement('ul');

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = i;

        if (i === currentPage) {
            a.classList.add('active');
        }

        a.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            displayQuestions();
            setupPagination();
        });

        li.appendChild(a);
        ul.appendChild(li);
    }

    pagination.appendChild(ul);
}

// Первоначальная инициализация
displayQuestions();
setupPagination();