<?php
/**
 * Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div class="container">.
 *
 * @since fullbase
 */
?><!DOCTYPE html>
<html <?php language_attributes();?>>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo( 'description' ); ?>" />

	<!-- Meta for IE support -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

	<?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>

    <header class="navbar navbar-fixed-top">
    	<div class="container">

  			<div class="navbar-header">
  				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainmenu" aria-expanded="false" aria-controls="navbar">
  					<span class="icon-bar"></span>
  					<span class="icon-bar"></span>
  					<span class="icon-bar"></span>
  				</button>
  				<a class="navbar-brand" href="<?php echo home_url(); ?>"><i class="fa fa-angle-double-right"></i> <?php bloginfo('title'); ?> </a>
  			</div>

  			<div id="mainmenu" class="collapse navbar-collapse">
  			 	<?php /* Main Navigation */
  					wp_nav_menu( array(
  					  'theme_location' => 'header',
  					  'depth' => 2,
  					  'container' => false,
  					  'menu_class' => 'nav navbar-nav navbar-right',
  					  'fallback_cb'       => 'fullbase_wp_bootstrap_navwalker::fallback',
  					  //Process nav menu using our custom nav walker
  					  'walker' => new fullbase_wp_bootstrap_navwalker())
  					);
  				?>
  			</div><!--/.nav-collapse -->

    	</div>
    </header>

    <?php if (is_page_template( 'page-templates/home-page.php' )) { ?>

  		<!-- seo title home -->
  		<h1 class="home-title"><?php bloginfo('name'); ?> -  <?php bloginfo('description'); ?></h1>

  		<?php if (is_home()){ ?> <div class="spacer"> </div> <?php } ?>

  	<?php } else { ?>

  	   <div class="spacer"> </div>

  	<?php } ?>

	<!-- Prompt IE 6 and 7 users to install Chrome Frame: chromium.org/developers/how-tos/chrome-frame-getting-started -->
	<!--[if lt IE 9]>
		<p style="margin:0px;padding: 8px 35px 8px 14px;color: #b94a61;background-color: #f2dede;border: 1px solid #eed3d7;">Your browser is <em>ancient!</em> <strong><a style="color: #b94a61;" href="http://browsehappy.com/" target="_blank">Upgrade to a different browser</a></strong> or <strong><a style="color: #b94a61;" href="http://www.google.com/chromeframe/?redirect=true" target="_blank">install Google Chrome Frame</a></strong> to experience this site.</p>
	<![endif]-->


	<?php if (!is_page_template( 'page-templates/home-page.php' )){ ?>

	<div class="container">

		<div class="row">

	<?php } ?>
