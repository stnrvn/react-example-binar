import logo from './logo.svg'
import './App.css'
import MyNavbar from './components/Navbar'
import {
  AddModal,
  EditModal
} from './components/Forms'
import { useState } from 'react'

function App() {
  const [showAddModal, setAddShowModal] = useState(false)
  const [data, setData] = useState([
    {
      username: 'user 1',
      email: 'user1@gmail.com',
      experience: 'user',
      level: 30
    },
    {
      username: 'user 2',
      email: 'user2@gmail.com',
      experience: 'user',
      level: 30
    },
    {
      username: 'user 3',
      email: 'user3@gmail.com',
      experience: 'user',
      level: 30
    }
  ])

  const handleAddModal = () => {
    setAddShowModal(!showAddModal)
  }

  const handleSubmitAdd = (username, email, experience, level) => {
    let rawData = data

    let payload = {
      username,
      email,
      experience,
      level
    }

    rawData.push(payload)

    setData(rawData)
    setAddShowModal(!showAddModal)
  }

  return (
    <>
    <MyNavbar/>
    <AddModal
      show={showAddModal}
      handleAddModal={handleAddModal}
      handleSubmitAdd={handleSubmitAdd}
    />
    <div className="container">
        <div className="row mt-3">
          <div className="col-lg-4">
            <button type="button" class="btn btn-primary" onClick={handleAddModal}>Tambah Data</button>
          </div>
          <div className="col-lg-4">test</div>
          <div className="col-lg-4">test</div>
        </div>

        {
          data?.map((data, index) => {
            return(
              <>
                <div className="row text-center mt-5">
                  <p>username: {data.username}</p>
                  <p>email: {data.email}</p>
                  <p>experience: {data.experience}</p>
                  <p>level: {data.level}</p>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
