var star = document.createElement('div');
star.className = 'star';
star.style.display = 'none';
star.style.width = '100px';
star.style.height = '100px';
star.innerHTML = '<img src="star.png"/><div class="text_over_img"/>';
document.getElementsByClassName('reveal')[0].appendChild(star);
var version_txt = document.getElementsByClassName('text_over_img')[0];

function set_star(indexh, indexv) {
    var slide_versions = {
        // reference returned from vector emplace_back
        6001: { display: 'block', innerHTML:'17' },
        6003: { display: 'block', innerHTML:'17' },
        6005: { display: 'block', innerHTML:'17' },
        6006: { display: 'block', innerHTML:'17' },

        // invoke_result_t
        8017: { display: 'block', innerHTML:'17' },

        // insert_or_assign
        8019: { display: 'block', innerHTML:'17' },
        8020: { display: 'block', innerHTML:'17' },

        // optional, etc
        9001: { display: 'block', innerHTML:'17' },
        9002: { display: 'block', innerHTML:'17' },
        9003: { display: 'block', innerHTML:'17' },
        9004: { display: 'block', innerHTML:'17' },
        9005: { display: 'block', innerHTML:'17' },
        9006: { display: 'block', innerHTML:'17' },
        9007: { display: 'block', innerHTML:'17' },
        9008: { display: 'block', innerHTML:'17' },
        9009: { display: 'block', innerHTML:'17' },
   };
    console.log("set star", indexh, " ", indexv);
    var slide_no = indexh * 1000 + indexv;
    var data = slide_versions[slide_no];
    if (data) {
        star.style.display = data.display;
        version_txt.innerHTML = data.innerHTML;
    } else {
        star.style.display = 'none';
    }
}

(function (window, undefined) {
    'use strict';

    window.addEventListener('load', function () {
        window.Reveal.addEventListener('slidechanged', function (event) {
            // event.previousSlide, event.currentSlide, event.indexh, event.indexv
            set_star(event.indexh, event.indexv);
        });
    });

})(window);
