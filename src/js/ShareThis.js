/**
 * ShareThis utility function
 *
 */

// constants
const i18n = require("./static/i18n.js");

class ShareThis {

  constructor() {
    this.protocol = document.location.protocol === 'https:' ? 'https' : 'http';
    this.mobile = false;
    this.font_family = `
      font-family: \"Helvetica Neue\", Verdana, Helvetica, Arial, sans-serif;
    `;
    this.flex = "-moz-flex: 1;\n-ms-flex: 1;\n-webkit-flex: 1;\nflex: 1;";
    this.border_box = `
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    `;
  }

  capitalize(str) {
    return `${str.charAt(0).toUpperCase()}${str.substring(1).toLowerCase()}`;
  };

  getShareLabel(network, language = 'en') {
    let value = '';
    switch (network) {
      case 'email':
        value = i18n['email'][language];
        break;
      case 'flipboard':
        value = i18n['flip'][language];
        break;
      case 'pinterest':
        value = i18n['pin'][language];
        break;
      case 'print':
        value = i18n['print'][language];
        break;
      case 'twitter':
        value = i18n['tweet'][language];
        break;
      default:
        value = i18n['share'][language];
    }
    return this.capitalize(value);
  };

  send(resource, params, next) {
    let img;
    if (params) {
      resource = `${resource}?${qs(params)}`;
    }
    img = new Image(1, 1);
    img.src = resource;
    img.onload = function() {
      return typeof next === "function" ? next(true) : void 0;
    };
    return img.onerror = function() {
      return typeof next === "function" ? next(false) : void 0;
    };
  };
  
  emit(event, data) {
    if (this.handlers && this.handlers[event]) {
      let handlers = this.handlers[event];
      let res = [];
      for (let i = 0; i < handlers.length; i++) {
        let handler = handlers[i];
        res.push(handler(data));
      }
      return res;
    }
  };

  css(css) {
    let head, s;
    head = document.getElementsByTagName('head')[0];
    s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    if (s.styleSheet) {
      s.styleSheet.cssText = css;
    } else {
      s.appendChild(document.createTextNode(css));
    }
    return head.appendChild(s);
  }

  // BOX_SHADOW: function(value) {
    // return "-moz-box-shadow: " + value + ";\n-webkit-box-shadow: " + value + ";\nbox-shadow: " + value + ";";
  // },

  transition(properties = ['all'], duration = '0.2s') {
    let i, len, property, value;
    value = [];
    for (i = 0, len = properties.length; i < len; i++) {
      property = properties[i];
      value.push(`${property} ${duration} ease-in`);
    }
    value = value.join(', ');
    return `-moz-transition:  ${value};
      -ms-transition: ${value};
      -o-transition: ${value};
      -webkit-transition: ${value};
      transition: ${value};
    `;
  }

  getWindowSize() {
    const {body, documentElement} = document;
    const {innerHeight, innerWidth} = window;
    return {
      height: innerHeight || documentElement.clientHeight || body.clientHeight,
      width: innerWidth || documentElement.clientWidth || body.clientWidth
    };
  }

  px(value) {
    if (typeof value === 'string') {
      return value;
    }
    return (Math.floor(value)) + "px";
  }
  
  open(url) {
    let h, w, wh, ww;
    if (this.mobile) {
      return window.open(url, '_blank');
    } else if (url.indexOf('mailto:') > -1) {
      return document.location = url;
    }

    wh = this.getWindowSize().height;
    ww = this.getWindowSize().width;
    h = Math.min(600, .6 * wh);
    w = Math.min(800, .8 * ww);
    return window.open(url, '', [
      `height=${h}`,
      `left=${(ww - w) / 2}`,
      `top=${(wh - h) / 2}`,
      `width=${w}`,
      `status=1`,
      `toolbar=0`
    ].join(','));
  };

  qs(params) {
    let k, v;
    return ((function() {
      let results;
      results = [];
      for (k in params) {
        if (params.hasOwnProperty(k)) {
          v = params[k];
          if (v !== null) {
            results.push(`${k}=${encodeURIComponent(v)}`);
          }
        }
        
      }
      return results;
    })()).join('&');
  };

