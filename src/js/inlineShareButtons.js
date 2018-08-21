
const utils = require("./utils.js");
const ICONS = require("./ICONS.js");
const COLORS = require("./COLORS.js");
const i18n = require("./i18n.js");

function loader(config = {}) {
  
  console.log(config);

  let {alignment, fade_in, font_size, labels, language, id, url, padding, radius, size, show_total, spacing, networks} = config;

  language = language || 'en';
  alignment = alignment || 'left';
  fade_in = fade_in || 'true';
  font_size = font_size || 12;
  padding = padding || 10;
  radius = radius || 0;
  size = size || 40;
  spacing = spacing || 8;

  console.log(id);

  const $el = document.getElementById(id);
  console.log($el);

  // update class names
  utils.addClass($el, [
    `st-${alignment}`,
    language !== 'en' ? `st-lang-${language}` : void 0,
    labels in ['counts', 'cta'] ? `st-has-labels` : void 0,
    fade_in ? `st-hidden` : void 0,
    `st-inline-share-buttons`
  ]);

    // append styling to dom
  let common_css = `
    ##{id} {
      ${utils.FONT_FAMILY};
      direction: ltr;
      display: block;
      opacity: 1;
      text-align: ${alignment};
      z-index: 94034;
    }
    ##{id}.st-animated {
      ${utils.TRANSITION('opacity')}
    }
    ##{id}.st-hidden {
      opacity: ${fade_in ? 0 : 1};
    }
    ##{id} .st-btn {
      ${utils.BORDER_BOX}
      ${utils.TRANSITION(['opacity', 'top'])}
      ${utils.BORDER_RADIUS(radius)}
      cursor: pointer;
      display: inline-block;
      font-size: ${utils.px(font_size)};
      height: ${utils.px(size)};
      line-height: ${utils.px(size)};
      margin-right: ${spacing ? utils.px(spacing) : 0};
      padding: 0 ${utils.px(padding)};
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
      height: ${utils.px(size / 2)};
      width: ${utils.px(size / 2)};
      position: relative;
      top: ${utils.px(size / 4)};
      vertical-align: top;
    }
    ##{id} .st-btn > img {
      height: ${utils.px(size / 2)};
      width: ${utils.px(size / 2)};
      position: relative;
      top: ${utils.px(size / 4)};
      vertical-align: top;
    }
    ##{id} .st-btn > span {
      ${utils.TRANSITION()}
      color: #fff;
      display: inline-block;
      font-weight: 500;
      letter-spacing: 0.5px;
      min-width: ${utils.px(30 + Math.floor(size * 15 / 16))};
      opacity: 1;
      padding: 0 6px;
      position: relative;
      vertical-align: top;
    }
    ##{id}.st-has-labels .st-btn {
      min-width: ${utils.px(60 + Math.floor(size * 15 / 8))};
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
      line-height: ${utils.px(.375 * size)};
      margin-right: 0;
      max-width: 80px;
      padding: 4px 8px;
      text-align: center;
    }
    ##{id} .st-total.st-hidden {
      display: none;
    }
    ##{id} .st-total > span {
      font-size: ${utils.px(.5 * size)};
      line-height: ${utils.px(.55 * size)};
      display: block;
      padding: 0;
    }
    ##{id} .st-total > span.st-shares {
      font-size: ${utils.px(.3 * size)};
      line-height: ${utils.px(.3 * size)};
    }
    ##{id}.st-justified {
      display: flex;
      text-align: center;
    }
    ##{id}.st-justified .st-btn {
      ${utils.FLEX}
    }
  `;

  let hover_css = `
    #${id} .st-btn:hover {
      opacity: .8;
      top: -4px;
    }
  `;

  let mobile_css = `
    #${id} {
      bottom: 0;
  `;

  let network_css = ((function() {
    let results;
    results = [];
    for (let i = 0; i < networks.length; i++) {
      let network = networks[i];
      results.push(`
        #${id} .st-btn[data-network='${network}'] {
        background-color: ${COLORS[network]};
      }`);
    }
    return results;
  })()).join('\n');

  // build final css
  let css = common_css;
  css += hover_css;
  css += network_css;
  utils.css(css);

  // generate button html
  let html = '';

  // generate html for total count
  if (show_total) {
    html += `
      <div class='st-total st-hidden'>
        <span class='st-label'></span>
        <span class='st-shares'>
          ${utils.capitalize(i18n['shares'][language])}
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
    let label = utils.getShareLabel(network, language);
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

};

module.exports = loader;
