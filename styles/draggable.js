import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#sortable': {
    'color': 'snow',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  '#sortable choices': {
    'backgroundColor': '#ff4747',
    'borderRadius': '5px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ce0404' }],
    'fontSize': [{ 'unit': '%V', 'value': 1.2 }]
  },
  '#sortable choices:hover': {
    'backgroundColor': '#ce0404'
  },
  '#sortable fieldset': {
    'textAlign': 'center'
  }
});
