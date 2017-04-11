import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'container': {
    'paddingTop': [{ 'unit': 'px', 'value': 120 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  'container row btn-custom': {
    'backgroundColor': '#1d66a3',
    'padding': [{ 'unit': 'px', 'value': 22 }, { 'unit': '%H', 'value': 0.04 }, { 'unit': 'px', 'value': 22 }, { 'unit': '%H', 'value': 0.04 }],
    'borderRadius': '5px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'darkred' }],
    'cursor': 'pointer',
    'textAlign': 'center',
    'fontSize': [{ 'unit': '%V', 'value': 2 }],
    'color': 'snow',
    'zIndex': '1'
  },
  'container row btn-custom well': {
    'backgroundColor': '#ff4747'
  },
  'container row btn-custom:hover': {
    'backgroundColor': '#ff4747'
  },
  'container row btn-custom:active': {
    'backgroundColor': '#ce0404'
  },
  'btn-small': {
    'backgroundColor': '#1d66a3',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'darkred' }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'borderRadius': '2px',
    'color': 'snow',
    'fontSize': [{ 'unit': '%V', 'value': 1.2 }]
  },
  'btn-small:hover': {
    'backgroundColor': '#ff4747'
  },
  'btn-small:active': {
    'backgroundColor': '#ce0404'
  },
  'transition': {
    'transition': '300ms'
  },
  'none': {
    'visibility': 'visible',
    'transition': '300ms'
  },
  'visible': {
    'visibility': 'visible'
  },
  'faded': {
    'opacity': '.5'
  },
  'unfaded': {
    'opacity': '1'
  },
  'empty-space': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'remove-left-padding': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'space': {
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  }
});
