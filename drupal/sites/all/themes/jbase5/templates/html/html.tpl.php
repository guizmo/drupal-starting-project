<?php
// $Id$
?>
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if gt IE 8]><!--><html class="no-js" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"><!--<![endif]-->
<head<?php print $rdf->profile; ?>>
  <?php print $head; ?>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
  <?php print $scripts; ?>
</head>
<body id="<?php print $body_id; ?>" class="<?php print $classes; ?>" <?php print $attributes;?>>
  <p class="element-hidden"><em><a href="#main"><?php print t('Skip to Main Content'); ?></a></em> &darr;</p> 
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>
