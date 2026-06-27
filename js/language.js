const LANGUAGE_KEY = "site-language";

// الحصول على الترجمة من المفتاح المتداخل
function getTranslation(lang, key) {
    return key.split(".").reduce((obj, item) => obj?.[item], translations[lang]);
}

// تغيير اللغة
function setLanguage(lang) {

    localStorage.setItem(LANGUAGE_KEY, lang);

    document.documentElement.lang = lang;

    document.documentElement.dir =
        lang === "ar" ? "rtl" : "ltr";


    translatePage(lang);

    updateLanguageButton(lang);

    if (typeof renderCart === "function") {
        renderCart();
    }

}

// ترجمة جميع عناصر الصفحة
function translatePage(lang) {

    // النصوص العادية
    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;
        const text = getTranslation(lang, key);

      if (text) {

    if (element.dataset.i18nHtml !== undefined) {

        element.innerHTML = text;

    } else {

        element.textContent = text;

    }

}

    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const key = element.dataset.i18nPlaceholder;
        const text = getTranslation(lang, key);

        if (text) {
            element.placeholder = text;
        }

    });

    // Titles
    document.querySelectorAll("[data-i18n-title]").forEach(element => {

        const key = element.dataset.i18nTitle;
        const text = getTranslation(lang, key);

        if (text) {
            element.title = text;
        }

    });

}

// تحديث زر اللغة
function updateLanguageButton(lang) {

    const btn = document.getElementById("languageBtn");

    if (!btn) return;

    if (lang === "ar") {

        btn.innerHTML = `
            <img src="images/flags/uk.svg" class="flag-icon">
            <span>English</span>
        `;

    } else {

        btn.innerHTML = `
            <img src="images/flags/saudi.svg" class="flag-icon">
            <span>العربية</span>
        `;

    }

}

function toggleLanguage() {

    const current =
        localStorage.getItem(LANGUAGE_KEY) || "ar";

    const newLang =
        current === "ar" ? "en" : "ar";

    setLanguage(newLang);

}

// عند فتح الموقع
document.addEventListener("DOMContentLoaded", () => {

    const saved = localStorage.getItem(LANGUAGE_KEY) || "ar";

    setLanguage(saved);

});