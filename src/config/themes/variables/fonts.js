import { css } from 'styled-components';

import openLight from '../../../assets/fonts/opensans-light-webfont.woff';
import openRegular from '../../../assets/fonts/opensans-regular-webfont.woff';
import openItalic from '../../../assets/fonts/opensans-italic-webfont.woff';
import openSemibold from '../../../assets/fonts/opensans-semibold-webfont.woff';
import openBold from '../../../assets/fonts/opensans-bold-webfont.woff';
import openExtrabold from '../../../assets/fonts/opensans-extrabold-webfont.woff';

const fonts = {
  light: '"OpenSans Light", Helvetica, Arial, sans-serif',
  regular: '"OpenSans Regular", Helvetica, Arial, sans-serif',
  italic: '"OpenSans Italic", Helvetica, Arial, sans-serif',
  semibold: '"OpenSans Semibold", Helvetica, Arial, sans-serif',
  bold: '"OpenSans Bold", Helvetica, Arial, sans-serif',
  extrabold: '"OpenSans Extrabold", Helvetica, Arial, sans-serif',
};

// Carga de las fuentes
const fontsFace = css` 
  @font-face { 
      font-family: 'OpenSans Light'; 
      src:  url('${openLight}');
      font-weight: 300;
  }
  @font-face { 
      font-family: 'OpenSans Regular'; 
      src:  url('${openRegular}');
      font-weight: 400;
  }
  @font-face { 
      font-family: 'OpenSans Italic'; 
      src:  url('${openItalic}');
      font-weight: 400;
      font-style: italic;
  }
  @font-face { 
      font-family: 'OpenSans Semibold'; 
      src:  url('${openSemibold}');
      font-weight: 600;
  }
  @font-face { 
      font-family: 'OpenSans Bold'; 
      src:  url('${openBold}');
      font-weight: 700;
  }
  @font-face { 
      font-family: 'OpenSans Extrabold'; 
      src:  url('${openExtrabold}');
      font-weight: 800;
  }
`;

export { fonts, fontsFace };
