# hkuf-intro-website
Internal project for introductory website of HKU Fellows
## Feature
- [X] PHP Routing for subpages — `/index.php`
- [X] Ajax on subpages and mainpage loading — `/?*(...)`
- [X] Semantic UI on design — [https://semantic-ui.com/](https://semantic-ui.com/ "Semantic UI")
- [X] Less.js for css — [http://lesscss.org/](http://lesscss.org/ "Less.js")
- [X] MVC as infrastructure
## Run
1. `php -S localhost:8080`
**(Please set document root at `/` instead of `/fyp/2018/fyp18005`)**
2. Browse http://localhost:8080/fyp/2018/fyp18005/
## Develop
### Adding New Subpages
1. Insert new sidebar item in /store/sidebarItems.json
2. Structure new subpage in /store/article/*.json (Refer to other articles)
### Paths
> Root: /fyp/2018/fyp18005/
- Controller: /controller/*.php
- Model: /store/*.json
- View: /view/*.php
- Subpages view: /view/article/*.php
- JavaScript: /static/script/*.js
- Stylesheet: /static/stylesheet/*.css(.less)
