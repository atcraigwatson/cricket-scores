
export default function OffCanvas() {
  return (
    <div className="offcanvas offcanvas-start" id="offCanvas" aria-labelledby="offcanvasExampleLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Team Settings</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <h5 className="mb-3">Home Team</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item p-0">
            <div className="input-group p-0">
              <span className="input-group-text"><i className="bi bi-arrow-down-up"></i></span>
              <span className="input-group-text">#1</span>
              <input type="text" className="form-control" placeholder="Players Full Name" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                <i className="bi bi-pencil-fill"></i>
              </button>
            </div>
          </li>
        </ul>
        <div className="d-flex justify-content-end mt-3">
          <button type="button" className="btn btn-secondary">Add Player</button>
        </div>
      </div>
      <div className="p-3 text-secondary fst-italic">
        Edit your team name and players here by clicking the <i className="bi bi-pencil-fill ms-2"></i> next to the team or player name.
      </div>
    </div>
  )
}