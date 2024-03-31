import './modal.css'


export default function Modal({ id, header, body, footer, onClose }) {
    const bodyItem = <div><h1>This is default body</h1><h3>New Header</h3>
    <h4>header 4</h4><a href="https://www.google.com">click here to continue</a></div>
  return (
    <div id={id || "Modal"} className="modal">
      <div className="content">
        <div className="header">
          <span onClick={onClose} className="close-modal-icon">&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? body : bodyItem}
        </div>
        <div className="footer">
        <h2> {footer ? footer : "Footer"}</h2>
        </div>
      </div>
    </div>
  );
}
