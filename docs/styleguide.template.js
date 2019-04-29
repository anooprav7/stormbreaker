module.exports = {
	template: `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <!-- <link rel="apple-touch-icon" sizes="180x180" href="https://experience.everydayhero.do/apple-touch-icon.png" />
            <link rel="icon" type="image/png" href="https://experience.everydayhero.do/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="https://experience.everydayhero.do/favicon-16x16.png" sizes="16x16" />
            <link rel="manifest" href="https://experience.everydayhero.do/manifest.json" />
            <link rel="mask-icon" href="https://experience.everydayhero.do/safari-pinned-tab.svg" color="#1bab6b" />
            <meta name="apple-mobile-web-app-title" content="Everydayhero" />
            <meta name="application-name" content="Everydayhero" /> -->
            <meta name="theme-color" content="#ffffff" />
            <link rel="icon" type="image/x-icon" href="./images/favicon.ico" />
            <title><%= htmlWebpackPlugin.options.title %></title>
            <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,700" rel="stylesheet" />
            <!-- <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
            <link rel="stylesheet" href="https://use.typekit.net/lbp2sai.css" /> -->
            <style type="text/css">
                * {
                    font-family: '"Nunito Sans", "proxima-nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
                }
                /* Icons style overrides  */
                #Icon-container article {
                    display: flex;
                    flex-wrap: wrap;
                }
                #Icon-container article > div:first-child,
                #Icon-container article p {
                    width: 100%;
                    flex-basis: 100%;
                }
                #Icon-container article > div[class*='rsg--root'] {
                    margin-right: 2rem;
                }
                #Icon-container article > div[class*='rsg--root'] [class*='rsg--preview'] {
                    text-align: center;
                    font-size: 1.5rem;
                }
                #Icon-container article > div[class*='rsg--root'] [class*='rsg--toolbar'] {
                    display: none;
                }
            </style>
        </head>
        <body>
            <div id="app"></div>
        </body>
    </html>
    `
};
