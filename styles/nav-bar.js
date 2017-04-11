import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'container-fluid': {
    'zIndex': '1',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'backgroundColor': '#1d66a3',
    'position': 'fixed'
  },
  'container-fluid navbar': {
    'borderRadius': '0px',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }],
    'color': 'snow'
  },
  'container-fluid navbar dropdown-toggle': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'white' }],
    'color': 'snow',
    'backgroundColor': '#1d66a3',
    'fontSize': [{ 'unit': '%V', 'value': 1.2 }]
  },
  'container-fluid navbar dropdown-toggle:hover': {
    'color': '#1d66a3',
    'backgroundColor': 'snow'
  },
  'container-fluid navbar div h1': {
    'color': 'snow',
    'fontSize': [{ 'unit': '%V', 'value': 4 }],
    'position': 'relative',
    'bottom': [{ 'unit': 'px', 'value': 2 }]
  }
});
