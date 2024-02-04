describe('1. Тестирование формы логина', function () {
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка совпадения текста
    })

    it('2. Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#forgotEmailButton').should('be.enabled'); // Кнопка "Забыли пароль?" кликабельная
        cy.get('#forgotEmailButton').click(); // Нажали "Забыли пароль?" 
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // Проверка совпадения текста
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели e-mail
        cy.get('#restoreEmailButton').should('be.enabled'); // Кнопка "Отправить код" кликабельная
        cy.get('#restoreEmailButton').click(); // Нажали "Отправить код"
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка совпадения текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый
    })

    it('3. Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
        cy.get('#loginButton').should('be.disabled'); // Кнопка войти некликабельная
        cy.get('#pass').type('iLoveqastudio5'); // Ввели неверный пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка войти кликабельная
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка совпадения текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый
    })

   it('4. Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('german123@dolnikov.ru'); // Ввели неверный логин
        cy.get('#loginButton').should('be.disabled'); // Кнопка войти некликабельная
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка войти кликабельная
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка совпадения текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый
    })

   it('5. Проверка валидации логин без @', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без собаки
        cy.get('#loginButton').should('be.disabled'); // Кнопка войти некликабельная
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка войти кликабельная
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка совпадения текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверка что крестик видимый
    })

   it('6. Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Посетили сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин с заглавными буквами
        cy.get('#loginButton').should('be.disabled'); // Кнопка войти некликабельная
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); // Кнопка войти кликабельная
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка совпадения текста
    })




}) 












