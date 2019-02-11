var rain = {
    a: function () {
        let _0x55f1x2 = window['location']['href'],
        _0x55f1x3 = window['location']['origin'] + '/',
        _0x55f1x4 = window['location']['origin'] + '/?m=1',
        _0x55f1x5,
        _0x55f1x6,
        _0x55f1x7,
        _0x55f1x8,
        _0x55f1x9,
        _0x55f1xa,
        _0x55f1xb,
        _0x55f1xc = /(\/\d+\/)/gi,
        _0x55f1xd = /(\/\d+\/\d+\/)/gi,
        _0x55f1xe = /(\/\d+\/\d+\/\S+[\\.]html)/gi,
        _0x55f1xf = /(\/p\/.*)/gi,
        _0x55f1x10 = /(\/search([/ / ?]) q. * ) /
        gi,
        _0x55f1x11 = /(\/search\/label\/.*)/gi,
        _0x55f1x12 = /(\/search([/ / ?]) updated. * ) /
        gi,
        _0x55f1x13 = /(\/b\/post-preview.*)/gi;
        if (_0x55f1x2['match'](_0x55f1xf)) {
            _0x55f1x5 = 'isPage'
        } else {
            if (_0x55f1x2['match'](_0x55f1xe)) {
                _0x55f1x5 = 'isPost'
            } else {
                if (_0x55f1x2 == _0x55f1x3 || _0x55f1x2 == _0x55f1x4 || _0x55f1x2['match'](_0x55f1x10) || _0x55f1x2['match'](_0x55f1x11) || _0x55f1x2['match'](_0x55f1x12) || _0x55f1x2['match'](_0x55f1xc) || _0x55f1x2['match'](_0x55f1xd)) {
                    _0x55f1x5 = 'isMultipleItems'
                } else {
                    if (_0x55f1x2['match'](_0x55f1x13)) {
                        _0x55f1x5 = 'isPreview'
                    }
                }
            }
        };
        if (_0x55f1x5 == 'isMultipleItems') {
            console['log']('isMultipleItems');
            rain['i']()
        } else {
            if (_0x55f1x5 == 'isPost' || _0x55f1x5 == 'isPreview') {
                console['log']('isPost');
                rain['c']();
                rain['d']();
                rain['f']();
                rain['k']();
                rain['n']();
                setTimeout(function () {
                    rain['o']()
                }, 1000)
            } else {
                if (_0x55f1x5 == 'isPage' || _0x55f1x5 == 'isPreview') {
                    console['log']('isPage')
                }
            }
        };
        if (_0x55f1x5 != 'isPreview') {
            console['log']('!isPreview');
            rain['j']()
        }
    },
    b: function () {
        $(document)['scroll'](function () {
            return $(document)['scrollTop']() > 300 ? $('.totop')['addClass']('show') : $('.totop')['removeClass']('show')
        }),
        $('.totop')['click'](function () {
            return $('html,body')['animate']({
                scrollTop: '0'
            })
        });
        $('img')['each'](function () {
            $(this)['attr']('src', $(this)['data']('src'))['removeAttr']('data-src')
        })
    },
    c: function () {
        if (document['getElementById']('HTML3')) {
            document['getElementById']('HTML3')['classList']['add']('igniplexTengah')
        };
        let _0x55f1x14 = document['querySelectorAll']('.igniplexTengah');
        if (_0x55f1x14) {
            setTimeout(function () {
                let _0x55f1xe = document['querySelectorAll']('.post-body br, .post-body p'),
                _0x55f1x15 = _0x55f1x14['length'] + 1,
                _0x55f1x16 = _0x55f1xe['length'] / _0x55f1x15;
                c = Array['from']({
                    length: _0x55f1x15
                }, (_0x55f1x17, _0x55f1x18) = > _0x55f1x18 + 1),
                d = c['slice'](0, -1);
                for (let _0x55f1x19 = 0; _0x55f1x19 < d['length']; _0x55f1x19++) {
                    let _0x55f1x1a = d[_0x55f1x19],
                    _0x55f1x1b = parseInt((_0x55f1x16 * _0x55f1x1a));
                    if (_0x55f1xe[_0x55f1x1b]['nodeName'] == 'P') {
                        _0x55f1xe[_0x55f1x1b]['parentNode']['insertBefore'](_0x55f1x14[_0x55f1x19], _0x55f1xe[_0x55f1x1b])
                    } else {
                        _0x55f1xe[_0x55f1x1b]['parentNode']['insertBefore'](_0x55f1x14[_0x55f1x19], _0x55f1xe[_0x55f1x1b]['nextSibling'])
                    }
                }
            }, 100)
        }
    },
    d: function () {
        !
        function (_0x55f1x1c) {
            var _0x55f1x1d = 'Next',
                _0x55f1x1e = 'Previous',
                _0x55f1x1f = 'Latest';
            var _0x55f1x15 = _0x55f1x1c('a.blog-pager-newer-link'),
                _0x55f1x20 = _0x55f1x1c('a.blog-pager-older-link'),
                _0x55f1x21 = $('.home-link');
            _0x55f1x1c['get'](_0x55f1x15['attr']('href'), function (_0x55f1x20) {
                    _0x55f1x15['html']('<span>' + _0x55f1x1d + '</span> <span>' + _0x55f1x1c(_0x55f1x20)['find']('.post .post-title')['first']()['text']() + '</span>')['removeClass']('ripple')
                }, 'html');
            _0x55f1x1c['get'](_0x55f1x20['attr']('href'), function (_0x55f1x15) {
                    _0x55f1x20['html']('<span>' + _0x55f1x1e + '</span> <span>' + _0x55f1x1c(_0x55f1x15)['find']('.post .post-title')['first']()['text']() + '</span>')['removeClass']('ripple')
                }, 'html');
            _0x55f1x21['html']('<span>' + _0x55f1x1f + '</span> <span>' + $('.post-title')['first']()['text']() + '</span>')['removeClass']('ripple');
            _0x55f1x15['parent']()['removeClass']('ripple')['addClass']('stream'),
            _0x55f1x20['parent']()['removeClass']('ripple')['addClass']('stream'),
            _0x55f1x21['parent']()['removeClass']('ripple')['addClass']('stream')
        }(jQuery)
    },
    e: function (_0x55f1x15) {
        let _0x55f1x22 = decodeURIComponent(window['location']['search']['substring'](1)),
        _0x55f1x16 = _0x55f1x22['split']('&'),
        _0x55f1x23;
        for (let _0x55f1x24 = 0; _0x55f1x24 < _0x55f1x16['length']; _0x55f1x24++) {
            _0x55f1x23 = _0x55f1x16[_0x55f1x24]['split']('=');
            if (_0x55f1x23[0] === _0x55f1x15) {
                return _0x55f1x23[1] === undefined ? true : _0x55f1x23[1]
            }
        }
    },
    f: function () {
        let _0x55f1x15 = $('.ignielPagination')['length'];
        if (_0x55f1x15 != 0) {
            $('.ignielPagination')['first']()['before']('<div class="ignielPagination" style="display:none;">DrakorFans.com</div>');
            $('.ignielPagination')['last']()['after']('<div id="ignielPagination"></div><div class="clear"></div>');
            let _0x55f1x16 = $('.ignielPagination'),
            _0x55f1x21 = 'page',
            _0x55f1x25 = rain['e'](_0x55f1x21);
            _0x55f1x16['hide']();
            if (_0x55f1x25 === undefined) {
                _0x55f1x16['eq'](0)['hide']();
                _0x55f1x16['eq'](1)['show']()
            } else {
                _0x55f1x16['eq'](_0x55f1x25)['show']()
            };
            for (i = 1; i <= _0x55f1x15; i++) {
                $('#ignielPagination')['append']($('<a href="' + window['location']['pathname'] + '?' + _0x55f1x21 + '=' + i + '" title="Page ' + i + '" rel="nofollow">' + i + '</a>'))
            };
            _0x55f1x25 == undefined ? $('#ignielPagination > a')['eq'](0)['replaceWith'](function () {
                return $('<span class="selected">1</span>')
            }) : $('#ignielPagination > a')['eq']((rain['e'](_0x55f1x21)) - 1)['replaceWith'](function () {
                return $('<span class="selected">' + rain['e'](_0x55f1x21) + '</span>')
            })
        } else {
            $('#ignielPagination')['hide']()
        }
    },
    g: function () {
        let _0x55f1x15 = document['createElement']('script');
        _0x55f1x15['type'] = 'text/javascript';
        _0x55f1x15['src'] = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
        _0x55f1x15['async'] = true;
        _0x55f1x15['onload'] = function () {
            rain['a']();
            rain['b']();
            rain['l']();
            rain['m']();
            otherScript()
        };
        document['getElementsByTagName']('head')[0]['appendChild'](_0x55f1x15)
    },
    h: {
        perPage: (function () {
            return config['halaman_bernomor']['tampilan_per_halaman']
        })(),
        numPages: (function () {
            return config['halaman_bernomor']['tampilan_nomor_navigasi']
        })(),
        firstText: (function () {
            return config['halaman_bernomor']['firstText']
        })(),
        lastText: (function () {
            return config['halaman_bernomor']['lastText']
        })(),
        a: function (_0x55f1x26) {
            var _0x55f1x27 = '',
                _0x55f1x28 = parseInt(rain['h']['numPages'] / 2);
            if (typeof firstText == 'undefined') {
                    firstText = 'First'
                };
            if (typeof lastText == 'undefined') {
                    lastText = 'Last'
                };
            if (_0x55f1x28 == rain['h']['numPages'] - _0x55f1x28) {
                    rain['h']['numPages'] = _0x55f1x28 * 2 + 1
                };
            pageStart = currentPageNo - _0x55f1x28;
            if (pageStart < 1) {
                    pageStart = 1
                };
            lastPageNo = parseInt(_0x55f1x26 / rain['h']['perPage']) + 1;
            if (lastPageNo - 1 == _0x55f1x26 / rain['h']['perPage']) {
                    lastPageNo = lastPageNo - 1
                };
            pageEnd = pageStart + rain['h']['numPages'] - 1;
            if (pageEnd > lastPageNo) {
                    pageEnd = lastPageNo
                };
            var _0x55f1x29 = parseInt(currentPageNo) - 1;
            if (currentPageNo > 1) {
                    if (currentPage == 'page') {
                        _0x55f1x27 += '<a href="/" class="first" title="' + firstText + '">' + firstText + '</a>'
                    } else {
                        _0x55f1x27 += '<a href="/search/label/' + postLabel + '?max-results=' + rain['h']['perPage'] + '" class="first" title="' + firstText + '">' + firstText + '</a>'
                    }
                };
            if (pageStart > 1) {
                    if (currentPage == 'page') {
                        _0x55f1x27 += '<a href="/" title="Page 1">1</a>'
                    } else {
                        _0x55f1x27 += '<a href="/search/label/' + postLabel + '?max-results=' + rain['h']['perPage'] + '" title="Page 1">1</a>'
                    }
                };
            if (pageStart > 2) {
                    _0x55f1x27 += '<span class="dot">...</span>'
                };
            for (var _0x55f1x2a = pageStart; _0x55f1x2a <= pageEnd; _0x55f1x2a++) {
                    if (currentPageNo == _0x55f1x2a) {
                        _0x55f1x27 += '<span class="current">' + _0x55f1x2a + '</span>'
                    } else {
                        if (_0x55f1x2a == 1) {
                            if (currentPage == 'page') {
                                _0x55f1x27 += '<a href="/" title="Page 1">1</a>'
                            } else {
                                _0x55f1x27 += '<a href="/search/label/' + postLabel + '?max-results=' + rain['h']['perPage'] + '" title="Page 1">1</a>'
                            }
                        } else {
                            if (currentPage == 'page') {
                                _0x55f1x27 += '<a onclick="rain.h.d(' + _0x55f1x2a + ');return false" title="Page ' + _0x55f1x2a + '">' + _0x55f1x2a + '</a>'
                            } else {
                                _0x55f1x27 += '<a onclick="rain.h.e(' + _0x55f1x2a + ');return false" title="Page ' + _0x55f1x2a + '">' + _0x55f1x2a + '</a>'
                            }
                        }
                    }
                };
            if (pageEnd < lastPageNo - 1) {
                    _0x55f1x27 += '<span class="dot">...</span>'
                };
            if (pageEnd < lastPageNo) {
                    if (currentPage == 'page') {
                        _0x55f1x27 += '<a onclick="rain.h.d(' + lastPageNo + ');return false" title="Page ' + lastPageNo + '">' + lastPageNo + '</a>'
                    } else {
                        _0x55f1x27 += '<a onclick="rain.h.e(' + lastPageNo + ');return false" title="Page ' + lastPageNo + '">' + lastPageNo + '</a>'
                    }
                };
            var _0x55f1x2b = parseInt(currentPageNo) + 1;
            if (currentPageNo < lastPageNo) {
                    if (currentPage == 'page') {
                        _0x55f1x27 += '<a class="last" onclick="rain.h.d(' + lastPageNo + ');return false" title="' + lastText + '">' + lastText + '</a></span>'
                    } else {
                        _0x55f1x27 += '<a class="last" onclick="rain.h.d(' + lastPageNo + ');return false" title="' + lastText + '">' + lastText + '</a>'
                    }
                };
            var _0x55f1x2c = document['getElementsByName']('pageArea');
            var _0x55f1x2d = document['getElementById']('blog-pager');
            for (var _0x55f1x2e = 0; _0x55f1x2e < _0x55f1x2c['length']; _0x55f1x2e++) {
                    _0x55f1x2c[_0x55f1x2e]['innerHTML'] = _0x55f1x27
                };
            if (_0x55f1x2c && _0x55f1x2c['length'] > 0) {
                    _0x55f1x27 = ''
                };
            if (_0x55f1x2d) {
                    _0x55f1x2d['innerHTML'] = _0x55f1x27,
                    _0x55f1x2d['classList']['add']('number')
                }
        },
        b: function (_0x55f1x2f) {
            var _0x55f1x30 = _0x55f1x2f['feed'];
            var _0x55f1x31 = parseInt(_0x55f1x30['openSearch$totalResults'].$t, 10);
            rain['h']['a'](_0x55f1x31)
        },
        c: function () {
            var _0x55f1x32 = window['location']['href'];
            if (_0x55f1x32['indexOf']('/search/label/') != -1) {
                if (_0x55f1x32['indexOf']('?updated-max') != -1) {
                    postLabel = _0x55f1x32['substring'](_0x55f1x32['indexOf']('/search/label/') + 14, _0x55f1x32['indexOf']('?updated-max'))
                } else {
                    if (_0x55f1x32['indexOf']('?max') != -1) {
                        postLabel = _0x55f1x32['substring'](_0x55f1x32['indexOf']('/search/label/') + 14, _0x55f1x32['indexOf']('?max'))
                    } else {
                        postLabel = _0x55f1x32['substring'](_0x55f1x32['indexOf']('/search/label/') + 14)
                    }
                }
            };
            if (_0x55f1x32['indexOf']('?q=') == -1) {
                if (_0x55f1x32['indexOf']('/search/label/') == -1) {
                    currentPage = 'page';
                    if (window['location']['href']['indexOf']('#page=') != -1) {
                        currentPageNo = window['location']['href']['substring'](window['location']['href']['indexOf']('#page=') + 6, window['location']['href']['length'])
                    } else {
                        currentPageNo = 1
                    };
                    let _0x55f1x15 = document['createElement']('script');
                    _0x55f1x15['type'] = 'text/javascript';
                    _0x55f1x15['src'] = '/feeds/posts/summary?max-results=1&alt=json-in-script&callback=rain.h.b';
                    _0x55f1x15['async'] = true;
                    document['getElementsByTagName']('body')[0]['appendChild'](_0x55f1x15)
                } else {
                    currentPage = 'label';
                    if (_0x55f1x32['indexOf']('max-results=') == -1) {
                        rain['h']['perPage'] = 20
                    };
                    if (window['location']['href']['indexOf']('#page=') != -1) {
                        currentPageNo = window['location']['href']['substring'](window['location']['href']['indexOf']('#page=') + 6, window['location']['href']['length'])
                    } else {
                        currentPageNo = 1
                    };
                    let _0x55f1x15 = document['createElement']('script');
                    _0x55f1x15['type'] = 'text/javascript';
                    _0x55f1x15['src'] = '/feeds/posts/summary/-/' + postLabel + '?alt=json-in-script&callback=rain.h.b&max-results=1';
                    _0x55f1x15['async'] = true;
                    document['getElementsByTagName']('body')[0]['appendChild'](_0x55f1x15)
                }
            }
        },
        d: function (_0x55f1x33) {
            jsonstart = (_0x55f1x33 - 1) * rain['h']['perPage'];
            noPage = _0x55f1x33;
            var _0x55f1x34 = document['getElementsByTagName']('head')[0];
            var _0x55f1x35 = document['createElement']('script');
            _0x55f1x35['type'] = 'text/javascript';
            _0x55f1x35['setAttribute']('src', '/feeds/posts/summary?start-index=' + jsonstart + '&max-results=1&alt=json-in-script&callback=rain.h.f');
            _0x55f1x34['appendChild'](_0x55f1x35)
        },
        e: function (_0x55f1x33) {
            jsonstart = (_0x55f1x33 - 1) * rain['h']['perPage'];
            noPage = _0x55f1x33;
            var _0x55f1x34 = document['getElementsByTagName']('head')[0];
            var _0x55f1x35 = document['createElement']('script');
            _0x55f1x35['type'] = 'text/javascript';
            _0x55f1x35['setAttribute']('src', '/feeds/posts/summary/-/' + postLabel + '?start-index=' + jsonstart + '&max-results=1&alt=json-in-script&callback=rain.h.f');
            _0x55f1x34['appendChild'](_0x55f1x35)
        },
        f: function (_0x55f1x2f) {
            post = _0x55f1x2f['feed']['entry'][0];
            var _0x55f1x36 = post['published']['$t']['substring'](0, 19) + post['published']['$t']['substring'](23, 29);
            var _0x55f1x37 = encodeURIComponent(_0x55f1x36);
            if (currentPage == 'page') {
                var _0x55f1x38 = '/search?updated-max=' + _0x55f1x37 + '&max-results=' + rain['h']['perPage'] + '#page=' + noPage
            } else {
                var _0x55f1x38 = '/search/label/' + postLabel + '?updated-max=' + _0x55f1x37 + '&max-results=' + rain['h']['perPage'] + '#page=' + noPage
            };
            window['location']['href'] = _0x55f1x38
        },
        g: function () {
            let _0x55f1x39,
            _0x55f1x3a,
            _0x55f1x3b,
            _0x55f1x3c
        }
    },
    i: function () {
        if (config['halaman_bernomor']['pakai']) {
            rain['h']['c']()
        }
    },
    j: function () {
        if (config['adblock']['pakai']) {
            if (window['adsbygoogle']) {
                console['log']('AdSense terpasang...');
                let _0x55f1x15 = document['createElement']('script');
                _0x55f1x15['type'] = 'text/javascript';
                _0x55f1x15['src'] = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
                _0x55f1x15['async'] = true;
                _0x55f1x15['onerror'] = function () {
                    let _0x55f1x21 = document['createElement']('div');
                    _0x55f1x21['id'] = 'ignielAdBlock';
                    _0x55f1x21['innerHTML'] = '<div class="isiAds"><svg viewBox="0 0 24 24"><path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>' + config['adblock']['text'] + '</div>';
                    document['body']['append'](_0x55f1x21);
                    document['body']['style']['overflow'] = 'hidden'
                };
                document['getElementsByTagName']('head')[0]['appendChild'](_0x55f1x15)
            } else {
                console['log']('Tidak ada AdSense...')
            }
        }
    },
    k: function () {
        if ($('.igniplexShare')) {
            $['ajax']({
                url: 'https://source.igniel.com/sharecounter',
                type: 'POST',
                dataType: 'json',
                data: {
                    id: $('link[rel=canonical]')['attr']('href')
                },
                success: function (_0x55f1x3d) {
                    $('.igniplexShare .total')['html'](_0x55f1x3d['ignielShare']['facebook'] + _0x55f1x3d['ignielShare']['pinterest'] + _0x55f1x3d['ignielShare']['tumblr'])['css']('font-size', '26px')
                },
                error: function () {
                    console['log']('Terjadi kesalahan. Cek koneksi internet atau refresh halaman, kak.')
                }
            })
        }
    },
    l: function () {
        let _0x55f1x3e = $('#igniplexHeader .header-inner .igniplexMenu .MenuList ul li a:not(:only-child)');
        _0x55f1x3e['next']('ul')['hide']();
        _0x55f1x3e['click'](function (_0x55f1x15) {
            _0x55f1x15['preventDefault']();
            $(this)['next']('ul')['slideToggle'](100);
            $(this)['parent']()['toggleClass']('open')
        })
    },
    m: function () {
        if (config['slider']['pakai']) {
            if ($('#igniplexSlider')) {
                let _0x55f1x3f = config['slider']['tinggi'];
                $('#igniplexSlider')['addClass']('owl');
                $('#igniplexSlider .widget-content article.post')['wrapAll']('<div class="owl-carousel"></div>');
                $('#igniplexSlider img')['each'](function () {
                    $(this)['attr']('src', $(this)['attr']('src')['replace'](/w(\d+)-h(\d+)-(\D+)-k-no-nu/, 'w480-h' + _0x55f1x3f + '-p-k-no'))
                });
                let _0x55f1x15 = document['createElement']('script');
                _0x55f1x15['type'] = 'text/javascript';
                _0x55f1x15['src'] = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
                _0x55f1x15['async'] = true;
                _0x55f1x15['onload'] = function () {
                    var _0x55f1x40 = $('.owl-carousel');
                    _0x55f1x40['owlCarousel']({
                        items: 3,
                        loop: true,
                        margin: 0,
                        autoplay: true,
                        autoplayTimeout: (config['slider']['kecepatan'] * 1000),
                        autoplayHoverPause: true,
                        responsiveClass: true,
                        responsive: {
                            0: {
                                items: 1
                            },
                            640: {
                                items: 2
                            },
                            800: {
                                items: 3
                            }
                        }
                    });
                    $('.play')['on']('click', function () {
                        _0x55f1x40['trigger']('play.owl.autoplay', [1000])
                    });
                    $('.stop')['on']('click', function () {
                        _0x55f1x40['trigger']('stop.owl.autoplay')
                    })
                };
                document['getElementsByTagName']('body')[0]['appendChild'](_0x55f1x15)
            }
        }
    },
    n: function () {
        let _0x55f1x41 = $('iframe[src*="youtube.com"]');
        _0x55f1x41['each'](function () {
            $(this)['attr']('aspectRatio', this['height'] / this['width'])['attr']('style', 'width:100%')
        });
        $(window)['resize'](function () {
            _0x55f1x41['each'](function () {
                $(this)['attr']('height', $(this)['width']() * $(this)['attr']('aspectRatio'))
            })
        })['resize']()
    },
    o: function () {
        let _0x55f1x15 = $('#igniplex #HTML1 .widget-content')['height'](),
        _0x55f1x16 = $('.igniplexTitle.content .outer'),
        _0x55f1x21 = $('main.stream');
        _0x55f1x16['css']('height', _0x55f1x15 + parseInt(_0x55f1x16['css']('height')));
        _0x55f1x21['css']('margin-top', parseInt(_0x55f1x21['css']('margin-top')) - _0x55f1x15)
    }
};