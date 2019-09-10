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
        // explaining the star
        1000: { display: 'block', innerHTML:'17' },
        // "preliminaries"
        3000: { display: 'block', innerHTML:'11' },

        // what's in a moved-from vector?
        4001: { display: 'block', innerHTML:'11' },
        // Exhibit A
        4003: { display: 'block', innerHTML:'11' },
        4004: { display: 'block', innerHTML:'11' },

        // Exhibit B
        4006: { display: 'block', innerHTML:'11' },
        // exchange std::function with nullptr
        4007: { display: 'block', innerHTML:'14' },

        // RVO in pictures
        5002: { display: 'block', innerHTML:'98' },

        // RVO examples
        5005: { display: 'block', innerHTML:'98' },
        5006: { display: 'block', innerHTML:'11' },
        5007: { display: 'block', innerHTML:'11' },
        5008: { display: 'block', innerHTML:'98' },

        // Will it RVO?
        5012: { display: 'block', innerHTML:'11' },
        5013: { display: 'block', innerHTML:'11' },
        5014: { display: 'block', innerHTML:'11' },
        5015: { display: 'block', innerHTML:'11' },
        5016: { display: 'block', innerHTML:'11' },
        5017: { display: 'block', innerHTML:'11' },
        5018: { display: 'block', innerHTML:'11' },
        5019: { display: 'block', innerHTML:'11' },
        5020: { display: 'block', innerHTML:'11' },
        5021: { display: 'block', innerHTML:'11' },

        // Exhibit C
        5022: { display: 'block', innerHTML:'11' },

        // reference returned from vector emplace_back
        6001: { display: 'block', innerHTML:'17' },
        6002: { display: 'block', innerHTML:'11' },
        6003: { display: 'block', innerHTML:'17' },
        6004: { display: 'block', innerHTML:'11' },
        6005: { display: 'block', innerHTML:'17' },
        6006: { display: 'block', innerHTML:'17' },

        // copy example
        6007: { display: 'block', innerHTML:'11' },
        6008: { display: 'block', innerHTML:'11' },
        6009: { display: 'block', innerHTML:'11' },
        6010: { display: 'block', innerHTML:'11' },
        6011: { display: 'block', innerHTML:'11' },
        6012: { display: 'block', innerHTML:'11' },

        // Exhibits D & E
        6013: { display: 'block', innerHTML:'17' },
        6014: { display: 'block', innerHTML:'11' },

        // vector-of-pairs
        6015: { display: 'block', innerHTML:'11' },
        6016: { display: 'block', innerHTML:'11' },
        6017: { display: 'block', innerHTML:'11' },

        // initializer_list
        7001: { display: 'block', innerHTML:'11' },
        7002: { display: 'block', innerHTML:'11' },
        7003: { display: 'block', innerHTML:'14' },
        7004: { display: 'block', innerHTML:'11' },
        7005: { display: 'block', innerHTML:'11' },
        7006: { display: 'block', innerHTML:'??' },
        7007: { display: 'block', innerHTML:'11' },

        // map init
        8001: { display: 'block', innerHTML:'11' },
        8002: { display: 'block', innerHTML:'14' },
        8003: { display: 'block', innerHTML:'14' },

        // map insert
        8005: { display: 'block', innerHTML:'98' },
        8006: { display: 'block', innerHTML:'11' },
        8007: { display: 'block', innerHTML:'11' },
        8008: { display: 'block', innerHTML:'11' },
        8009: { display: 'block', innerHTML:'11' },
        8010: { display: 'block', innerHTML:'11' },
        8011: { display: 'block', innerHTML:'11' },

        // exhibit G
        8012: { display: 'block', innerHTML:'11' },
        8013: { display: 'block', innerHTML:'11' },
        8014: { display: 'block', innerHTML:'11' },

        // emplace function call result
        8015: { display: 'block', innerHTML:'11' },
        8017: { display: 'block', innerHTML:'17' },
        8018: { display: 'block', innerHTML:'17' },

        // insert_or_assign
        8019: { display: 'block', innerHTML:'17' },
        8020: { display: 'block', innerHTML:'17' },

        // Exhibit H
        8022: { display: 'block', innerHTML:'11' },
        8023: { display: 'block', innerHTML:'17' },

        // aggregate initialization with parens
        8024: { display: 'block', innerHTML:'20' },

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
    console.log('set_star ' + indexh + ' ' + indexv);
    var slide_no = indexh * 1000 + indexv;
    var data = slide_versions[slide_no];
    if (data) {
        star.style.display = data.display;
        version_txt.innerHTML = data.innerHTML;
    } else {
        star.style.display = 'none';
    }
}

