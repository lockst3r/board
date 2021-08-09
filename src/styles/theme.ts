import { Theme, createMuiTheme } from '@material-ui/core'
import createPalette from '@material-ui/core/styles/createPalette'
import { primary, secondary } from './colors'

const palette = createPalette({
  primary: {
    main: primary,
  },
  secondary: {
    main: secondary,
  },
})

export const theme: Theme = createMuiTheme({
  props: {
    MuiFormControl: {
      fullWidth: true,
    },
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
    },
    MuiSelect: {
      variant: 'outlined',
    },
    MuiTooltip: {
      enterDelay: 750,
      PopperProps: {
        placement: 'bottom-start',
      },
    },
  },
  palette: palette,
  overrides: {
    MuiSelect: {
      select: {
        minHeight: 20,
      },

      outlined: {
        borderRadius: 2,
        transition: '.1s',
        padding: '10px 35px 10px 10px',
      },
    },
  },
})
