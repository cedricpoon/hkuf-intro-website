<?php
  function preCommenting($seq, $authors, $comments) {
    foreach ($comments as $comment) {
      $comment->author = $authors->{$comment->author};
      $comment->seq = $seq++;

      if (isset($comment->comments)) {
        preCommenting($seq, $authors, $comment->comments);
        /* Compensate ONLY for non-nested comments */
        $seq += sizeof($comment->comments);
      }
    }
  }

  /* Prepare model for view */
  $store = json_decode(file_get_contents('store/article/'.$article.'.json'));

  /* Process author and sequence no. */
  preCommenting(1, $store->authors, $store->comments);

  /* Prepare view */
  require 'view/article.php';

  /* Prepare extra content */
  foreach ($store->include as $include) {
    include $include;
  }
?>
