# AT1
## Title: Проверка авторизации пользователя

### Precondition:
1. Открыть главную страницу JS-learn

### Step №1:
#### Action:
- В хедере нажать на кнопку авторизации 
#### Expectation
1. Отображается модальное окно авторизации

### Step №2
#### Action:
- Проверить элементы модального окна
#### Expectation
1. Отображается заголовок "Вход"
2. Отображается кнопка "Регистрация"
3. Отображается поле "Email"
4. Отображается поле "Пароль"
5. Отображается кнопка "Забыли?"
6. Отображается кнопка "Войти"
7. Отображается кнопка крестик
8. Отображается блок "Вход через социальные сети"

### Step №3:
#### Action:
- Нажать на крестик в модальном окне
#### Expectation
1. НЕ отображается модальное окно авторизации

### Step №4:
#### Action:
- В хедере нажать на кнопку авторизации
#### Expectation
1. Отображается модальное окно авторизации

### Step №5:
#### Action:
- Заполнить поля email / пароль и нажать на кнопку "Войти"
#### Expectation
1. НЕ отображается модальное окно авторизации
2. В хедере отображается имя зарегистрированного пользователя "Роман Лыско"