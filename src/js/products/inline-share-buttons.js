// load library
import st from '../utils';

const loader = function(config = {}) {
  let $el, $els, i, id, len, ref, results;
  if (!config.enabled) {
    return;
  }
  if (config.id) {
    $el = document.getElementById(config.id);
    if ($el) {
      return load($el, config);
    }
  } else if (config.container) {
    if (typeof config.container === 'string') {
      config.container = document.getElementById(config.container);
    }
    ref = st.newElement(config.container), $el = ref.$el, id = ref.id;
    config.id = id;
    if ($el) {
      return load($el, config);
    }
  } else {
    $els = document.querySelectorAll('.sharethis-inline-share-buttons');
    results = [];
    for (i = 0, len = $els.length; i < len; i++) {
      $el = $els[i];
      results.push(load($el, config));
    }
    return results;
  }
};

load = function($el, config) {
  let {
    fade_in, onLoad,
    alignment, font_size, language, padding, radius, size, spacing,
    id, labels, min_count, networks, show_total, use_native_counts,
    show_mobile_buttons,
    url, title, image, description, username
  } = config;
  alignment_opposite = alignment === 'left' ? 'right' : 'left';

  // defaults
  fade_in = (typeof fade_in === "undefined") ? true : fade_in;
  alignment = (typeof alignment === "undefined") ? 'left' : alignment;
  font_size = (typeof font_size === "undefined") ? 12 : font_size;
  min_count = (typeof min_count === "undefined") ? 0 : min_count;
  language = (typeof language === "undefined") ? 'en' : language;
  padding = (typeof padding === "undefined") ? 10 : padding;
  radius = (typeof radius === "undefined") ? 0 : radius;
  size = (typeof size === "undefined") ? 40 : size;
  spacing = (typeof spacing === "undefined") ? 8 : spacing;
  use_native_counts = (typeof use_native_counts === "undefined") ? true : use_native_counts;
  show_mobile_buttons = (typeof show_mobile_buttons === "undefined") ? st.mobile : show_mobile_buttons;
  if (typeof networks === "undefined") {
    networks = ['facebook', 'twitter', 'pinterest', 'email', 'sharethis'];
  }

  options = [
    `st-${alignment}`,
    'st-inline-share-buttons'
  ];
  if (language !== 'en') {
    options.push(`st-lang-${language}`);
  }
  if (labels === 'counts' || labels === 'cta') {
    options.push('st-has-labels');
  }
  if (fade_in) {
    options.push('st-hidden');
  }
  st.addClass($el, options);

  // append styling to dom
  common_css = `
    ##{id} {
      ${st.FONT_FAMILY};
      direction: ltr;
      display: block;
      opacity: 1;
      text-align: ${alignment};
      z-index: 94034;
    }
    ##{id}.st-animated {
      ${st.TRANSITION('opacity')}
    }
    ##{id}.st-hidden {
      opacity: ${fade_in ? 0 : 1};
    }
    ##{id} .st-btn {
      ${st.BORDER_BOX}
      ${st.TRANSITION(['opacity', 'top'])}
      ${st.BORDER_RADIUS(radius)}
      cursor: pointer;
      display: inline-block;
      font-size: ${st.px(font_size)};
      height: ${st.px(size)};
      line-height: ${st.px(size)};
      margin-right: ${spacing ? st.px(spacing) : 0};
      padding: 0 ${st.px(padding)};
      position: relative;
      text-align: center;
      top: 0;
      vertical-align: top;
      white-space: nowrap;
    }
    ##{id} .st-btn:last-child {
      margin-right: 0;
    }
    ##{id} .st-btn > svg {
      height: ${st.px(size / 2)};
      width: ${st.px(size / 2)};
      position: relative;
      top: ${st.px(size / 4)};
      vertical-align: top;
    }
    ##{id} .st-btn > img {
      height: ${st.px(size / 2)};
      width: ${st.px(size / 2)};
      position: relative;
      top: ${st.px(size / 4)};
      vertical-align: top;
    }
    ##{id} .st-btn > span {
      ${st.TRANSITION()}
      color: #fff;
      display: inline-block;
      font-weight: 500;
      letter-spacing: 0.5px;
      min-width: ${st.px(30 + Math.floor(size * 15 / 16))};
      opacity: 1;
      padding: 0 6px;
      position: relative;
      vertical-align: top;
    }
    ##{id}.st-has-labels .st-btn {
      min-width: ${st.px(60 + Math.floor(size * 15 / 8))};
    }
    ##{id}.st-has-labels .st-btn.st-remove-label {
      min-width: 50px;
    }
    ##{id}.st-has-labels .st-btn.st-remove-label > span {
      display: none;
    }
    ##{id}.st-has-labels .st-btn.st-hide-label > span {
      display: none;
    }
    ##{id} .st-total {
      color: #555;
      display: inline-block;
      font-weight: 500;
      line-height: ${st.px(.375 * size)};
      margin-right: 0;
      max-width: 80px;
      padding: 4px 8px;
      text-align: center;
    }
    ##{id} .st-total.st-hidden {
      display: none;
    }
    ##{id} .st-total > span {
      font-size: ${st.px(.5 * size)};
      line-height: ${st.px(.55 * size)};
      display: block;
      padding: 0;
    }
    ##{id} .st-total > span.st-shares {
      font-size: ${st.px(.3 * size)};
      line-height: ${st.px(.3 * size)};
    }
    ##{id}.st-justified {
      display: flex;
      text-align: center;
    }
    ##{id}.st-justified .st-btn {
      ${st.FLEX}
    }
  `;

  network_css = ((function() {
    let results;
    results = [];
    for (let i = 0; i < networks.length; i++) {
      network = networks[i];
      results.push(`
        #${id} .st-btn[data-network='${network}'] {
        background-color: ${st.COLORS[network]};
      }`);
    }
    return results;
  })()).join('\n');

  // build final css
  css = common_css;
  if (!st.mobile) {
    css += hover_css;
  }
  css += network_css;
  st.css(css);

  // generate button html
  html = '';
  if (!show_mobile_buttons) {
    if (networks.indexOf('sms') > -1) {
      networks.splice(index, 1);
    }
  }

  // generate html for total count
  if (show_total) {
    html += `
      <div class='st-total st-hidden'>
        <span class='st-label'></span>
        <span class='st-shares'>
          ${st.capitalize(st.i18n['shares'][language])}
        </span>
      </div>
    `;
  }

  // generate html for networks
  for (i = 0; i < networks.length; ++i) {
    network = networks[i];
    class_names = ['st-btn'];
    if (index === 0) {
      class_names.push('st-first');
    }
    if (index === networks.length - 1) {
      class_names.push('st-last');
    }
    label = st.getShareLabel(network, language);
    if (labels !== 'cta') {
      label = '';
    }
    label_span = `<span class='st-label'>${label}</span>`;
    html += `
      <div class='${class_names.join(' ')}' data-network='${network}'>
        ${st.ICONS[network]}
        ${['counts', 'cta'].includes(labels) ? label_span : ''}
      </div>
    `;
  }

  // render buttons
  $el.innerHTML = html;
  $buttons = $el.querySelectorAll('.st-btn');
  $total = $el.querySelector('.st-total');
  $total_label = $el.querySelector('.st-total .st-label');

  // share listeners
  fn = $button => st.addEventListener($button, 'click', () =>
    st.share({
      description: description || $el.getAttribute('data-description'),
      email_subject: $el.getAttribute('data-email-subject'),
      image: image || $el.getAttribute('data-image'),
      message: $el !== null ? $el.getAttribute('data-message') : void 0,
      network: $button.getAttribute('data-network'),
      share_url: $el.getAttribute('data-short-url'),
      title: title || ($el !== null ? $el.getAttribute('data-title') : void 0),
      url: url || $el.getAttribute('data-url'),
      username: username || $el.getAttribute('data-username')
    })
  );

  for (k = 0; k < $buttons.length; k++) {
    $button = $buttons[k];
    fn($button);
  }

  // load counts
  if (show_total || labels === 'counts') {
    st.loadCounts({
      facebook: indexOf.call(networks, 'facebook') >= 0,
      url: url || $el.getAttribute('data-url'),
      use_native_counts: use_native_counts
    }, function(counts) {
      let l, len3, ref1, ref2, ref3, ref4, value;
      if (show_total) {
        if (((ref1 = counts['total']) !== null ? ref1.value : void 0) > min_count) {
          $total_label.innerHTML = ((ref2 = counts['total']) !== null ? ref2.label : void 0) || '';
          st.removeClass($total, 'st-hidden');
        } else {
          st.addClass($total, 'st-hidden');
        }
      }
      if (labels === 'counts') {
        for (l = 0, len3 = $buttons.length; l < len3; l++) {
          $button = $buttons[l];
          network = $button.getAttribute('data-network');
          ref3 = counts[network] || {}, label = ref3.label, value = ref3.value;
          if (label && value > min_count) {
            if ((ref4 = $button.querySelector('.st-label')) !== null) {
              ref4.innerHTML = label;
            }
            st.removeClass($button, 'st-hide-label');
          } else {
            st.addClass($button, 'st-hide-label');
          }
        }
      }
      if (fade_in) {
        st.addClass($el, 'st-animated');
        st.removeClass($el, 'st-hidden');
      }
      return typeof onLoad === "function" ? onLoad() : void 0;
    });
  } else {
    if (fade_in) {
      st.addClass($el, 'st-animated');
      st.removeClass($el, 'st-hidden');
    }
    if (typeof onLoad === "function") {
      onLoad();
    }
  }
  return {
    $buttons: $buttons,
    $el: $el,
    id: id,
  };
};

module.exports = loader;
