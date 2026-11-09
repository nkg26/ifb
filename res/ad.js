// ad.js - Smart Context-Aware Ad Injector Engine

document.addEventListener("DOMContentLoaded", function () {
    console.log("Ad Engine Initialized...");

    // 1. PAGE DATA EXTRACTOR (Page Ka Pura Data Extract Karna)
    const pageData = {
        url: window.location.href,
        title: document.title,
        headingText: Array.from(document.querySelectorAll('h1, h2')).map(h => h.innerText).join(" "),
        bodyText: document.body.innerText.toLowerCase(),
        metaDescription: getMetaContent('description')
    };

    console.log("Scraped Page Context:", pageData);

    // Helper function for meta tags
    function getMetaContent(name) {
        const element = document.querySelector(`meta[name="${name}"]`);
        return element ? element.getAttribute('content').toLowerCase() : '';
    }

    // 2. AD SELECTION LOGIC (Konsi Ad Dikhani Hai)
    function selectBestAd(data) {
        const currentHour = new Date().getHours();
        
        // Rule A: Time-based targeting (e.g. Special Night Offer)
        let timeBonus = (currentHour >= 20 || currentHour < 6) ? "Night Special Offer" : "Standard Offer";

        // Rule B: Keyword / Content-based targeting
        if (data.bodyText.includes("washing machine") || data.bodyText.includes("वाशिंग मशीन")) {
            return {
                title: "⚡ Firm Special: IFB Washing Machine Offer!",
                desc: `Get 20% off on Top & Front Loaders. (${timeBonus})`,
                cta: "Buy Now",
                link: "https://nkg26.github.io/NE/resources/location-ne.html",
                bg: "#11161d"
            };
        } else if (data.bodyText.includes("microwave") || data.bodyText.includes("माइक्रोवेव")) {
            return {
                title: "🍲 Firm Special: Smart Convection Ovens",
                desc: "Upgrade your kitchen with exchange bonuses today!",
                cta: "Explore Offers",
                link: "https://nkg26.github.io/NE/resources/location-ne.html",
                bg: "#1a212c"
            };
        } else {
            // Default Generic Ad
            return {
                title: "🏆 India's Leading Home Appliances Partner",
                desc: "Contact our firm for exclusive festive deals & 0% EMI.",
                cta: "Visit Firm Store",
                link: "https://nkg26.github.io/NE/resources/location-ne.html",
                bg: "#0f141c"
            };
        }
    }

    // 3. AD RENDERER (Ad Ko Page Par Inject Karna)
    function injectAd() {
        const selectedAd = selectBestAd(pageData);

        // Targeted Ad Slot dhoondho (Agar HTML me diya ho)
        let adTargetContainer = document.getElementById("ad-slot-header") || document.getElementById("ad-slot-inline");

        // Agar HTML page me koi ad-slot div nahi hai, toh automatic body ke top/bottom par insert karega
        if (!adTargetContainer) {
            adTargetContainer = document.createElement("div");
            adTargetContainer.id = "auto-firm-ad";
            document.body.prepend(adTargetContainer); // Page ke top par attach
        }

        // HTML Markup Insert
        adTargetContainer.innerHTML = `
            <div style="
                background: ${selectedAd.bg};
                color: #e8ecf1;
                border: 1px solid #d4af37;
                border-radius: 8px;
                padding: 15px 20px;
                margin: 20px 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-family: Arial, sans-serif;
                box-shadow: 0 4px 15px rgba(0,0,0,0.4);
            ">
                <div>
                    <span style="font-size: 10px; color: #d4af37; letter-spacing: 1px; font-weight: bold;">FIRM SPONSORED AD</span>
                    <h4 style="margin: 3px 0; color: #f4d068;">${selectedAd.title}</h4>
                    <p style="font-size: 13px; color: #a0aec0; margin: 0;">${selectedAd.desc}</p>
                </div>
                <a href="${selectedAd.link}" target="_blank" style="
                    background: linear-gradient(135deg, #d4af37, #b89327);
                    color: #000;
                    padding: 8px 18px;
                    text-decoration: none;
                    font-weight: bold;
                    border-radius: 4px;
                    font-size: 13px;
                ">${selectedAd.cta}</a>
            </div>
        `;
    }

    // Run Injection
    injectAd();
});
