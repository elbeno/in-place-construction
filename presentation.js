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
        2000: { display: 'block', innerHTML:'11' },

        // what's in a moved-from vector?
        3001: { display: 'block', innerHTML:'11' },
        // Exhibit A
        3003: { display: 'block', innerHTML:'11' },
        3004: { display: 'block', innerHTML:'11' },

        // Exhibit B
        3006: { display: 'block', innerHTML:'11' },
        // exchange std::function with nullptr
        3007: { display: 'block', innerHTML:'14' },

        // RVO in pictures
        4002: { display: 'block', innerHTML:'98' },

        // RVO examples
        4005: { display: 'block', innerHTML:'98' },
        4006: { display: 'block', innerHTML:'11' },
        4007: { display: 'block', innerHTML:'98' },
        4008: { display: 'block', innerHTML:'98' },

        // Will it RVO?
        4011: { display: 'block', innerHTML:'11' },
        4012: { display: 'block', innerHTML:'11' },
        4013: { display: 'block', innerHTML:'11' },
        4014: { display: 'block', innerHTML:'11' },
        4015: { display: 'block', innerHTML:'11' },
        4016: { display: 'block', innerHTML:'11' },
        4017: { display: 'block', innerHTML:'11' },
        4018: { display: 'block', innerHTML:'11' },
        4019: { display: 'block', innerHTML:'11' },
        4020: { display: 'block', innerHTML:'11' },
        4021: { display: 'block', innerHTML:'14' },

        // Exhibit C
        4022: { display: 'block', innerHTML:'11' },

        // reference returned from vector emplace_back
        5001: { display: 'block', innerHTML:'17' },
        5002: { display: 'block', innerHTML:'11' },
        5003: { display: 'block', innerHTML:'17' },
        5004: { display: 'block', innerHTML:'11' },
        5005: { display: 'block', innerHTML:'17' },
        5006: { display: 'block', innerHTML:'17' },

        // copy example
        5007: { display: 'block', innerHTML:'11' },
        5008: { display: 'block', innerHTML:'11' },
        5009: { display: 'block', innerHTML:'11' },
        5010: { display: 'block', innerHTML:'11' },
        5011: { display: 'block', innerHTML:'11' },
        5012: { display: 'block', innerHTML:'11' },

        // Exhibits D & E
        5013: { display: 'block', innerHTML:'17' },
        5014: { display: 'block', innerHTML:'11' },

        // vector-of-pairs
        5015: { display: 'block', innerHTML:'11' },
        5016: { display: 'block', innerHTML:'11' },
        5017: { display: 'block', innerHTML:'11' },

        // initializer_list
        6001: { display: 'block', innerHTML:'11' },
        6002: { display: 'block', innerHTML:'11' },
        6003: { display: 'block', innerHTML:'14' },
        6004: { display: 'block', innerHTML:'11' },
        6005: { display: 'block', innerHTML:'11' },
        6006: { display: 'block', innerHTML:'??' },
        6007: { display: 'block', innerHTML:'11' },

        // map init
        7001: { display: 'block', innerHTML:'11' },
        7002: { display: 'block', innerHTML:'14' },
        7003: { display: 'block', innerHTML:'14' },

        // map insert
        7005: { display: 'block', innerHTML:'98' },
        7006: { display: 'block', innerHTML:'11' },
        7007: { display: 'block', innerHTML:'11' },
        7008: { display: 'block', innerHTML:'11' },
        7009: { display: 'block', innerHTML:'11' },
        7010: { display: 'block', innerHTML:'11' },
        7011: { display: 'block', innerHTML:'11' },

        // exhibit G
        7012: { display: 'block', innerHTML:'11' },
        7013: { display: 'block', innerHTML:'11' },
        7014: { display: 'block', innerHTML:'11' },

        // emplace function call result
        7015: { display: 'block', innerHTML:'11' },
        7017: { display: 'block', innerHTML:'17' },
        7018: { display: 'block', innerHTML:'17' },

        // insert_or_assign
        7019: { display: 'block', innerHTML:'17' },
        7020: { display: 'block', innerHTML:'17' },

        // aggregate initialization with parens
        7022: { display: 'block', innerHTML:'20' },

        // optional, etc
        8001: { display: 'block', innerHTML:'17' },
        8002: { display: 'block', innerHTML:'17' },
        8003: { display: 'block', innerHTML:'17' },
        8004: { display: 'block', innerHTML:'17' },
        8005: { display: 'block', innerHTML:'17' },
        8006: { display: 'block', innerHTML:'17' },
        8007: { display: 'block', innerHTML:'17' },
        8008: { display: 'block', innerHTML:'17' },
        8009: { display: 'block', innerHTML:'17' },
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
    postamble = "'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:69.35593220338983,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((g:!((h:compiler,i:(compiler:clangdefault,filters:(b:'0',binary:'0',commentOnly:'0',demangle:'0',directives:'0',execute:'0',intel:'0',libraryCode:'1',trim:'1'),lang:c%2B%2B,libs:!(),options:'-O3+-std%3Dc%2B%2B2a',source:1),l:'5',n:'0',o:'clang+default+(Editor+%231,+Compiler+%231)+C%2B%2B',t:'0')),header:(),k:50,l:'4',m:11.159420289855072,n:'0',o:'',s:0,t:'0'),(g:!((h:output,i:(compiler:1,editor:1,fontScale:1.8575209267199997,wrap:'1'),l:'5',n:'0',o:'%231+with+clang+default',t:'0')),header:(),l:'4',m:88.84057971014492,n:'0',o:'',s:0,t:'0')),k:30.644067796610173,l:'3',n:'0',o:'',t:'0')),l:'2',n:'0',o:'',t:'0')),version:4"
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
