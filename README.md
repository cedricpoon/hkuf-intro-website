# hkuf-intro-website
Internal project for introductory website of HKU Fellows
## Feature
- [X] PHP Routing for subpages
- [X] Ajax on subpages and mainpage loading
- [X] Semantic UI on design
- [X] Less.js for css
- [X] MVC as infrastructure
## Develop
### Adding new subpages
1. Insert new sidebar item in /store/sidebarItems.json
2. Design new view as /view/article/[Same file name as title].php
### Paths
- Controller: /controller/*.php
- Model: /store/*.json
- View: /view/*.php
- Subpages view: /view/article/*.php
- JavaScript: /static/script/*.js
- Stylesheet: /static/stylesheet/*.css(.less)
