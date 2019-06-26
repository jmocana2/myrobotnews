export const styles = {
  myButton: {
    color: 'green',
    margin: {
      // jss-expand gives more readable syntax
      top: 5, // jss-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: '1rem',
    },
    '& span': {
      // jss-nested applies this to a child span
      fontWeight: 'bold', // jss-camel-case turns this into 'font-weight'
    },
  },
  myLink: {
    fontStyle: 'italic',
  },
};
