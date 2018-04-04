$(function () {
    let change = true;
    const bar = $("#icon_bar");
    $('#menu').click(function () {
        $('#nav').fadeToggle()

        if (change) {
            bar.attr({
              "xlink:href": "./img/sprite.svg#icon-cross"
            });
            change = false
        } else {
            bar.attr({
              "xlink:href": "./img/sprite.svg#icon-menu"
            });
            change = true
        }

// xlink:href="./img/sprite.svg#icon-menu"
// "xlink:href": "./img/sprite.svg#icon-cross"
// "xlink:href": "./img/sprite.svg#icon-menu"
    })

    $('.navigation__link').click(function () {
        $('#nav').hide()
        bar.attr({ "xlink:href": "./img/sprite.svg#icon-menu" });
    })

    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top
              },
              1000,
              function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  // Checking if the target was focused
                  return false;
                } else {
                  $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                }
              }
            );
          }
        }
      });
})