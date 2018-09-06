/**
 * Inline Share Buttons products
 *
 */

// constants
const ShareThis = require("../ShareThis.js");
const ICONS = require("../static/ICONS.js");
const COLORS = require("../static/COLORS.js");
const i18n = require("../static/i18n.js");

function loader(config = {}) {

  let {
    alignment,
    description,
    fade_in,
    font_size,
    id,
    st_id,
    image,
    labels,
    language,
    min_count,
    networks,
    padding,
    radius,
    show_total,
    size,
    spacing,
    title,
    url,
    username
  } = config;

  // default configs
  alignment = alignment || 'left';
  font_size = font_size || 12;
  labels = labels || 'cta';
  language = language || 'en';
  min_count = min_count || 0;
  padding = padding || 10;
  radius = radius || 4;
  size = size || 40;
  spacing = spacing || 8;

  let st = new ShareThis(id);
  const $el = document.getElementById(st_id);

  // update class names
  st.addClass($el, [
    `st-${alignment}`,
    language !== 'en' ? `st-lang-${language}` : void 0,
    ['counts', 'cta'].indexOf(labels) >= 0 ? `st-has-labels` : void 0,
    fade_in ? `st-hidden` : void 0,
  ]);

  // append styling to dom
  let common_css = `
    #${st_id} {
      ${st.font_family};
      direction: ltr;
      display: block;
      opacity: 1;
      text-align: ${alignment};
      z-index: 94034;
    }
    #${st_id}.st-animated {
      ${st.transition('opacity')}
    }
    #${st_id}.st-hidden {
      opacity: ${fade_in ? 0 : 1};
    }
    #${st_id} .st-btn {
      ${st.transition(['opacity', 'top'])}
      border-radius: ${st.px(radius)};
      box-sizing: border-box;
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
      -moz-border-radius: ${st.px(radius)};
      -webkit-border-radius: ${st.px(radius)};
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
    }
    #${st_id} .st-btn:last-child {
      margin-right: 0;
    }
    #${st_id} .st-btn > svg {
      height: ${st.px(size / 2)};
      width: ${st.px(size / 2)};
      position: relative;
      top: ${st.px(size / 4)};
      vertical-align: top;
    }
    #${st_id} .st-btn > img {
      height: ${st.px(size / 2)};
      width: ${st.px(size / 2)};
      position: relative;
      top: ${st.px(size / 4)};
      vertical-align: top;
    }
    #${st_id} .st-btn > span {
      ${st.transition()}
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
    #${st_id}.st-has-labels .st-btn {
      min-width: ${st.px(60 + Math.floor(size * 15 / 8))};
    }
    #${st_id}.st-has-labels .st-btn.st-remove-label {
      min-width: 50px;
    }
    #${st_id}.st-has-labels .st-btn.st-remove-label > span {
      display: none;
    }
    #${st_id}.st-has-labels .st-btn.st-hide-label > span {
      display: none;
    }
    #${st_id} .st-total {
      color: #555;
      display: inline-block;
      font-weight: 500;
      line-height: ${st.px(.375 * size)};
      margin-right: 0;
      max-width: 80px;
      padding: 4px 8px;
      text-align: center;
    }
    #${st_id} .st-total.st-hidden {
      display: none;
    }
    #${st_id} .st-total > span {
      font-size: ${st.px(.5 * size)};
      line-height: ${st.px(.55 * size)};
      display: block;
      padding: 0;
    }
    #${st_id} .st-total > span.st-shares {
      font-size: ${st.px(.3 * size)};
      line-height: ${st.px(.3 * size)};
    }
    B
    #${st_id}.st-justified {
      display: flex;
      text-align: center;
    }
    #${st_id}.st-justified .st-btn {
      ${st.flex}
    }
  `;

  let hover_css = `
    #${st_id} .st-btn:hover {
      opacity: .8;
      top: -4px;
    }
  `;

  let mobile_css = `
    #${st_id} {
      bottom: 0;
  `;

  let network_css = ((function() {
    let results;
    results = [];
    for (let i = 0; i < networks.length; i++) {
      let network = networks[i];
      results.push(`
        #${st_id} .st-btn[data-network='${network}'] {
        background-color: ${COLORS[network]};
      }`);
    }
    return results;
  })()).join('\n');

  // build final css
  let css = common_css;
  css += hover_css;
  css += network_css;
  st.css(css);

  // generate button html
  let html = '';

  // generate html for total count
  if (show_total) {
    html += `
      <div class='st-total st-hidden'>
        <span class='st-label'></span>
        <span class='st-shares'>
          ${st.capitalize(i18n['shares'][language])}
        </span>
      </div>
    `;
  }

  // generate html for networks
  for (let i = 0; i < networks.length; ++i) {
    let network = networks[i];
    let class_names = ['st-btn'];
    if (i === 0) {
      class_names.push('st-first');
    }
    if (i === networks.length - 1) {
      class_names.push('st-last');
    }
    let label = st.getShareLabel(network, language);
    if (labels !== 'cta') {
      label = '';
    }
    let label_span = `<span class='st-label'>${label}</span>`;
    html += `
      <div class='${class_names.join(' ')}' data-network='${network}'>
        ${ICONS[network]}
        ${['counts', 'cta'].includes(labels) ? label_span : ''}
      </div>
    `;
  }

  // render buttons
  $el.innerHTML = html;

  // get elements
  let $buttons = $el.querySelectorAll('.st-btn');
  let $total = $el.querySelector('.st-total');
  let $total_label = $el.querySelector('.st-total .st-label');

  // share listners
  for (let i = 0; i < $buttons.length; i++) {
    st.addEventListener($buttons[i], 'click', () => {
      return st.share({
        description: description || $el.getAttribute('data-description'),
        email_subject: $el.getAttribute('data-email-subject'),
        image: image || $el.getAttribute('data-image'),
        message: $el.getAttribute('data-message'),
        network: $buttons[i].getAttribute('data-network'),
        share_url: $el.getAttribute('data-short-url'),
        title: title || (typeof $el !== "undefined" && $el !== null ? $el.getAttribute('data-title') : void 0),
        url: url || $el.getAttribute('data-url'),
        username: $el.getAttribute('data-username')
      });
    });
  }

  // load counts
  if (show_total || labels === 'counts') {
    st.loadCounts({
      'url': url || $el.getAttribute('data-url')
    }, (counts) => {
      if (show_total) {
        if (counts['total'] > min_count) {
          $total_label.innerHTML = st.formatNumber(counts['total']) || '';
          st.removeClass($total, 'st-hidden');
        } else {
          st.addClass($total, 'st-hidden');
        }
      }

      if (labels === 'counts') {
        $buttons.forEach(($button) => {
          let network = $button.getAttribute('data-network');
          let value = counts['shares'][network] || 0;
          let label = st.formatNumber(value);
          if (label && value > min_count) {
            $button.querySelector('.st-label').innerHTML = label;
            st.removeClass($button, 'st-hide-label');
          } else {
            st.addClass($button, 'st-hide-label');
          }
        });
      }
    });
  }

  // fade in buttons
  if (fade_in) {
    st.addClass($el, 'st-animated');
    st.removeClass($el, 'st-hidden');
  }
};

module.exports = loader;
