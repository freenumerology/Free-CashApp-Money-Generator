/*!
 * Main.js - Hearth of Application
 * Copyright 2013-2017 CPACodex.com, Inc.
 * Licensed under the MIT license
 */
$(document).ready(function() {


    setInterval(newActivity, 2000);

    function newActivity() {

        var flags = ['ad', 'ae', 'af', 'us', 'al', 'am', 'ar', 'au', 'gf', 'gb', 'ph', 'ba', 'us', 're', 'ro', 'pe', 'lv', 'mk', 'us', 'pt', 'europeanunion',
            'it', 'jp', 'ne', 'nl', 'no', 'ua', 'um'
        ];
        var users = ['441Binder', 'xminekkk', 'Attacklord_bro', 'leaelui', "emiflesh", "colorowyy", "jolobob", "magicofy", "julliazugaj", "natty2602", "ninjagirldraws", "azaharrizal", "anyaisch", "dobrafaza", 'nylaa.a',
            'kisszsolti', 'anselmus_lauri', 'smile_life1', 'NaneK', 'Marko_991', 'JackHammer9999', 'fuzzzy', 'tester', 'yearboy1007', 'a_mcia', 'Haxajmo', 'nikoldavidova', 'sabinittas', 'twinsstylee',
            'yarasantander', 'Hillck23', 'borizawada17', 'rosie_kalafiorek', 'only123', 'wieczorrek', 'MyNameIsShoost'
        ];
        var avatars = ['../img/avatar.png',
            '../img/avatar.png'
        ];

        var flag = flags[Math.floor(Math.random() * flags.length)];
        var avatar = avatars[Math.floor(Math.random() * avatars.length)];
        var user = users[Math.floor(Math.random() * users.length)];
        var vBucksRand = Math.floor(Math.random() * 100) + 100;

        $('.live-stats').last().remove();

        $('.activityContent').hide().prepend('<div class="live-stats">' +
            '<div class="avatar"><img src="' + avatar + '" alt="" /></div>' +
            '<div class="flag"><img src="img/flags/' + flag + '.png" alt="" /></div>' +
            '<div class="info">' +
            '<ul>' +
            '<li><b>' + user + ',</b> generated now:</li>' +
            '<li><img class="item-gen" src="img/vBucks.png" alt="" />Money: <span class="bucks-color">' + vBucksRand + '</span> </li>' +
            '</ul>' +
            '</div>' +
            '</div>').fadeIn();
    }

    /* vBucks */
    var $gen_vBucks = $('.vBucks-input');
    $gen_vBucks.updown({

        step: 10,
        min: 100,
        max: 300,

    });

    var $updown_vBucks = $gen_vBucks.data('updown');
    $('.plus-vBucks').click(function(event) {

        $updown_vBucks.increase(event);
        $updown_vBucks.triggerEvents();

    });
    $('.minus-vBucks').click(function(event) {

        $updown_vBucks.decrease(event);
        $updown_vBucks.triggerEvents();

    });


    function progressBar() {

        var width = 1;
        var intervalProgress = setInterval(frame, 0200);

        goToByScroll('generatorJS');

        function frame() {

            if (width == 20) $('.load-textJS').html('Connecting to account');
            if (width == 30) $('.load-textJS').html('Fetching data');
            if (width == 40) $('.load-textJS').html('GET = Variables');
            if (width == 50) $('.load-textJS').html('GET -> Username');
            if (width == 60) $('.load-textJS').html('GET -> IP Address');
            if (width == 70) $('.load-textJS').html('GET -> Money');
            if (width == 80) $('.load-textJS').html('POST => DATA');

            if (width >= 100) {

                clearInterval(intervalProgress);
                $('.generator-step2').slideUp();
                $('.generator-step3').slideDown();

                $('.userJS').html($('.username-input').val());

                $('.vBucksJS').countTo({

                    from: 10,
                    to: $('.vBucks-input').val(),
                    speed: 10,
                    refreshInterval: 1,
                    onComplete: function(value) {

                        $('.vBucksJSthick').css('opacity', '1');

                        setTimeout(function() {

                            $('.generator-step3').fadeOut(function() {

                                $('.generator-offers').fadeIn();

                            });

                        }, 2000);

                    }




                });

            } else {

                width++;
                $(".progress-bar").css("width", width + '%');
                $(".progress-bar").html(width * 1 + '%');

            }

        }

    }

    /* Generator Starts Here */

    $(".btnGenerator").click(function() {

        var $player_name = $('.username-input').val();

        if ($player_name == "" || $player_name.replace(/ /g, '').length < 2) {

            $(".username-input").css({
                border: '1px solid #F00'
            });

        } else {

            $(".username-input").css({
                border: '1px solid #111319'
            }); // Change border to default

            $('.generator').slideUp(function() {

                $('.generator-step2').slideDown();
                progressBar();

            });

        }

    });
    // .btngenerator end

    /* Button to scroll to Generator */

    $('.btn-GoGenerator').click(function() {

        goToByScroll('generator');

    });
});