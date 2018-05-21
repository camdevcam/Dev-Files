jQuery(document).ready(function($){ 

  var url = window.location.href;

  // $(".site-title").html(url);

  $(".post-thumbnail img:first").hide(); 
  
  // $(".feed1").insertAfter( ".navigation .pagination" );

  $("<div class='feed1'>").insertAfter(".entry-content");

  if (url.indexOf('bloggerbazaar') > -1) {  
      $(".feed1").rss("https://www.blogcatalog.com/feed/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://www.bloggingfusion.com/rss-latest.php",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://feeds.feedburner.com/bloggingpro/PfjF",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed4").rss("http://feeds.feedburner.com/DailyBlogTips",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://feeds.feedburner.com/ProbloggerHelpingBloggersEarnMoney",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://feeds.feedburner.com/smartpassiveincome",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
  }
  if (url.indexOf('livefromhollyweird') > -1) { // host
      $(".feed1").rss("http://www.dlisted.com/rss.xml",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://www.hollywoodlife.com/feed/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://feeds.feedburner.com/thr/news",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed4").rss("http://feeds.gawker.com/jezebel/full",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://www.perezhilton.com/index.xml",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://www.thefrisky.com/feed/",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
  }
  if (url.indexOf('phonefighting') > -1) { 
      $(".feed1").rss("http://feeds.phonedog.com/phonedog_cellphoneblog",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://www.phonearena.com/rss/rss_reviews.php",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://www.phonearena.com/feed/news",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed4").rss("http://www.mobileburn.com/xml/rss2.jsp",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://feeds.feedburner.com/CellphoneReviews101",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://feeds2.feedburner.com/spbnews",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
  }
if (url.indexOf('thecollegelife') > -1) { 
      $(".feed1").rss("http://www.huffingtonpost.com/feeds/verticals/college/index.xml",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://feeds.feedburner.com/CollegeInfoGeek",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://coedmagazine.com/feed/",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed4").rss("https://www.youtube.com/feeds/videos.xml?channel_id=UCPDXXXJj9nax0fr0Wfc048g",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://feeds.feedburner.com/Hackcollege",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://feeds.feedburner.com/SurvivingCollegeLife",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })      
  }
  if (url.indexOf('wingmanconnect') > -1) { 
      $(".feed1").rss("http://alphagameplan.blogspot.com/feeds/posts/default",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://feeds.feedburner.com/DatingAdvice-DavidWygant",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://www.venusianarts.com/feed/",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed4").rss("http://feeds.feedburner.com/DatingAdviceForMen",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://misswingman.com/feed/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://wing-manning.tumblr.com/rss",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })

  }
  if (url.indexOf('media2point0') > -1) { 
      $(".feed1").rss("http://adage.com/rss-feed?section_id=32",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://feeds.feedburner.com/Adfreak",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://www.digiday.com/feed/",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed4").rss("http://feeds2.feedburner.com/TheDmz",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://www.chatterbuzzmedia.com/feed/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://feeds.feedburner.com/AdobeFlashPlatform",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
  }
  if (url.indexOf('brokepoint') > -1) { 
      $(".feed1").rss("http://feeds.feedburner.com/20somethingfinancecom",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://www.forbes.com/finance/index.xml",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://www.iwillteachyoutoberich.com/feed/",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
       })
      $(".feed4").rss("http://feeds.feedburner.com/moolanomy",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://rss.cnn.com/rss/money_pf.rss",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://feeds.feedburner.com/thesimpledollar",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })      
    }
    if (url.indexOf('paddymcbrides') > -1) { 
      $(".feed1").rss("http://comeheretome.wordpress.com/feed/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://www.independent.ie/rss",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://feeds.examiner.ie/ietopstories",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
       })
      $(".feed4").rss("http://www.irisheconomy.ie/index.php/feed/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://www.irishtimes.com/feeds/rss/breaking/index.rss",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://www.thejournal.ie/feed/",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })

    }
    if (url.indexOf('media3point0') > -1) { 
      $(".feed1").rss("http://www.engadget.com/rss-full.xml",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://blog.leapmotion.com/rss",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://feeds.feedburner.com/seomoz",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
       })
      $(".feed4").rss("http://feeds.feedburner.com/allfacebook",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://www.vr-zone.com/rss/newsreviews.xml",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://vrfocus.com/feed/",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })

    }
    if (url.indexOf('mobimercial') > -1) { 
      $(".feed1").rss("http://feeds.mediapost.com/mobile-marketing-daily",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://mobithinking.com/rss.xml",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://www.mobilecommercedaily.com/feed",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
       })
      $(".feed4").rss("http://www.mobilemarketingandtechnology.com/feed/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://mmaglobal.com/feed",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://feeds.feedburner.com/MobileMarketingWatch",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })

    }
    if (url.indexOf('perfectbrainstorm') > -1) { 
      $(".feed1").rss("http://feeds.feedburner.com/bigthink/main",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://did-you-kno.tumblr.com/rss",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://kickassfacts.com/feed/",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
       })
      $(".feed4").rss("http://uberfacts.tumblr.com/rss",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://feeds.feedburner.com/unbfacts",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://wtffunfact.com/rss",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
    }
    if (url.indexOf('omnisearch') > -1) { 
      $(".feed1").rss("http://9to5google.com/feed/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://www.distilled.net/feed/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://googleresearch.blogspot.com/atom.xml",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
       })
      $(".feed4").rss("http://feeds.searchengineland.com/searchengineland",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://www.searchenginepeople.com/feed",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://searchenginewatch.com/rss",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })

    }
    if (url.indexOf('thetripofalifetime') > -1) { 
      $(".feed1").rss("http://www.aluxurytravelblog.com/feed/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://feeds2.feedburner.com/EverythingEverywhere/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://feeds.feedburner.com/fluentin3months",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
       })
      $(".feed4").rss("http://adventure.com/feed/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://blogs.nationalgeographic.com/blogs/intelligenttravel/atom.xml",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://www.travelandleisure.com/travel-blog/carry-on?format=atom",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
    }
    if (url.indexOf('bloggerbizarre') > -1) { 
      $(".feed1").rss("http://www.weirduniverse.net/blog/rss_2.0/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://oddstuffmagazine.com/feed",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://www.odditycentral.com/feed",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
       })
      $(".feed4").rss("http://rss.topix.net/rss/news/weird.xml",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://www.huffingtonpost.com/feeds/verticals/weird-news/index.xml",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://www.weirdworm.com/feed/",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })

    }
    if (url.indexOf('theworldinaday') > -1) { 
      $(".feed1").rss("http://feed.500px.com/500px-editors",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://www.pixelatedimage.com/blog/feed/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://feeds.feedburner.com/ExpertVagabond",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
       })
      $(".feed4").rss("http://www.jeffreychapman.com/culturalphotographer/feed/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://photography-thedarkart.blogspot.com/feeds/posts/default",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://greatblogabout.com/?feed=rss2",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })

    }
     if (url.indexOf('youwontbelievewhathappened') > -1) { 
      $(".feed1").rss("http://www.epicfail.com/feed/",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed2").rss("http://feeds.feedburner.com/failblog",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed3").rss("http://www.fark.com/fark.rss",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
       })
      $(".feed4").rss("http://seriouslyomg.com/?feed=rss2",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed5").rss("http://syndication.thedailywtf.com/TheDailyWtf",
      {
        limit: 17,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
      $(".feed6").rss("http://wtfevolution.tumblr.com/rss",
      {
        limit: 7,
        entryTemplate:'<h1 class="feedtitle"><a href="{url}">{author} | {date} | {title}</a></h1><br/><div class="featimg">{teaserImage}</div><div class="feedtxt">{shortBodyPlain}</div>'
      })
    }
    // $("<div class='adSec2'>").insertAfter(".feed2 > .featimg:nth-of-type(3)");
    // $("<div class='adSec3'>").insertAfter(".feed1 > .featimg:nth-of-type(3)");

    // $(".adSec2").html( "<script data-cfasync='false' type='text/javascript' src='//p191289.clksite.com/adServe/banners?tid=191289_358436_4'><\/script>" );
    // $(".adSec3").html( "<script data-cfasync='false' type='text/javascript' src='//p191289.clksite.com/adServe/banners?tid=191289_358436_2'><\/script>" );
   
    // function waitForCompleteRender()
    // {
    //     var HeadImg = $('.featimg img').first();
    //     if (HeadImg.length == 0) return setTimeout(waitForCompleteRender, 200);

    //     $('.site-featured-content').css('background-image', 'url(' + HeadImg.attr('src') + ')');

    // }
    // waitForCompleteRender();
})