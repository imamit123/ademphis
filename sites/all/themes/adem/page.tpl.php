<div id="page" class="page with-navigation"> 
  
  <!-- ______________________ HEADER _______________________ -->
  <div class=" navbar-fixed-top">
    <div id="header">
      <div class="container_19"></div>
    </div>
    
    <!-- ______________________ NAVIGATION _______________________ -->
    
    <div id="nav" class="navbar navbar-static-top">
      <div class="container_19">
        <div class="nav-container nav-logo">
          <div class="site_logo" onclick="#" value="click here" style="cursor: pointer"> <?php if ($logo): ?>
            <a href="<?php print check_url($front_page); ?>" title="<?php print t('Home'); ?>"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" /></a>
            <?php endif; ?></div>
        </div>
        <div class="divider-vertical"></div>
        <div class="nav-container nav-links">
          
            <div id="navigation" class="block block-nice-menus block-odd">
       <?php/* <?php if ($page['navigation']) :?>
            <?php print drupal_render($page['navigation']); ?>
            <?php else :
            if (module_exists('i18n_menu')) {
            $main_menu_tree = i18n_menu_translated_tree(variable_get('menu_main_links_source', 'main-menu'));
            } else {
            $main_menu_tree = menu_tree(variable_get('menu_main_links_source', 'main-menu')); 
            }
            print drupal_render($main_menu_tree);
            endif; ?> */?>
			<div class="nav">
<?php print render($page['dutch']); ?>
</div>
            </div>
          </div>
      <?php
           $block = module_invoke('nice_menus', 'block_view', 1);
           print render($block['content']);
         ?>
       
        <div class="divider-vertical"></div>
        <div class="nav-container phone"><?php print render($page['search_area']); ?></div>

           
            
      </div>
    </div>
    <!-- /block-inner /block --> 
    
  </div>
</div>
</div>
</div>

<!-- ______________________ MAIN _______________________ -->

<div id="main" class="clearfix">
  <div id="content-top-full">
    <div class="region region-content-top-full">
      <div class="block block-block block-odd clearfix" id="block-block-361">
        <div class="block-inner">
          <div class="content">
          <?php if ($is_front): ?>
            <div id="header_slider" class="slide-wrapper">
  <div class="slide slide3 background" style="opacity: 1;">
                <?php print render($page['banner']); ?>  

            
              </div>
         
              <div class="container_19 slide-inner-wrapper">
                <div class="row">
             
                  <div class="offset1 span6 slide-content slide3" style="height: 599px; display: block; opacity: 1; left: 0px;">
                     <?php print render($page['home_block']); ?> 
                  </div>
              
                  <ul id="verticals">
                    <li title="Marketing" style="cursor: pointer; " value="click here" onclick="location.href='node/3'" id="vertical-marketing" class="span3">
                       <?php if ($page['hosting']): ?><?php print render($page['hosting']); ?><?php endif; ?>
                    </li>
                    <li title="Sales" style="cursor: pointer; " value="click here" onclick="location.href='node/4'" id="vertical-sales" class="span3">
                       <?php if ($page['apps']): ?><?php print render($page['apps']); ?><?php endif; ?>
                    </li>
                    </li>
                    <li title="Support" style="cursor: pointer; " value="click here" onclick="location.href='node/9'" id="vertical-support" class="span3">
                       <?php if ($page['tourism']): ?><?php print render($page['tourism']); ?><?php endif; ?>
                    </li>
                    </li>
                    <li title="Support" style="cursor: pointer; " value="click here" onclick="location.href='node/5'" id="vertical-platform" class="span3">
                       <?php if ($page['tools']): ?><?php print render($page['tools']); ?><?php endif; ?>
                    </li>
                      <div class="arrow"></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="verticals-background"></div>
            </div>
            
            <a class="banner-action" href="node/11">
            <div class="banner">
              <h2>Ademphis Media Solutions © 1999 - <?php echo date("Y");?> </h2>
            </div>
            </a>
            
  
            <?php else : ?>
            
            
            
            
            
            
            
            
            <div id="mini-panel-landing_page_header" class="panel-display panel-1col clearfix">
          

  <div class="panel-panel panel-col">
    <div>
<div class="panel-separator"></div><div class="panel-pane pane-block pane-block-491">
 
  
  <div class="pane-content">

 
      
   

<div style="margin-top: -40px;" class="full-width-background clearfix">
    <div class="container_19">
        






