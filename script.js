<!DOCTYPE html>
<html lang="ky">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Аскат & Анара — Үйлөнүү үлпөтүнө чакыруу</title>
    
    <!-- Подключение премиальных шрифтов Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Great+Vibes&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet">
    
    <!-- Подключаем наш файл стилей style.css -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Фоновая музыка (аудиофайл music.mp3 должен лежать в той же папке) -->
    <audio id="bgMusic" src="music.mp3" preload="auto" loop></audio>

    <!-- ==========================================================
       ЭКРАН 1: ИНТЕРАКТИВНЫЙ БАРХАТНЫЙ КОНВЕРТ И СУРГУЧНАЯ ПЕЧАТЬ
       ========================================================== -->
    <div class="envelope-screen" id="envelopeScreen">
        <div class="envelope-lace"></div>
        <div class="envelope-title">A Love Letter From</div>
        <div class="envelope-names">Аскат & Анара</div>
        
        <!-- Сургучная печать с инициалами. При клике запускает открытку -->
        <div class="wax-seal" onclick="openCard()">
            <div class="seal-text">A & A</div>
        </div>

        <button class="open-invitation-btn" onclick="openCard()">Чакырууну ачуу</button>
    </div>


    <!-- ==========================================================
       ЭКРАН 2: ОСНОВНОЙ САЙТ-ПРИГЛАШЕНИЕ
       ========================================================== -->
    <div class="container">
        <div class="main-content">
            
            <!-- БЛОК 1: Приветствие и имена жениха и невесты -->
            <div class="intro-section">
                <p class="greeting-text">Урматтуу биздин сыйлуу коногубуз!</p>
                <p class="sub-greeting">Сиздерди балдарыбыз</p>
                
                <!-- Имена с красивым каллиграфическим шрифтом -->
                <div class="couple-name-item">Аскат</div>
                <div class="connector-word">менен</div>
                <div class="couple-name-item">Анаранын</div>
                
                <p class="invite-body-text">
                    бакытына күбө болуп, үйлөнүү-үлпөт тоюна арналган салтанаттуу кечебизге келип, каалоо-тилек айтып, бата берип, кадырлуу коногубуз болуп кетүүгө чакырабыз!
                </p>
            </div>


            <!-- БЛОК 2: Фотография в винтажной арочной рамке -->
            <div class="photo-container">
                <div class="photo-frame">
                    <!-- Файл photo.jpg должен лежать в папке -->
                    <img src="photo.jpg" alt="Аскат и Анара">
                </div>
            </div>


            <!-- БЛОК 3: Живой таймер обратного отсчета до 01.11.2026 -->
            <div class="countdown-section">
                <div class="countdown-title">Тойго калган убакыт</div>
                <div class="countdown-grid" id="countdown">
                    <div class="countdown-item"><span id="days">00</span><label>Күн</label></div>
                    <div class="countdown-item"><span id="hours">00</span><label>Саат</label></div>
                    <div class="countdown-item"><span id="minutes">00</span><label>Мүнөт</label></div>
                    <div class="countdown-item"><span id="seconds">00</span><label>Секунд</label></div>
                </div>
            </div>


            <!-- БЛОК 4: Программа торжества (Таймлайн) -->
            <div class="program-section">
                <div class="section-title">Тойдун жүрүшү:</div>
                
                <div class="program-item">
                    <div class="program-time">17:00</div>
                    <div class="program-text">Конокторду тосуп алуу</div>
                </div>
                <div class="program-item">
                    <div class="program-time">18:00</div>
                    <div class="program-text">Тойдун башталышы</div>
                </div>
                <div class="program-item">
                    <div class="program-time">20:30</div>
                    <div class="program-text">Жаш жубайлардын алгачкы бийи</div>
                </div>
                <div class="program-item">
                    <div class="program-time">21:00</div>
                    <div class="program-text">Той тортун кесүү</div>
                </div>
                <div class="program-item">
                    <div class="program-time">23:00</div>
                    <div class="program-text">Тойдун аякташы</div>
                </div>
            </div>


            <!-- БЛОК 5: Локация и ресторан -->
            <div class="location-section">
                <div class="restaurant-name">«Сыйабан grand»</div>
                <div class="restaurant-type">ресторан</div>
                <p class="restaurant-address">Базар-Коргон шаары</p>
                
                <!-- Ссылка на Яндекс Карты -->
                <a href="https://yandex.com/maps/-/CXFbqWNi" target="_blank" class="map-btn">Картадан көрүү</a>
            </div>


            <!-- БЛОК 6: Хозяева торжества (Родители) -->
            <div class="hosts-section">
                <p class="waiting-text">Сиздерди чыдамсыздык менен күтөбүз!</p>
                <p class="hosts-title">Урматтоо менен, той ээлери:</p>
                <div class="hosts-names">Арапбай — Манзура</div>
            </div>


            <!-- БЛОК 7: Форма опроса (RSVP) с отправкой писем на вашу почту -->
            <div class="rsvp-section">
                <div class="section-title" style="color: var(--gold);">Сурамжылоо</div>
                <p class="rsvp-desc">Тойго катышарыңызды билдирип коюңуз:</p>
                
                <!-- 
                  ВАЖНО: Замените YOUR_FORM_ID на ваш реальный ID с сайта formspree.io, 
                  чтобы ответы гостей приходили прямо на ваш email!
                -->
                <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                    <input type="text" name="name" class="form-input" placeholder="Аты-жөнүңүз" required>
                    <p class="form-hint">Жубайыңыз менен келсеңиз, экөөнүздүн тең аты-жөнүңүздү жазыңыз</p>
                    
                    <div class="radio-group">
                        <label class="radio-label">
                            <input type="radio" name="attend" value="Албетте, келем" checked> Албетте, келем
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="attend" value="Жубайым менен келем"> Жубайым менен келем
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="attend" value="Келе албайм"> Келе албайм
                        </label>
                    </div>
                    
                    <button type="submit" class="submit-btn">ЖӨНӨТҮҮ</button>
                </form>
            </div>


            <!-- Фирменный минималистичный логотип в самом низу -->
            <div class="footer-logo">A & A</div>

        </div>
    </div>

    <!-- Подключаем логику и анимации из файла script.js -->
    <script src="script.js"></script>
</body>
</html>