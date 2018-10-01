function appendPlaceHolders() {
  let sidebar = $('.ui.sidebar');
  let space = $(sidebar).height();
  let placeholder = (`
    <a class="item disabled">
      <div class="ui inverted placeholder">
        <div class="header">
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </a>
  `);
  const pHeight = 56;
  /* Append placeholders */
  $(sidebar).children()
  /* For each children of sidebar */
  .each(function(){
    space -= $(this).outerHeight(true);
  })
  /* After for each loop */
  .promise().done(function(){
    if (space / pHeight > 0) {
      $(sidebar).append(placeholder.repeat(space / pHeight));
    }
  });
};

function randomize(array) {
  /* Randomize post number & like / dislike for each tag */
  let randf = function(){
    $(this).html(Math.floor(Math.random() * 20) + 1)
  };
  $.each(array, function(i, item){
    $(item).each(randf);
  });
};

function sidebarInit() {
  const tabletWidth = 968;
  const mobileWidth = 430;
  let sidebar = $('.ui.sidebar');

  /* Hide / show sidebar */
  if ($(window).width() >= tabletWidth) {
    $(sidebar).addClass('visible')
  } else {
    $(sidebar).sidebar('hide');
  }

  /* Control 'wide' */
  if ($(window).width() <= mobileWidth) {
    $(sidebar).removeClass('wide')
  } else {
    $(sidebar).addClass('wide')
  }
};

function reposition(title) {
  /* Make page backable */
  window.history.pushState('{"route": "' + title + '"}', title, urlPrefix + '?' + title);
  /* Change title of Webpage*/
  $('title').html(title + ' | HKU Fellows');
  /* Change active sidebar item */
  $('.sidebar > .item.active').removeClass('active').click(siderbarItemOnClick);
  $('.sidebar > .item:contains(' + title + ')').addClass('active').off('click');
  /* Change title on topMenu */
  $('.currentlyAt .blue.label').html(title);
  $('.nav.menu .header').html(title);
};

function reRenderLess () {
  return new Promise((resolve, reject) => {
    if (!window.less) { reject(); }

    Promise.all([less.registerStylesheets(), less.refresh()]).then(function(){
      resolve();
    });
  });
};

function loadPage(link) {
  if (typeof link != 'undefined') {
    let pageholder = $('.pageholder');
    $('.article > .ui.container').html("");

    reposition(link);

    /* Show loading */
    $(pageholder).children('.loader').show();
    $(pageholder).children('.comingSoon').hide();
    $(pageholder).show();

    return new Promise((resolve) => {
      /* Ajax call page */
      $.ajax({
        url: urlPrefix + "?*" + link,
        context: document.body
      }).done(function(data) {

        setTimeout(function(){
          $('.article > .ui.container').html(data).hide();
          /* Load less after context is input */
          reRenderLess().then(() => {
            $('.article > .ui.container').show();
            $(pageholder).hide();
            randomize(['.thumbNo']);

            resolve();
          });
        }, 100);

      }).error(function(){

        $(pageholder).children('.loader').hide();
        $(pageholder).children('.comingSoon').show();
      });
    });
  }
};

function siderbarItemOnClick () {
  route = $(this).children('.title').html();
  loadPage(route);
};

function appendSidebarItemOnClick () {
  $('.sidebar > .item.enabled').click(siderbarItemOnClick);
};

window.onpopstate = function(event) {
  route = JSON.parse(history.state).route;
  loadPage(route);
};

$(document).ready(function(){
  reRenderLess();
  randomize(['.postNo']);
  sidebarInit();
  appendPlaceHolders();
  appendSidebarItemOnClick();
  loadPage(route);
  /* attach to hamburger */
  $('.ui.sidebar').sidebar('attach events', '.hamburger');
});

$(window).resize(function(){
  sidebarInit();
});
