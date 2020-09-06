interface CustomFontGuideTypes {
  fontWeight?: 'light' | 'regular' | 'medium' | 'semiBold' | 'bold' | undefined;
  fontSize?:
    | 'small'
    | 'extraSmall'
    | 'regular'
    | 'extraRegular'
    | 'medium'
    | 'extraMedium'
    | 'high'
    | 'extraHigh'
    | undefined;
  color?: string | 'black';
}

export type FontGuideTypes = CustomFontGuideTypes;

export const getFontSize = (fontSize: FontGuideTypes['fontSize']): string => {
  switch (fontSize) {
    case 'small':
      return '0.9em';
    case 'extraSmall':
      return '0.6em';
    case 'regular':
      return '1.1em';
    case 'extraRegular':
      return '1.3em';
    case 'medium':
      return '1.5em';
    case 'extraMedium':
      return '1.8em';
    case 'high':
      return '2.2em';
    case 'extraHigh':
      return '2.4em';
    default:
      return '3.0em';
  }
};

export const getFontWeight = (
  fontWeight: FontGuideTypes['fontWeight']
): any => {
  switch (fontWeight) {
    case 'light':
      return {
        'font-weight': 100,
        'font-family': 'Sofia Light'
      };
    case 'regular':
      return {
        'font-weight': 300,
        'font-family': 'Sofia Regular'
      };
    case 'medium':
      return {
        'font-weight': 500,
        'font-family': 'Sofia Medium'
      };
    case 'semiBold':
      return {
        'font-weight': 700,
        'font-family': 'Sofia Semi Bold'
      };
    case 'bold':
      return {
        'font-weight': 900,
        'font-family': 'Sofia Bold'
      };
    default:
      return {
        'font-weight': 100,
        'font-family': 'Sofia Light'
      };
  }
};
