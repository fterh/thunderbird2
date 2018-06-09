# thunderbird2
This is a complete rewrite of the original [thunderbird](https://github.com/fterh/thunderbird). Due to the number of changes (some which go beyond the surface), I decided to create an entirely new repo. Some of the changes are:

- thunderbird2 is a single-page app (SPA) powered by React using `create-react-app` (thunderbird only weakly uses React and is largely powered by ExpressJS)
- thunderbird2 delegates all API requests to the client as the data provider no longer requires API keys (thunderbird fetches data every minute and caches it locally on the webserver)
- thunderbird2 sees a visual design overhaul of thunderbird