function encode_source(source) {
    preamble = "http://localhost:10240/#g:!((g:!((g:!((h:codeEditor,i:(fontScale:1.2899450879999999,j:1,lang:c%2B%2B,source:'"
    postamble = "'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:69.35593220338983,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((g:!((h:compiler,i:(compiler:/usr/bin/clang%2B%2B,filters:(b:'0',binary:'0',commentOnly:'0',demangle:'0',directives:'0',execute:'0',intel:'0',trim:'1'),lang:c%2B%2B,libs:!(),options:'-O3+-std%3Dc%2B%2B2a',source:1),l:'5',n:'0',o:'/usr/bin/clang%2B%2B+(Editor+%231,+Compiler+%231)+C%2B%2B',t:'0')),header:(),k:50,l:'4',m:11.159420289855072,n:'0',o:'',s:0,t:'0'),(g:!((h:output,i:(compiler:1,editor:1,fontScale:1.8575209267199997,wrap:'1'),l:'5',n:'0',o:'%231+with+/usr/bin/clang%2B%2B',t:'0')),header:(),l:'4',m:88.84057971014492,n:'0',o:'',s:0,t:'0')),k:30.644067796610173,l:'3',n:'0',o:'',t:'0')),l:'2',n:'0',o:'',t:'0')),version:4"
    if (source.indexOf("will_it_rvo") != -1) {
        source = '#include <cstdio>\n\
\n\
struct Arg {};\n\
\n\
struct S\n\
{\n\
  S() { puts("Default construct\\n"); }\n\
  S(Arg) { puts("Value construct\\n"); }\n\
  explicit S(int) { puts("Explicit value construct (1)\\n"); }\n\
  explicit S(int, int) { puts("Explicit value construct (2)\\n");}\n\
  ~S() { puts("Destruct\\n"); }\n\
  S(const S&) { puts("Copy construct\\n"); }\n\
  S(S&&) { puts("Move construct\\n"); }\n\
  S& operator=(const S&) { puts("Copy assign\\n"); return *this; }\n\
  S& operator=(S&&) { puts("Move assign\\n"); return *this; }\n\
};\n\
\n\
' + source;

        if (source.indexOf("(bool b)") != -1) {
            source += '\
\n\
int main()\n\
{\n\
  auto s = will_it_rvo(true);\n\
}';
        } else if (source.indexOf("(bool b, S s)") != -1) {
            source += '\
\n\
int main()\n\
{\n\
  S s1;\n\
  auto s2 = will_it_rvo(true, s1);\n\
}';
        } else {
            source += '\
\n\
int main()\n\
{\n\
  auto s = will_it_rvo();\n\
}';
        }
    } else if (source.indexOf('S>') != -1) {
        source = '#include <cstdio>\n\
\n\
struct Arg {};\n\
\n\
struct S\n\
{\n\
  S() { puts("Default construct\\n"); }\n\
  S(Arg) { puts("Value construct\\n"); }\n\
  explicit S(int) { puts("Explicit value construct (1)\\n"); }\n\
  explicit S(int, int) { puts("Explicit value construct (2)\\n");}\n\
  ~S() { puts("Destruct\\n"); }\n\
  S(const S&) { puts("Copy construct\\n"); }\n\
  S(S&&) { puts("Move construct\\n"); }\n\
  S& operator=(const S&) { puts("Copy assign\\n"); return *this; }\n\
  S& operator=(S&&) { puts("Move assign\\n"); return *this; }\n\
};\n\
\n\
int main()\n\
{\n\
' + source + '\
}';
    }

    if (source.indexOf("std::copy") != -1
        || source.indexOf("std::transform") != -1) {
        source = '#include <algorithm>\n' + source;
    }
    if (source.indexOf("std::array") != -1) {
        source = '#include <array>\n' + source;
    }
    if (source.indexOf("std::cout") != -1) {
        source = '#include <iostream>\n' + source;
    }
    if (source.indexOf("std::map") != -1) {
        source = '#include <map>\n' + source;
    }
    if (source.indexOf("std::optional") != -1) {
        source = '#include <optional>\n' + source;
    }
    if (source.indexOf("std::string") != -1) {
        source = '#include <string>\n' + source;
    }
    if (source.indexOf("std::unordered_set") != -1) {
        source = '#include <unordered_set>\n' + source;
    }
    if (source.indexOf("std::variant") != -1) {
        source = '#include <variant>\n' + source;
    }
    if (source.indexOf("std::vector") != -1) {
        source = '#include <vector>\n' + source;
    }

    return preamble + rison.quote(source.replace(/!/g, '!!').replace(/'/g, '!\'')) + postamble;
}

(function (window, undefined) {
    'use strict';

    window.addEventListener('ready', function () {

        window.addEventListener('slidechanged', function (event) {
            // event.previousSlide, event.currentSlide, event.indexh, event.indexv
            set_star(event.indexh, event.indexv);
        });

        var src_containers = document.getElementsByClassName('org-src-container');
        for (var i = 0; i < src_containers.length; i++) {
            var src_container = src_containers[i];
            var pres = src_container.getElementsByClassName('src src-c++');
            if (pres.length > 0) {
                src_container.onclick = (function() {
                    var self = src_container;
                    var pre = pres[0];
                    var orig_content = self.innerHTML;
                    var src = pre.textContent;
                    var width = 0;
                    var height = 0;
                    return function() {
                        if (width == 0) width = pre.clientWidth;
                        if (height == 0) height = pre.clientHeight;
                        if (orig_content == self.innerHTML) {
                            self.innerHTML = '<iframe width="'
                                + width + '" height="' + height
                                + '" frameborder="0" src="'
                                + encode_source(src) + '"/>';
                        } else {
                            self.innerHTML = orig_content;
                        }
                    };
                })();
                src_container.onauxclick = (function() {
                    var src = pres[0].textContent;
                    return function(e) {
                        if (e.which == 2) {
                            window.open(encode_source(src));
                        }
                    };
                })();
            }
        }

        window.Reveal.addKeyBinding(
            {keyCode:67, key:'C', description:'Toggle CE view of code'},
            function () {
                var slide = window.Reveal.getCurrentSlide();
                var src_containers = slide.getElementsByClassName('org-src-container');
                if (src_containers.length > 0) {
                    src_containers[0].onclick();
                }
            });
    });

})(window);
