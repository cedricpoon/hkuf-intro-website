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

function randomize() {
  /* Randomize post number & like / dislike for each tag */
  let randf = function(){
    $(this).html(Math.floor(Math.random() * 100) + 1)
  };
  $('.postNo').each(randf);
  $('.thumbNo').each(randf);
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

function reRenderLess (f) {
  if (!window.less) { return; }
  Promise.all([less.registerStylesheets(), less.refresh()]).then(function(){
    f();
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
    /* Ajax call page */
    $.ajax({
      url: urlPrefix + "?*" + link,
      context: document.body
    }).done(function(data) {

      setTimeout(function(){

        $('.article > .ui.container').html(data);
        /* Load less after context is input */
        reRenderLess(function(){
          $(pageholder).hide();
        });
      }, 100);

    }).error(function(){

      $(pageholder).children('.loader').hide();
      $(pageholder).children('.comingSoon').show();

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
  randomize();
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