  getImage() {
    let $el, i, j, len, len1, ref, ref1, type;
    ref = ['property', 'name'];
    for (i = 0, len = ref.length; i < len; i++) {
      ref1 = ['og:image', 'twitter:image'];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        type = ref1[j];
        $el = document.querySelector(`meta[attr='${type}']`);
        if ($el) {
          return $el.content;
        }
      }
    }
    return '';
  };

  getTitle() {
    let $el,  i, j, len, len1, ref, ref1, type;
    ref = ['property', 'name'];
    for (i = 0, len = ref.length; i < len; i++) {
      ref1 = ['og:title', 'twitter:title'];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        type = ref1[j];
        $el = document.querySelector(`meta[attr='${type}']`);
        if ($el) {
          return $el.content;
        }
      }
    }
    return document.title;
  };

  getDescription() {
    let $el, i, j, len, len1, ref, ref1, type;
    ref = ['property', 'name'];
    for (i = 0, len = ref.length; i < len; i++) {
      ref1 = ['og:description', 'twitter:description', 'description', 'Description'];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        type = ref1[j];
        $el = document.querySelector(`meta[attr='${type}']`);
        if ($el) {
          return $el.content;
        }
      }
    }
    return '';
  };

  // check if an element has a class
  hasClass($el, name) {
    return new RegExp(name).test($el.className);
  }
  // toggle class name
  toggleClass($el, name) {
    if (this.hasClass($el, name)) {
      this.removeClass($el, name);
    } else {
      this.addClass($el, name);
    }
  };

  // // create an append new element
  // newElement: function(parent) {
    // let $el, id;
    // if (parent === void 0) {
      // parent = document.body;
    // }
    // $el = document.createElement('div');
    // id = `st-el-${uid()}`;
    // $el.setAttribute('id', id);
    // if (parent) {
      // parent.appendChild($el);
    // }
    // return {
      // $el: $el,
      // id: id
    // };
  // },

  removeClass($el, name) {
    return $el.className = $el.className.replace(name, '');
  };

  addClass($el, names) {
    let current, i, len, name;
    current = ($el.className || '').split(' ');
    if (typeof names === 'string') {
      names = [names];
    }
    for (i = 0, len = names.length; i < len; i++) {
      name = names[i];
      if (name !== null && current.indexOf(name) < 0) {
        current.push(name);
      }
    }
    return $el.className = current.join(' ');
  };

  addEventListener($el, event, callback) {
    if (!($el && event && callback)) {
      return;
    }
    if ($el.addEventListener) {
      return $el.addEventListener(event, callback, false);
    } else if ($el.attachEvent) {
      return $el.attachEvent("on" + event, callback);
    }
    return $el["on" + event] = callback;
  };

  share(config) {
    let {
      count_url, email_subject, share_url, url,
      description, image, message, network, title, username, product,
    } = config;

    count_url = count_url || url || href;
    share_url = share_url || url || href;
    url = (typeof url === "undefined") ? count_url : url;
    description = (typeof description === "undefined") ? getDescription() : description;
    image = (typeof image === "undefined") ? getImage() : image;
    title = (typeof title === "undefined") ? getTitle() : title;
  
    // if (network === 'sharethis') {
      // return load('share-all', {
        // count_url: count_url,
        // description: description,
        // image: image,
        // share_url: share_url,
        // title: title,
        // url: url,
        // username: username
      // });
    // }
  
    // st.incLocalStorageShares(network, count_url);
  
    this.send((this.protocol + "://l.sharethis.com/log?") + this.qs({
      destinations: network,
      event: 'share',
      product: product,
      publisher: '',
      source: 'sharethis.js',
      title: title,
      ts: Date.now(),
      url: count_url,
      sop: true,
      consentData: '',
      consentDomain: ''
    }));
  
    this.emit('share', {
      count_url: count_url,
      description: description,
      image: image,
      message: message,
      share_url: share_url,
      title: title,
      url: url,
      username: username
    });
  
    if (network === 'wechat') {
      // if (mobile) {
        // return load('share-wechat-mobile', {
          // url: share_url
        // });
      // }

      let wechat = "https://chart.apis.google.com/chart?" + this.qs({
        cht: "qr",
        chs: "154x154",
        chld: "Q|0",
        chl: share_url,
        app_id: null
      });

      open(wechat);
    }
  
    if (network === 'print') {
      emit('print', {
        count_url: count_url,
        description: description,
        image: image,
        message: message,
        share_url: share_url,
        title: title,
        url: url,
        username: username
      });
      return window.print();
    }
  
    let hostname = document.location.hostname;
    let is_ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
  
    let redirects = {
      blogger: "https://www.blogger.com/blog-this.g?" + this.qs({
        n: title,
        t: description,
        u: share_url
      }),
      delicious: "https://del.icio.us/save?" + this.qs({
        provider: 'sharethis',
        title: title,
        url: share_url,
        v: 5
      }),
      digg: "https://digg.com/submit?" + this.qs({
        url: share_url
      }),
      email: "mailto:?to=&" + this.qs({
        subject: email_subject || "I'd like to share a link with you",
        body: message || ("" + url)
      }),
      facebook: "https://www.facebook.com/sharer.php?" + this.qs({
        t: title,
        u: share_url
      }),
      flipboard: "https://share.flipboard.com/bookmarklet/popout?" + this.qs({
        ext: 'sharethis',
        title: title,
        url: share_url,
        utm_campaign: 'widgets',
        utm_content: hostname,
        utm_source: 'sharethis',
        v: 2
      }),
      googleplus: "https://plus.google.com/share?" + this.qs({
        url: share_url
      }),
      linkedin: "https://www.linkedin.com/shareArticle?" + this.qs({
        title: title,
        url: share_url
      }),
      livejournal: "https://www.livejournal.com/update.bml?" + this.qs({
        event: share_url,
        subject: title
      }),
      mailru: "https://connect.mail.ru/share?" + this.qs({
        share_url: share_url
      }),
      meneame: "https://meneame.net/submit.php?" + this.qs({
        url: share_url
      }),
      messenger: {
        "true": "fb-messenger://share/?" + this.qs({
          link: share_url,
          app_id: 521270401588372
        }),
        "false": "https://www.facebook.com/dialog/send?" + this.qs({
          link: share_url,
          app_id: 521270401588372,
          redirect_uri: "https://www.sharethis.com"
        })
      }[this.mobile],
      odnoklassniki: "https://www.odnoklassniki.ru/dk?" + this.qs({
        'st._surl': share_url,
        'st.cmd': 'addShare',
        'st.s': 1
      }),
      pinterest: "https://pinterest.com/pin/create/button/?" + this.qs({
        description: title,
        media: image,
        url: share_url
      }),
      reddit: "https://reddit.com/submit?" + this.qs({
        title: title,
        url: share_url
      }),
      sms: "sms:" + (is_ios ? '&' : '?') + "body=" + (encodeURIComponent(share_url)),
      stumbleupon: "https://www.stumbleupon.com/submit?" + this.qs({
        title: title,
        url: share_url
      }),
      tumblr: "https://www.tumblr.com/share?" + this.qs({
        t: title,
        u: share_url,
        v: 3
      }),
      twitter: "https://twitter.com/intent/tweet?" + this.qs({
        text: title || description,
        url: share_url,
        via: username
      }),
      vk: "https://vk.com/share.php?" + this.qs({
        url: share_url
      }),
      weibo: "http://v.t.sina.com.cn/share/share.php?" + this.qs({
        title: title,
        url: share_url
      }),
      whatsapp: (!this.mobile ? "https://web.whatsapp.com/send?" : "whatsapp://send?") + this.qs({
        text: share_url
      }),
      xing: "https://www.xing.com/app/user?" + this.qs({
        op: 'share',
        title: title,
        url: share_url
      })
    };
    return this.open(redirects[network]);
  }

};

module.exports = ShareThis;
