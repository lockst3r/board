/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react'
//import Icon from '@material-ui/core/Icon'
import TrelloButton from '../TrelloButton'
import { connect } from 'react-redux'
import { addCard } from '../../stores/actions/cardsActions'
import { addList } from '../../stores/actions/listsActions'
import TrelloForm from '../TrelloForm'
import TrelloOpenForm from '../TrelloOpenForm'
import { makeStyles} from '@material-ui/core'
//import { ReportOutlined } from '@material-ui/icons'


const useStyles = makeStyles({

})

const TrelloCreate = ({ listID, list, addList }) => {
  const [formOpen, setFormOpen] = React.useState(false)
  const [text, setText] = React.useState('')

  const openForm = () => {
    setFormOpen(true)
  }

  const closeForm = () => {
    setFormOpen(false)
  }

  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  const handleAddList = () => {
    if (text) {
      setText('')
      addList(text)
    }

    return
  }

  const handleAddCard = () => {
    if (text) {
      setText('')
      addCard(listID, text)
    }
  }


  return formOpen ? (
    <TrelloForm
      text={text}
      onChange={handleInputChange}
      closeForm={closeForm}
      list={list}
    >
      <TrelloButton onClick={list ? handleAddList : handleAddCard}>
        {list ? 'Add List' : 'Add Card'}
      </TrelloButton>
    </TrelloForm>
  ) : (
    <TrelloOpenForm list={list} onClick={openForm}>
      {list ? 'Add another list' : 'Add another card'}
    </TrelloOpenForm>
  )
}

const mapDispatch = {
  addList,
}

export default connect(null, mapDispatch)(TrelloCreate)
