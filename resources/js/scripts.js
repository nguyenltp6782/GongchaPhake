$(document).ready(
    function () {
        //Sticky
        $('.intro-section').waypoint(                  // khi waypoint đến intro-section(phần "Giới thiệu") thì thực hiện các thao tác 
            function (direction) {                     // 
                if (direction == "down") {             // nếu: biến direction là down(kéo xuống dưới phần "Giới thiệu")
                    $('nav').addClass('sticky');       // thì: thẻ thêm class="sticky" vào thẻ <nav>
                } else {                               // else:
                    $('nav').removeClass('sticky');    // thì: bỏ class="sticky" khỏi thẻ <nav>
                }
            }, {
            offset: '600px'      // offset: thuộc tính của .waypoint: xác định khoảng cách kích hoạt .waypoint đối với intro-section
        }
        )

        //Smooth Scroll : copy StackOverflow
        $('a').click(
            function (event) {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                event.preventDefault();
            }
        );
    }
)