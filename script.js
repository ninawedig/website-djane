function init() {
    showReviews();
    renderHeader();
    renderFooter();
    showEvents();
}

function renderHeader() {
    document.getElementById('header').innerHTML = headerHTML();
}

function renderFooter() {
    document.getElementById('footer').innerHTML = footerHTML();
}

function openHome() {
    window.location.href = "index.html";
}

function openImpressum() {
    window.location.href = "impressum.html";
}

function openAGB() {
    window.location.href = "agb.html";
}

function openDatenschutz() {
    window.location.href = "datenschutz.html";
}


function headerHTML() {
    return /*HTML*/`
            <div>
            <img onclick="openHome()" class="logo" src="./img/logo_black_zugeschnitten.png">
        </div>
        <div class="menu">
            <!-- <span class="menu-link" onclick="openHome()">HOME</span>
            <span class="menu-link" onclick="openOffer()">ANGEBOT</span>
            <span class="menu-link" onclick="openAbout()">ÜBER MICH</span>
            <span class="menu-link" onclick="openBlog()">BLOG</span> -->
            <a class="phonebutton" href="tel:0176 22797487">
            <img class="icon" src="./img/phone_white.png" alt="">
            </a>
            <a class="link" href="mailto: info@lenirosejanemusic.de">
                <img class="icon" src="./img/email_white.png" alt="">
            </a>
        </div>`
}

function footerHTML() {
    return /*HTML*/`
    <div class="footer-left">
            <!-- <span onclick="openAGB()" class="footer-link">AGB</span> -->
            <span onclick="openImpressum()" class="footer-link">IMPRESSUM</span>
            <span onclick="openDatenschutz()" class="footer-link">DATENSCHUTZ</span>
        </div>

        <div class="footer-right-section">
            <div class="footer-right">
                <span class="footer-typo">SOCIAL MEDIA</span>
                <div class="icon-section-footer">
                <a href="https://www.facebook.com/leni.rose.jane.music" target="_blank">
                    <img class="icon-footer" src="./img/icons_white/facebook_icon_white.png" alt="Facebook">
                    </a>
                    <a href="https://www.instagram.com/leni_rose_jane_music/" target="_blank">
                    <img class="icon-footer" src="./img/icons_white/instagram_icon_white.png" alt="Instagram">
                    </a>
                    
                </div>
            </div>

            <!-- <div class="footer-right">
                <span class="footer-typo">MEINE TRACKS</span>
                <div class="icon-section-footer">
                <a href="" target="_blank">
                    <img class="icon-footer" src="./img/icons_white/youtube_icon_white.png" alt="Youtube">
                    </a>
                <a href="" target="_blank">
                    <img class="icon-footer" src="./img/icons_white/amazon_music_icon_white_square.png" alt="Amazonmusic">
                    </a>
                <a href="" target="_blank">
                    <img class="icon-footer" src="./img/icons_white/spotify_icon_white.png" alt="Spotify">
                    </a>
                <a href="" target="_blank">
                <img class="icon-footer" src="./img/icons_white/Apple_Music_Icon_wht_sm_073120.svg" alt=""> 
                    </a>
                </div>
            </div> -->
        </div>`
}

let reviews = [
    {
        'text': 'Ich habe Maren im Sonnendeck kennengerlernt, als sie im Sommer aufgelegt hat. Die Musik war richtig chillig, sie hat den Nachmittag schön unterlegt.',
        'author': 'Marina Mustermann',
        'job': 'BESUCHERIN SONNENDECK',

    },
    {
        'text': 'Die Zusammenarbeit mit Maren macht mir immer viel Spaß. Ich kann mich zu 100% auf sie verlassen und die Stimmun ist gesichert.',
        'author': 'Peter Pan',
        'job': 'BOOKER',

    },
    {
        'text': 'Maren hat auf unserer Firmenfeier aufgelegt. Durch ihre Musik war die Stimmung super. Sie hat für alle Altersklassen den richtigen Beat aufgelegt.',
        'author': 'Max Mustermann',
        'job': 'UNTERNEHMENSINHABER',

    },
    {
        'text': 'Im Sommer war ich in der Sundowner-Bar in Travemünde. Maren hat mit ihrer Musik richtig Stimmung gemacht. Ich konnte gar nicht aufhören zu tanzen.',
        'author': 'Nina Neu',
        'job': 'BESUCHERIN SUNDOWNER',

    },
    {
        'text': 'Ich habe Maren schon für verschiedene Veranstaltungen gebucht. Sie macht super Musik und ist darüberhinaus sehr zuverlässig und eine treue Business-Partnerin.',
        'author': 'Bea Beispiel',
        'job': 'BOOKERIN',
    },
]

function showReviews() {
    for (let i = 0; i < 3; i++) {
        document.getElementById('review').innerHTML += `
        <div class="review-block">
        <span class="review-text">${reviews[i]['text']}</span>
        <span class="author">${reviews[i]['author']}</span>
        <span class="job-title">${reviews[i]['job']}</span>
        </div>
    `
    }
}

let currentIndex = 0;

function slightright() {
    document.getElementById('review').innerHTML = '';
    currentIndex = (currentIndex + 1) % reviews.length;  // Aktualisieren des aktuellen Index für die nächste Anzeige
    for (let i = currentIndex; i < currentIndex + 3; i++) {
        const review = reviews[i % reviews.length]; // Verwenden des Modulo-Operators, um von vorne zu beginnen, wenn das Ende erreicht ist
        document.getElementById('review').innerHTML += `
            <div class="review-block">
                <span class="review-text">${review['text']}</span>
                <span class="author">${review['author']}</span>
                <span class="job-title">${review['job']}</span>
            </div>
        `;
    }

}

function slightleft() {
    document.getElementById('review').innerHTML = '';
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    for (let i = currentIndex; i < currentIndex + 3; i++) {
        const reviewIndex = (i + reviews.length) % reviews.length; // Wenn i negativ ist, wird er durch Hinzufügen der Länge des Arrays wieder positiv
        const review = reviews[reviewIndex];
        document.getElementById('review').innerHTML += `
            <div class="review-block">
                <span class="review-text">${review['text']}</span>
                <span class="author">${review['author']}</span>
                <span class="job-title">${review['job']}</span>
            </div>
        `;
    }
}

function showEvents() {
    const eventLinksContainer = document.getElementById('eventLinksContainer');
    const linksWidth = eventLinksContainer.scrollWidth; // Gesamtbreite aller Links

    let position = window.innerWidth; // Startposition am rechten Rand

    setInterval(() => {
        position--; //Wir reduzieren die Position des Containers um 1 Pixel. Dadurch bewegt sich der Container kontinuierlich nach links.
        eventLinksContainer.style.transform = `translateX(${position}px)`; // Wir setzen die CSS-Transformations-Eigenschaft des Containers, um ihn horizontal zu verschieben. Die Verschiebung erfolgt um die Anzahl der Pixel, die durch die Variable position definiert ist

        // Wenn der Container das Bild verlässt, setze die Position neu
        if (position <= -linksWidth) {
            position = window.innerWidth;
        }
    }, 15); // Ändere die Zeit, um die Geschwindigkeit anzupassen
}
;






