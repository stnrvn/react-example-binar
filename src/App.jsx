import logo from './logo.svg'
import './App.css'
import MyNavbar from './components/Navbar'
import {
  AddModal,
  EditModal,
  DeleteModal
} from './components/Forms'
import { useState } from 'react'

function App() {
  const [showAddModal, setAddShowModal] = useState(false)
  const [showEditModal, setEditShowModal] = useState(false)
  const [showDeleteModal, setDeleteShowModal] = useState(false)

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

  const [id, setId] = useState(null)

  const handleAddModal = () => {
    setAddShowModal(!showAddModal)
  }

  const handleEditModal = () => {
    setEditShowModal(!showEditModal)
  }

  const handleDeleteModal = (index) => {
    setId(index)
    setDeleteShowModal(!showDeleteModal)
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
    setAddShowModal(false)
  }

  const handleSubmitDelete = (idData) => {
    let temp = data.filter((data, i) => {
      return i !== idData
    })

    setData(temp)

    setDeleteShowModal(false)
  }

  return (
    <>
    <MyNavbar/>
    <AddModal
      show={showAddModal}
      handleAddModal={handleAddModal}
      handleSubmitAdd={handleSubmitAdd}
    />
    <DeleteModal
      id={id}
      show={showDeleteModal}
      handleDeleteModal={handleDeleteModal}
      handleSubmitDelete={handleSubmitDelete}
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
                  <p>
                    <button type="button" class="btn btn-primary" onClick={handleEditModal}>Edit Data</button>
                  </p>
                  <p>
                    <button type="button" class="btn btn-danger" onClick={() => handleDeleteModal(index)}>Delete Data</button>
                  </p>
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
