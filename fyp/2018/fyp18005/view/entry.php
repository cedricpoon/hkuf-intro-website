<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="title" content="HKU Fellows - A Mobile App for Peer Learners">
    <meta name="description" content="A HKU CS 2018/19 Final Year Project from fyp18005 to prompt knowledge exchange and solution among peers">
    <meta property="og:image" content=".\resources\plain_500.jpg">

    <title>HKU Fellows</title>
    <link rel=icon href=.\favicon.ico>

    <link rel="stylesheet" type="text/css" href=".\static\stylesheet\semantic.min.css">
    <script src=".\static\script\jquery.min.js"></script>
    <script src=".\static\script\less.min.js"></script>
    <script src=".\static\script\semantic.min.js"></script>
</head>
<body ontouchstart>
  <div class="ui segment" style="height:100%">
    <div class="ui active dimmer">
      <div class="ui big loader"></div>
    </div>
  </div>

  <script>
    var urlPrefix = '/fyp/2018/fyp18005/';
    var route = "<?php echo $route /* Setup route param */ ?>";

    $.ajax({
      url: urlPrefix + '?*main',
      context: document.body
    }).done(function(data) {
      setTimeout(function(){
        $('body').html(data);
      }, 100);
    });
  </script>

</body>
</html>
