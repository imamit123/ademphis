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
              <?php if ($page['navigation']) :?>
            <?php print drupal_render($page['navigation']); ?>
            <?php else :
            if (module_exists('i18n_menu')) {
            $main_menu_tree = i18n_menu_translated_tree(variable_get('menu_main_links_source', 'main-menu'));
            } else {
            $main_menu_tree = menu_tree(variable_get('menu_main_links_source', 'main-menu')); 
            }
            print drupal_render($main_menu_tree);
            endif; ?>
            </div>
          </div>
       
        <div class="divider-vertical"></div>
        <div class="nav-container phone"> Call 000.111.3322&nbsp; </div>
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
            <div id="header_slider" class="slide-wrapper">
              <div class="slide slide3 background" style="opacity: 1;">
                <div class="slide3 foreground active"> </div>
              </div>
              <div class="slide slide1 background hidden" style="opacity: 0;">
                <div class="slide1 foreground"> </div>
              </div>
              <div class="slide slide2 background hidden" style="opacity: 0;">
                <div class="slide2 foreground"></div>
              </div>
              <div class="container_19 slide-inner-wrapper">
                <div class="row">
                  <div class="carousel-nav left"><span class="carousel-nav-inner"> ‹</span></div>
                  <div class="carousel-nav right"><span class="carousel-nav-inner">›</span></div>
                  <div class="offset1 span6 slide-content slide3" style="height: 599px; display: block; opacity: 1; left: 0px;">
                    <h2><span class="slide-title">Contrary to popular <span class="slide-title-bold">Lorem Ipsum</span></span></h2>
                    <span class="slide-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour!<br>
                    </span>
                    <p><a href="#"  class="btn btn-large btn-danger">Learn more</a></p>
                  </div>
                  <div style="width: 510px; height: 599px; opacity: 1; left: 0px; display: none;" class="offset1 span5 slide-content slide1 hidden">
                    <h2><span class="slide-title">Contrary to popular <span class="slide-title-bold">Lorem Ipsum</span></span></h2>
                    <span class="slide-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour!<br>
                    </span>
                    <p><a href="#"  class="btn btn-large btn-danger">Learn more</a></p>
                  </div>
                  <div class="offset1 span5 slide-content slide2 hidden" style="height: 599px; opacity: 1; left: 0px; display: none;">
                    <h2><span class="slide-title">Contrary to <span class="slide-title-bold">Lorem Ipsum</span></span></h2>
                    <span class="slide-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour!<br>
                    </span>
                    <p><a href="#" class="btn btn-large btn-danger">Learn more</a></p>
                  </div>
                  <ul id="verticals">
                    <li title="Marketing" style="cursor: pointer; " value="click here" onclick="location.href='#'" id="vertical-marketing" class="span3">
                      <h2 class="vertical-title">Lorem Ipsum</h2>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                      <div class="arrow"></div>
                    </li>
                    <li title="Sales" style="cursor: pointer; " value="click here" onclick="location.href='#'" id="vertical-sales" class="span3">
                      <h2 class="vertical-title">Lorem Ipsum</h2>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                      <div class="arrow"></div>
                    </li>
                    <li title="Support" style="cursor: pointer; " value="click here" onclick="location.href='#'" id="vertical-support" class="span3">
                      <h2 class="vertical-title">Lorem Ipsum</h2>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                      <div class="arrow"></div>
                    </li>
                    <li title="Support" style="cursor: pointer; " value="click here" onclick="location.href='#'" id="vertical-platform" class="span3">
                      <h2 class="vertical-title">Lorem Ipsum</h2>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                      <div class="arrow"></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="verticals-background"></div>
            </div>
            <a class="banner-action" href="#">
            <div class="banner">
              <h2>Contrary to popular belief, Latin literature from 45 BC </h2>
              <b>Over 2000 years old..!</b> </div>
            </a> </div>
        </div>
      </div>
      <!-- /block-inner /block --> 
      
    </div>
  </div>
  <div id="site-main-content" class="container_19">
    <div class="grid_19" id="content">
      <div class="inner column center" id="content-inner">
        <div id="content-header">
          <div class="tabs"></div>
        </div>
        <!-- /#content-header -->
        <div id="content-area">
          <div class="region region-content">
            <div class="block block-panels-mini block-odd clearfix" id="block-panels_mini-homepage_top">
              <div class="block-inner">
                <div class="content">
                  <div class="row slider-tabs">
                    <ul>
                      <li class="tab1 selected">Contrary to popul</li>
                      <li class="tab2">Standard chunk</li>
                      <li class="tab3">Lorem Ipsum</li>
                      <li class="tab4">Reproduced</li>
                      <li class="tab5">Cicero are also</li>
                    </ul>
                  </div>
                  <div style="margin-top: 20px; margin-bottom: -40px;" id="content_slider" class="row slide-wrapper">
                    <div class="slide-inner-wrapper">
                      <div class="carousel-nav left"><span class="carousel-nav-inner">‹</span></div>
                      <div class="carousel-nav right"><span class="carousel-nav-inner">›</span></div>
                      <div class="span10 offset1 slide-content slide1" style="height: 440px;">
                        <h3>There are many variations of passages?</h3>
                        <div class="grid_7 alpha">
                          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                          <p>Contrary to popular belief, alorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                        </div>
                        <div class="grid_7 omega prefix_1"> <img src="images/Mobile.jpg"> </div>
                      </div>
                      <div class="span10 offset1 slide-content slide2 hidden" style="height: 440px;">
                        <h3>Many variations of passages</h3>
                        <div class="grid_7 alpha">
                          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,norum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                        </div>
                        <div class="grid_7 omega prefix_1"> <img src="images/laptop-editions-pricing.jpg"> </div>
                      </div>
                      <div class="span10 offset1 slide-content slide3 hidden" style="height: 440px;">
                        <h3>Many variations of passages</h3>
                        <div class="grid_7 alpha">
                          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                        </div>
                        <div class="grid_7 omega prefix_1"> <img src="images/laptop-editions-pricing.jpg"> </div>
                      </div>
                      <div class="span10 offset1 slide-content slide4 hidden" style="height: 440px;">
                        <h3>Many variations of passages</h3>
                        <div class="grid_7 alpha">
                          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                        </div>
                        <div class="grid_7 omega prefix_1"> <img src="images/Laptop-sugar6.jpg"> </div>
                      </div>
                      <div class="span10 offset1 slide-content slide5 hidden" style="height: 440px;">
                        <h3>Many variations of passages</h3>
                        <div class="grid_7 alpha">
                          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.</p>
                          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passg the Renaissance.</p>
                        </div>
                        <div class="grid_7 omega prefix_1"> <img src="images/Mobile.jpg"> </div>
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
                                    <h4>Products &amp; Apps</h4>
                                  </li>
                                  <li><a href="#">Lorem</a></li>
                                  <li><a href="#">Editions &amp; Pricing</a></li>
                                  <li><a href="#">Store</a></li>
                                  <li><a href="#">Download Community Edition</a></li>
                                  <li><a href="#">Exchange</a></li>
                                  <li class="last"><a href="#">Forge</a></li>
                                </ul>
                              </div>
                              <div class="grid_3">
                                <ul class="first community">
                                  <li class="first">
                                    <h4>Features</h4>
                                  </li>
                                  <li><a href="#">Sales Force Automation</a></li>
                                  <li><a href="#">Marketing Automation</a></li>
                                  <li><a href="#">Customer Support</a></li>
                                  <li><a href="#">Platform</a></li>
                                  <li><a href="#">Call Center</a></li>
                                  <li><a href="#">Mobile </a></li>
                                  <li><a href="#">Social </a></li>
                                  <li class="last"><a href="#">Project Management</a></li>
                                </ul>
                              </div>
                              <div class="grid_3">
                                <ul class="first community">
                                  <li class="first">
                                    <h4>Community</h4>
                                  </li>
                                  <li><a href="#">Community</a></li>
                                  <li><a href="#">Partner Directory</a></li>
                                  <li><a href="#">Developers</a></li>
                                  <li><a href="#">Events</a></li>
                                  <li><a href="#">Blog</a></li>
                                  <li class="last"><a href="#">Forums</a></li>
                                </ul>
                              </div>
                              <div class="grid_3">
                                <ul class="support-resources">
                                  <li class="first">
                                    <h4>Resources</h4>
                                  </li>
                                  <li><a href="#">Case Studies</a></li>
                                  <li><a href="#">Demos</a></li>
                                  <li><a href="#">Webcasts</a></li>
                                  <li class="last"><a href="#">Whitepapers</a></li>
                                </ul>
                              </div>
                              <div class="grid_3">
                                <ul class="news-events">
                                  <li class="first">
                                    <h4>About</h4>
                                  </li>
                                  <li><a href="#">Company Overview</a></li>
                                  <li><a href="#">Privacy Policy</a></li>
                                  <li><a href="#">Security Policy</a></li>
                                  <li><a href="#">Terms &amp; Conditions</a></li>
                                  <li class="last"><a href="#">Trademark Info</a></li>
                                </ul>
                              </div>
                              <div class="grid_4">
                                <h4>Stay Connected:</h4>
                                <ul class="social-media">
                                  <a title="Follow us on Twitter" href="#">
                                  <li class="twitter"></li>
                                  </a> <a title="Follow us on LinkedIn"  href="#">
                                  <li class="linkedin"></li>
                                  </a> <a title="Follow us on Facebook" href="#">
                                  <li class="facebook"></li>
                                  </a><a title="Follow us on Google+" href="#">
                                  <li class="googleplus"></li>
                                  </a> <a title="YouTube" href="#">
                                  <li class="youtube"></li>
                                  </a> <a title="Follow us on dribbble" href="#">
                                  <li class="pinterest"></li>
                                  </a>
                                </ul>
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
