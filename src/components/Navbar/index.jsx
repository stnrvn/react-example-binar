

const MyNavbar = () => {
  return(
    <>
      <nav className="nav" style={{ backgroundColor: 'green' }}>
        <a className="nav-link text-white active" aria-current="page" href="#">Active</a>
        <a className="nav-link text-white" href="#">Link</a>
        <a className="nav-link text-white" href="#">Link</a>
      </nav>
    </>
  )
}

export default MyNavbar