import { Button, Input } from '@material-ui/core'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import MinimizeIcon from '@mui/icons-material/Minimize'

import AddIcon from '@mui/icons-material/Add'
import sliceHome from './sliceHome'

import './home.css'

const Home: React.FC = () => {
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState<string>('')
  const [increase, setIncreate] = useState<number>(1)

  const navigate = useNavigate()
  const handleToggelButton = () => {
    setIncreate(increase + 1)
  }
  const handleRemoveButton = () => {
    setIncreate(increase - 1)
  }

  const hanleInput = () => {
    dispatch(sliceHome.actions.homeAction(inputValue))
    setInputValue('')
  }

  return (
    <div>
      <Input
        placeholder="type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="contained" color="secondary" onClick={hanleInput}>
        dispatch
      </Button>
      <div className="icons">
        <AddIcon onClick={handleToggelButton} />

        <Button variant="contained" color="primary">
          {' '}
          {increase}{' '}
        </Button>
        <MinimizeIcon onClick={handleRemoveButton} />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/')}
        >
          {' '}
          Quay lại danh sách việc làm{' '}
        </Button>
      </div>
    </div>
  )
}

export default Home
