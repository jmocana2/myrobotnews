const opinionatedRules = {
  body: {
    margin: '0',
  },

  [`a:active,
  a:hover`]: {
    'outline-width': '0',
  },

  [`button,s
  input,
  optgroup,
  select,
  textarea`]: {
    'font-size': '100%',
    'line-height': '1.15',
  },
};

const unopinionatedRules = {
  html: {
    'line-height': '1.15',
    '-ms-text-size-adjust': '100%',
    '-webkit-text-size-adjust': '100%',
  },

  [`article,
  aside,
  footer,
  header,
  nav,
  section`]: {
    display: 'block',
  },

  [`figcaption,
  main`]: {
    display: 'block',
  },

  figure: {
    margin: '0',
    display: 'inherit',
  },

  hr: {
    'box-sizing': 'content-box',
    height: '0',
    overflow: 'visible',
  },

  pre: {
    'font-family': 'monospace, monospace',
    'font-size': '1em',
  },

  a: {
    'background-color': 'transparent',
    '-webkit-text-decoration-skip': 'objects',
  },

  'abbr[title]': {
    'border-bottom': 'none',
    'text-decoration': 'underline',
  },

  [`b,
  strong`]: {
    'font-weight': 'inherit',
  },

  [`code,
  kbd,
  samp`]: {
    'font-family': 'monospace, monospace',
    'font-size': '1em',
  },

  dfn: {
    'font-style': 'italic',
  },

  mark: {
    'background-color': '#ff0',
    color: '#000',
  },

  [`sub,
  sup`]: {
    'line-height': '0',
    position: 'relative',
    'vertical-align': 'baseline',
  },

  [`audio,
  video`]: {
    display: 'inline-block',
  },

  'audio:not([controls])': {
    display: 'none',
    height: '0',
  },

  img: {
    'border-style': 'none',
  },

  'svg:not(:root)': {
    overflow: 'hidden',
  },

  [`button,
  input,
  optgroup,
  select,
  textarea`]: {
    margin: '0',
  },

  [`button,
  input`]: {
    overflow: 'visible',
    padding: '0',
  },

  [`button,
  select`]: {
    'text-transform': 'none',
  },

  [`button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner`]: {
    'border-style': 'none',
    padding: '0',
  },

  [`button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring`]: {
    outline: '1px dotted ButtonText',
  },

  fieldset: {
    border: '0',
  },

  legend: {
    'box-sizing': 'border-box',
    color: 'inherit',
    display: 'table',
    'max-width': '100%',
    padding: '0',
    'white-space': 'normal',
  },

  progress: {
    display: 'inline-block',
    'vertical-align': 'baseline',
  },

  textarea: {
    overflow: 'auto',
  },

  [`[type="checkbox"],
  [type="radio"]`]: {
    'box-sizing': 'border-box',
    padding: '0',
  },

  [`[type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button`]: {
    height: 'auto',
  },

  '[type="search"]': {
    '-webkit-appearance': 'textfield',
    'outline-offset': '-2px',
  },

  [`[type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration`]: {
    '-webkit-appearance': 'none',
  },

  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button',
    font: 'inherit',
  },

  [`details,
  menu`]: {
    display: 'block',
  },

  summary: {
    display: 'list-item',
  },

  canvas: {
    display: 'inline-block',
  },

  template: {
    display: 'none',
  },

  '[hidden]': {
    display: 'none',
  },
};

function mergeRules(baseRules, additionalRules) {
  const mergedRules = { ...baseRules };
  Object.keys(additionalRules).forEach(key => {
    if (mergedRules[key]) {
      mergedRules[key] = {
        ...mergedRules[key],
        ...additionalRules[key],
      };
    } else {
      mergedRules[key] = {
        ...additionalRules[key],
      };
    }
  });
  return mergedRules;
}

function normalize(excludeOpinionated) {
  return excludeOpinionated
    ? unopinionatedRules
    : mergeRules(unopinionatedRules, opinionatedRules);
}

export default normalize;
