<?php function commenting($comments) { ?>
  <?php foreach ($comments as $comment) { ?>
    <div class="comment">
      <i class="ui avatar big icon <?php echo $comment->author->icon ?>"></i>
      <div class="content">
        <a class="author" href="<?php echo $comment->author->href ?>"><?php echo $comment->author->name ?></a>
        <div class="metadata">
          <span class="date"><?php echo $comment->timestamp ?>&nbsp;&nbsp;&nbsp;#<?php echo $comment->seq ?></span>
        </div>
        <div class="text">
          <?php echo $comment->context ?>
        </div>
        <div class="actions">
          <a class="reply">Reply</a>
          <a>
            <i class="thumbs up icon"></i>
            <?php echo $comment->thumbsUp ?>
          </a>
          <a>
            <i class="thumbs down icon"></i>
            <?php echo $comment->thumbsDown ?>
          </a>
          <a>
            <i class="share square icon"></i>
          </a>
          <a>
            <i class="exclamation triangle icon"></i>
          </a>
        </div>
      </div>
      <?php if (isset($comment->comments) && $comment->comments != "") { ?>
        <div class="comments">
          <?php commenting($comment->comments); ?>
        </div>
      <?php } ?>
    </div>
  <?php } ?>
<?php } ?>

<link rel="stylesheet/less" type="text/css" href=".\static\stylesheet\article.less">

<div class="ui threaded comments">
  <h3 class="ui dividing header"><?php echo $store->heading ?></h3>

  <?php commenting($store->comments) ?>
</div>
