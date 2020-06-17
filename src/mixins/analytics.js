const tarteaucitron = window.tarteaucitron;

export const analytics = {
    methods: {
        setTarteaucitron: function() {
            tarteaucitron.init({
                "privacyUrl": "", /* Privacy policy url */

                "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
                "cookieName": "tarteaucitron", /* Cookie name */

                "orientation": "bottom", /* Banner position (top - bottom) */
                "showAlertSmall": false, /* Show the small banner on bottom right */
                "cookieslist": true, /* Show the cookie list */

                "adblocker": false, /* Show a Warning if an adblocker is detected */
                "AcceptAllCta" : true, /* Show the accept all button when highPrivacy on */
                "highPrivacy": true, /* Disable auto consent */
                "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */

                "removeCredit": true, /* Remove credit link */
                "moreInfoLink": false, /* Show more info link */
                "useExternalCss": true, /* If false, the tarteaucitron.css file will be loaded */
            });
        },
        setCustomService: function() {
            const _ = this;

            tarteaucitron.services.gaOversight = {
                key: 'gaOversight',
                type: 'other',
                name: 'AnalyticsOversight',
                needConsent: true,
                cookies: ['ga_oversight'],
                js() {
                    _.$ga.enable();
                },
                fallback() {
                    _.$ga.disable();
                }
            };
            (tarteaucitron.job = tarteaucitron.job || []).push('gaOversight');
        }
    },
    created() {
        this.setTarteaucitron();
        this.setCustomService();
    }
};
