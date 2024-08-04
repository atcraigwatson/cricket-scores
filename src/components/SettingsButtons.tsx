
// Two buttons in the header to open the off canavs.
export default function SettingsButtons() {
  return (
    <div className="border-bottom">
      <button className="btn btn-sm btn-dark text-center rounded-0" data-bs-toggle="offcanvas" data-bs-target="#offCanvas" aria-controls="offcanvasExample">Game Settings</button>
      <button className="btn btn-sm btn-dark text-center rounded-0" data-bs-toggle="offcanvas" data-bs-target="#offCanvas" aria-controls="offcanvasExample">Team Settings</button>
    </div>
  )
}