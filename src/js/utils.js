
// utility function
function st (product, loader) {

  const protocol = document.location.protocol === 'https:' ? 'https' : 'http';
  const href = 'https://www.sharethis.com';
  const  mobile = false;

  const send = function(resource, params, next) {
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
  
  const emit = function(event, data) {
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

  const load = function(product, config) {
    if (loader && typeof loader[product] === "function") {
      loader[product](config);
    }
  };

  let getWindowSize = function() {
    let body, documentElement, innerHeight, innerWidth;
    body = document.body, documentElement = document.documentElement;
    innerHeight = window.innerHeight, innerWidth = window.innerWidth;
    return {
      height: innerHeight || documentElement.clientHeight || body.clientHeight,
      width: innerWidth || documentElement.clientWidth || body.clientWidth
    };
  };
  
  let open = function(url) {
    let h, w, wh, ww;
    if (mobile) {
      return window.open(url, '_blank');
    } else if (url.indexOf('mailto:') > -1) {
      return document.location = url;
    }

    wh = getWindowSize().height;
    ww = getWindowSize().width;
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

  let qs = function(params) {
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

  let getImage = function() {
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

  let getTitle = function() {
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

  let getDescription = function() {
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

  this.share = function(config) {
    let {
      count_url, email_subject, share_url, url,
      description, image, message, network, title, username,
    } = config;

    count_url = count_url || url || href;
    share_url = share_url || url || href;
    url = (typeof url === "undefined") ? count_url : url;
    description = (typeof description === "undefined") ? getDescription() : description;
    image = (typeof image === "undefined") ? getImage() : image;
    title = (typeof title === "undefined") ? getTitle() : title;
  
    if (network === 'sharethis') {
      return load('share-all', {
        count_url: count_url,
        description: description,
        image: image,
        share_url: share_url,
        title: title,
        url: url,
        username: username
      });
    }
  
    // st.incLocalStorageShares(network, count_url);
  
    send((protocol + "://l.sharethis.com/log?") + qs({
      destinations: network,
      event: 'share',
      product: product,
      publisher: st.property,
      source: 'sharethis.js',
      title: title,
      ts: Date.now(),
      url: count_url,
      sop: true,
      consentData: '',
      consentDomain: ''
    }));
  
    emit('share', {
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
      if (mobile) {
        return load('share-wechat-mobile', {
          url: share_url
        });
      }

      let wechat = "https://chart.apis.google.com/chart?" + qs({
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
      blogger: "https://www.blogger.com/blog-this.g?" + qs({
        n: title,
        t: description,
        u: share_url
      }),
      delicious: "https://del.icio.us/save?" + qs({
        provider: 'sharethis',
        title: title,
        url: share_url,
        v: 5
      }),
      digg: "https://digg.com/submit?" + qs({
        url: share_url
      }),
      email: "mailto:?to=&" + qs({
        subject: email_subject || "I'd like to share a link with you",
        body: message || ("" + url)
      }),
      facebook: "https://www.facebook.com/sharer.php?" + qs({
        t: title,
        u: share_url
      }),
      flipboard: "https://share.flipboard.com/bookmarklet/popout?" + qs({
        ext: 'sharethis',
        title: title,
        url: share_url,
        utm_campaign: 'widgets',
        utm_content: hostname,
        utm_source: 'sharethis',
        v: 2
      }),
      googleplus: "https://plus.google.com/share?" + qs({
        url: share_url
      }),
      linkedin: "https://www.linkedin.com/shareArticle?" + qs({
        title: title,
        url: share_url
      }),
      livejournal: "https://www.livejournal.com/update.bml?" + qs({
        event: share_url,
        subject: title
      }),
      mailru: "https://connect.mail.ru/share?" + qs({
        share_url: share_url
      }),
      meneame: "https://meneame.net/submit.php?" + qs({
        url: share_url
      }),
      messenger: {
        "true": "fb-messenger://share/?" + qs({
          link: share_url,
          app_id: 521270401588372
        }),
        "false": "https://www.facebook.com/dialog/send?" + qs({
          link: share_url,
          app_id: 521270401588372,
          redirect_uri: "https://www.sharethis.com"
        })
      }[mobile],
      odnoklassniki: "https://www.odnoklassniki.ru/dk?" + qs({
        'st._surl': share_url,
        'st.cmd': 'addShare',
        'st.s': 1
      }),
      pinterest: "https://pinterest.com/pin/create/button/?" + qs({
        description: title,
        media: image,
        url: share_url
      }),
      reddit: "https://reddit.com/submit?" + qs({
        title: title,
        url: share_url
      }),
      sms: "sms:" + (is_ios ? '&' : '?') + "body=" + (encodeURIComponent(share_url)),
      stumbleupon: "https://www.stumbleupon.com/submit?" + qs({
        title: title,
        url: share_url
      }),
      tumblr: "https://www.tumblr.com/share?" + qs({
        t: title,
        u: share_url,
        v: 3
      }),
      twitter: "https://twitter.com/intent/tweet?" + qs({
        text: title || description,
        url: share_url,
        via: username
      }),
      vk: "https://vk.com/share.php?" + qs({
        url: share_url
      }),
      weibo: "http://v.t.sina.com.cn/share/share.php?" + qs({
        title: title,
        url: share_url
      }),
      whatsapp: (!mobile ? "https://web.whatsapp.com/send?" : "whatsapp://send?") + qs({
        text: share_url
      }),
      xing: "https://www.xing.com/app/user?" + qs({
        op: 'share',
        title: title,
        url: share_url
      })
    };
    return open(redirects[network]);
  };
}

module.exports = st;
