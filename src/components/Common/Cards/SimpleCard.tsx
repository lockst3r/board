import * as React from 'react'
import { CardProps, Card, CardContent, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
  },
})

const _SimpleCard = (props: CardProps) => {
  const classes = useStyles()
  const { children, ...otherProps } = props
  return (
    <Card {...otherProps}>
      <CardContent className={classes.cardContent}>{children}</CardContent>
    </Card>
  )
}

export const SimpleCard = React.memo(_SimpleCard)
