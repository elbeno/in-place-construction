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

        // insert_or_assign
        8019: { display: 'block', innerHTML:'17' },
        8020: { display: 'block', innerHTML:'17' },
        8021: { display: 'block', innerHTML:'17' },
        // extract & insert
        8022: { display: 'block', innerHTML:'17' },
        // structured bindings
        8024: { display: 'block', innerHTML:'17' },

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

function encode_source(source) {
    preamble = "http://localhost:10240/#g:!((g:!((g:!((h:codeEditor,i:(j:1,lang:c%2B%2B,source:'";
    postamble = "'),l:'5',n:'0',o:'C%2B%2B+source+%231',t:'0')),k:50,l:'4',n:'0',o:'',s:0,t:'0'),(g:!((g:!((h:compiler,i:(compiler:/usr/bin/clang%2B%2B,filters:(b:'0',binary:'0',commentOnly:'0',demangle:'0',directives:'0',execute:'0',intel:'0',trim:'1'),lang:c%2B%2B,libs:!(),options:'-O3+-std%3Dc%2B%2B2a',source:1),l:'5',n:'0',o:'/usr/bin/clang%2B%2B+(Editor+%231,+Compiler+%231)+C%2B%2B',t:'0')),header:(),k:50,l:'4',m:63.657957244655584,n:'0',o:'',s:0,t:'0'),(g:!((h:output,i:(compiler:1,editor:1,wrap:'1'),l:'5',n:'0',o:'%231+with+/usr/bin/clang%2B%2B',t:'0')),header:(),l:'4',m:36.342042755344416,n:'0',o:'',s:0,t:'0')),k:50,l:'3',n:'0',o:'',t:'0')),l:'2',n:'0',o:'',t:'0')),version:4";

    if (source.indexOf("will_it_rvo") != -1) {
        source = '#include <stdio.h>\n\
\n\
struct Foo {};\n\
\n\
struct S\n\
{\n\
  S() { puts("Default construct\\n"); }\n\
  S(Foo) { puts("Value construct\\n"); }\n\
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
        source = '#include <stdio.h>\n\
\n\
struct Foo {};\n\
\n\
struct S\n\
{\n\
  S() { puts("Default construct\\n"); }\n\
  S(Foo) { puts("Value construct\\n"); }\n\
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

    window.addEventListener('load', function () {
        window.Reveal.addEventListener('slidechanged', function (event) {
            // event.previousSlide, event.currentSlide, event.indexh, event.indexv
            set_star(event.indexh, event.indexv);
        });

        var pres = document.getElementsByTagName('pre');
        for(var i = 0; i < pres.length; i++) {
            var pre = pres[i];
            if (pre.className === 'src src-c++') {
                pre.onclick = (function() {
                    var src = pre.textContent;
                    return function() {
                        window.location.href = encode_source(src);
                    };
                })();
                pre.onauxclick = (function() {
                    var src = pre.textContent;
                    return function(e) {
                        if (e.which == 2) {
                            window.open(encode_source(src));
                        }
                    };
                })();
            }
        }
    });

})(window);
