window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url != "undefined") {
      window.open(url);
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-993388029/jbzWCJmL4aQBEP3L19kD",
    event_callback: callback,
  });

  return false;
}

$(document).ready(function () {
  //bottom offer popup
  $(".bottom_offer_popup_wrap").hide();
  $(".bottom_ofer_exit").click(function () {
    $(".bottom_offer_popup_wrap").css("display", "none");
  });
  flag = 1;
  $(document).scroll(function () {
    if (window.scrollY > 700) {
      $(".crunchify-top").removeClass("hidden-btn");
    } else {
      $(".crunchify-top").addClass("hidden-btn");
    }

    if (window.innerWidth > 768) {
      if (window.scrollY > 700 && flag == 1) {
        $(".bottom_offer_popup_wrap").fadeIn();
      } else {
        $(".bottom_offer_popup_wrap").fadeOut();
      }
    }

    if (window.innerWidth <= 768) {
      if (window.scrollY > 700 && flag == 1) {
        $(".bottom_offer_popup_wrap").removeClass("hidden-popup");
      } else {
        $(".bottom_offer_popup_wrap").addClass("hidden-popup");
      }
    }
  });
  $(".bottom_ofer_exit").click(function () {
    if (window.innerWidth > 768) {
      $(".bottom_offer_popup_wrap").hide();
      $(".bottom_offer_popup_wrap").css("display", "none");
      flag = 0;
    }

    if (window.innerWidth <= 768) {
      $(".bottom_offer_popup_wrap").addClass("hidden-popup");
    }
  });

  //var ranked_providers = new cookieList("ranked_providers");

  $("#clear").click(function () {
    var cookies = $.cookie();
    for (var cookie in cookies) {
      $.removeCookie(cookie);
    }
  });
   
});

window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url != "undefined") {
      window.open(url);
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-993388029/jbzWCJmL4aQBEP3L19kD",
    event_callback: callback,
  });

  return false;
}

$(document).ready(function () {
  $("#clear").click(function () {
    var cookies = $.cookie();
    for (var cookie in cookies) {
      $.removeCookie(cookie);
    }
  });

  //LOGIC FOR RETING

  const changeRetingText = function (parent) {
    const scoreElement = $(parent).parent().prev().children().children(".company-score");
    const scoreText = $(parent).parent().prev().children().children(".company-score-text");

    let scoreValue = Number($(scoreElement).text().match(/\d+/g).join(""));

    $(parent).css("pointer-events", "none");
    $(scoreText).text("Rated");
    $(scoreElement).text(`(${String(scoreValue + 1).replace(/\B(?=(\d{3})+(?!\d))/g, ",")})`);
  };

  $(".row_raty").each(function () {
    const id = $(this).attr("data-provider"); //32Red
    const parentElements = $(`[data-provider='${id}']`);

    if ($.cookie(id)) {
      $(this).attr("data-grade", $.cookie(id));
    }

    if ($.cookie(`${id}score`) == "1") {
      changeRetingText(this);
      $(this).attr("data-grade", $.cookie(id));
    }

    const grade = $(this).attr("data-grade");

    $(this).raty({
      score: grade,
      half: true,
      starHalf: "img/star-half.png",
      starOff: "img/star-off.png",
      starOn: "img/star-on.png",
      click: function (score, evt) {
        parentElements.raty("score", score);

        parentElements.each(function () {
          changeRetingText(this);
        });

        $.cookie(id, score);

        $.cookie(`${id}score`, 1);

        $(this).parent().find("div.row_grade").text("Thanks!");
      },
    });
  });
});

/*************Back top top ****************/
// hide #back-top first
$("#sctotop").hide();

$(window).scroll(function (e) {
  var scrollTop = $(window).scrollTop();
  var docHeight = $(document).height();
  var winHeight = $(window).height();
  var scrollPercent = scrollTop / (docHeight - winHeight);
  var scrollPercentRounded = Math.round(scrollPercent * 100);
  if (scrollPercentRounded > 30) {
    $("#sctotop").fadeIn();
  } else {
    $("#sctotop").fadeOut();
  }
});

function topFunction() {
  var body = $("html, body");
  body.stop().animate(
    {
      scrollTop: 0,
    },
    500,
    "swing",
    function () {}
  );
}

function scrollToTheId(id) {
  document.getElementById(id).scrollIntoView();
}
/***************************/
//Operators reviews slider
$(".operators_reviews_slider").slick({
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: $(".slider_prev"),
  nextArrow: $(".slider_next"),
});
/*************Redirect noreferrer ****************/
// var elementi = document.getElementsByTagName("a");
// for (let i = 0; i < elementi.length; i++) {
//   //console.log(elementi[i]);
//   //console.log(elementi[i].href);
//   if (elementi[i].href.indexOf("redir") > 10) {
//     elementi[i].setAttribute("rel", "noreferrer noopener");
//     //console.log("done");
//   }
// }
