export const styles = {
  myButton: {
    color: 'green',
    display: 'block',
    margin: '10px 20px 5px 4px',
    '& span': {
      // jss-nested applies this to a child span
      fontWeight: 'bold' // jss-camel-case turns this into 'font-weight'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }
}