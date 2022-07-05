import { Button, Input } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import MinimizeIcon from '@mui/icons-material/Minimize'

import AddIcon from '@mui/icons-material/Add'
import sliceHome from './sliceHome'

import './home.css'
import axios from 'axios'

const Home: React.FC = () => {
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState<string>('')
  const [increase, setIncreate] = useState<number>(1)
  const [isAdd, setIsAdd] = useState<boolean>(false)
  const [id, setId] = useState<number>(0)

  const [posts, setPosts] = useState<string[]>([])
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://js-post-api.herokuapp.com/api/products',
    }).then(function (res) {
      // console.log(res.data)

      setPosts(res.data)
    })
  }, [])

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
  const hanleInfor = () => {
    setIsAdd(!isAdd)
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
        <Button
          onClick={hanleInfor}
          className="icons"
          variant="contained"
          color="secondary"
        >
          Add
        </Button>
      </div>

      <div>
        {isAdd &&
          posts.map((post: string) => {
            return (
              <img
                onClick={() => {
                  console.log(post.id)
                  setId(post.id)
                  dispatch(sliceHome.actions.productDetail({ id: post.id }))
                }}
                key={post.index}
                src={post.images[0]}
                alt="hình ảnh"
              />
            )
          })}
      </div>
    </div>
  )
}

export default Home
