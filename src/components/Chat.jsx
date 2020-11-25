

function Chat() {
      return (
        <div className="chat">
            <div className="chat-users">
            Комната: <b>1</b>
            <hr />
            <b>Онлайн (1):</b>
            <ul>
        
                <li>User</li>
            </ul>
            </div>
            <div className="chat-messages">
            <div className="messages">
                
                <div className="message">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                    </div>
              </div>
          </div>
          <form>
            <textarea
              className="form-control"
              rows="5"></textarea>
            <button type="button" className="btn btn-primary">
              Отправить
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Chat;