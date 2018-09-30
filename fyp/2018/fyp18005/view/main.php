<body>
  <script>
    $.getScript(".\\static\\script\\script.js");
  </script>

  <div class="ui inverted visible wide left vertical sidebar menu">
    <a class="item disabled">
      <h5 class="ui inverted header">
        <i class="circular inverted teal graduation cap icon"></i>
        <div class="content">
          <span class="ui teal">HKU Fellows</span>
          <div class="sub header">Mobile App for Peer Learners</div>
        </div>
        <i class="ui bell icon"></i>
      </h5>
    </a>

    <?php include 'sidebarItems.php' ?>

  </div>

  <div class="pusher article">

    <?php include 'topMenu.php' ?>

    <?php include 'bottomMenu.php' ?>

    <div class="pageholder ui active inverted dimmer">
      <div class="ui text loader">Loading Page</div>
      <div class="comingSoon" style="display: none">
        <i class="big ui loading cog icon"></i>
        <p><div>Coming Soon & Stay Tuned</div></p>
      </div>
    </div>

    <div class="ui container"></div>
  </div>
</body>
