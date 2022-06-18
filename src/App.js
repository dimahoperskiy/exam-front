import logo from './logo.svg';
import './App.css';

const handleClick = async () => {
    const login = document.getElementById('text-1647104035673').value
    const password = document.getElementById('text-1647104078840').value
    console.log(login)
    console.log(password)
    if (!login) {
        alert('логин не может быть пустым')
    }
    if (!password) {
        alert('пароль не может быть пустым')
    }

    const res = {
        login,
        password
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(res);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    let ans = await fetch("http://localhost:3000/server", requestOptions)
    let js = await ans.json()
    console.log(js)
    // console.log(js)
    alert(js.result)

}

function App() {
  return (
    <div className="App">
      <div className="formbuilder-text form-group field-text-1647104035673">
        <label htmlFor="text-1647104035673" className="formbuilder-text-label">Логин</label>
        <input type="text" placeholder="" className="form-control" name="text-1647104035673"
               access="false" id="text-1647104035673"/>
      </div>
      <div className="formbuilder-text form-group field-text-1647104078840">
        <label htmlFor="text-1647104078840" className="formbuilder-text-label">Пароль</label>
        <input type="password" placeholder="" className="form-control" name="text-1647104078840" access="false"
               id="text-1647104078840"/>
      </div>
        <div onClick={handleClick}>Отправить</div>
    </div>
  );
}

export default App;