<div class="divider-area grid_19">&nbsp;</div>
            
            <div class="grid_19">
            
            <?php print render($title_prefix); ?> 
            <div class="grid_8">
           <?php if ($title): ?>
           <h2><?php print $title; ?></h2><?php endif;?>
           <?php print render($title_suffix); ?>
           
            
            <?php if ($tabs): ?><?php print render($tabs); ?><?php endif; ?>
            
            <p><?php print render($page['content']); ?></p>
               
            </div>
           </div>
    
                
                
    </div>
</div>  </div>

  
  </div>
</div>
  </div>
</div>
<?php endif; ?>
       
             </div>
        </div>
      </div>
      <!-- /block-inner /block --> 
      
    </div>
  </div>
  <?php if ($is_front): ?>
  <div id="site-main-content" class="container_19">
    <div class="grid_19" id="content">
      <div class="inner column center" id="content-inner">
        <div id="content-header">
          <div class="tabs"></div>
        </div>
        <!-- /#content-header -->

	
            </div>


        <div id="content-area">
          <div class="region region-content">
            <div class="block block-panels-mini block-odd clearfix" id="block-panels_mini-homepage_top">
              <div class="block-inner">
                <div class="content">
                  <div class="row slider-tabs">
              <?php print render($page['footer_first']); ?>  


                   <!-- <ul>
                      <li class="tab1 selected">Survey</li>
                      <li class="tab2">Testing</li>
                      <li class="tab3">Webinar</li>
                      <li class="tab4">Wiki</li>
                      <li class="tab5">Social Engine</li>
                      <li class="tab6">Accounting</li>
                    </ul>-->
                  </div>
                  <div style="margin-top: 20px; margin-bottom: -40px;" id="content_slider" class="row slide-wrapper">
                    <div class="slide-inner-wrapper">
                                          <div class="span10 offset1 slide-content slide1" style="height: 440px;">
 <?php print render($page['tools_slider']); ?>  

            
                      </div>


                    </div>
                  </div>
                </div>
              </div>
              <!-- /block-inner /block --> 
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <?php endif; ?>
  <!-- /block-inner /block --> 
  
</div>
</div>
</div>
</div>
<!-- /content-inner /content --> 
<!-- /sidebar-second -->
</div>
<!--/container_19-->

<div class="push"></div>
<!--/push-->
</div>
<!--/wrapper-->
</div>

<!--Footer
====================================================================================================-->

<div id="footer-wrapper">
  <div class="container_19">
    <div class="inner">
      <div class="yui3-g" id="footer">
          <div class="block block-panels-mini block-odd clearfix" id="block-panels_mini-footer_links">
            <div class="block-inner">
              <div class="content">
                <div id="mini-panel-footer_links" class="panel-display panel-1col clearfix">
                  <div class="panel-panel panel-col">
                    <div>
                      <div class="panel-pane pane-block pane-block-5">
                        <div class="pane-content">
                          <div class="footer-links">
                            <div class="footer-links-inner">
                              <div class="grid_3">
                                <ul class="more-crm-solutions">
                                  <li class="first">
                                    <h4>Products </h4>
                                  </li>
<div class="ft">
                                   <?php print render($page['footer']); ?>  
</div>
                                </ul>
                              </div>
                              <div class="grid_3">
                                <ul class="first community">
                                  <li class="first">
                                    <h4>Tools</h4>
                                  </li>
								
                                  <?php print render($page['footer_first']); ?>  
                                </ul>
                              </div>
                              <div class="grid_3">
                                <ul class="first community">
                                  <li class="first">
                                    <h4>Site Map</h4>
                                  </li>
                                      <?php print render($page['footer_second']); ?> 
                                </ul>
                              </div>
                              <div class="grid_3">
                                <ul class="support-resources">
                                  <li class="first">
                                    <h4>About</h4>
                                <?php print render($page['footer_third']); ?> 
                                </ul>
                              </div>
                              
                              <div class="grid_4">
                                <h4>Stay Connected:</h4>

                                 <?php print render($page['footer_bottom_right']); ?> 
								 <h4 style="float: left;width: 150px;">Switch To:</h4>
								 <style>
								 .region.region-english {		 
								 float: left; width: 150px;}
								 
								 .language-link.active:hover{ opacity:0.6}
								 </style>
 <?php print render($page['english']); ?> 
                                <!-- /social-media --></div>
                            </div>
                            <!-- /footer-links-inner --></div>
                          <!-- /footer-links --> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- /block-inner /block --> 
          
        </div>
      </div>
      <!-- /footer --> 
      
    </div>
  </div>
</div>
