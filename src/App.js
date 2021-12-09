import './App.css';
import React, { useState, useEffect } from 'react';
import add from './img/add.png';
import check from './img/check.png';
import delete_button from './img/delete.png';
import pencil from './img/pencil.png';
import rec from './img/rec.png';
import confirm from './img/confirm.png';
import Pagination from "react-js-pagination";

function App() {
  const [contents, setContents] = useState([]);
  const [todo, setTodo] = useState('');
  const [key, setKey] = useState(0);
  const [modify, setModify] = useState('');
  const [page, setPage] = useState(1);
  const [pageListView, setPageListView] = useState([]);

  //페이지 선택하는 함수
  const handlePageChange = (page) => {setPage(page); pageList(page, contents) };
 
  // useEffect(() => {
  //   console.log(contents)
  // }, [contents])

//한 페이지에 보여줄 갯수 정하는 함수
  const pageList = (pageNum, list2) => {
    let arr2 = [];
    let last = pageNum * 5;
    let start = pageNum * 5 - 5

    list2.map((item, index) => {
      if (index < last && index >= start) {
        arr2.push(item)
      }
    })
    setPageListView(arr2)
  }

  // todolist 추가하는 함수
  const addContents = (a, b, c) => {
    if(todo==''){
      alert('할 일을 입력해주세요')
    }else {
      let obj = { id: key, content: todo, toggle: false, modify: false }
      let arr = [...contents]
      arr.push(obj)
      setContents(arr)
      pageList(Math.floor((arr.length-1)/5+1), arr)
      setPage(Math.floor((arr.length-1)/5+1))
      // setContents((origin) => [...origin,e])
      setTodo('')
      setKey((e) => e + 1);
    }
  }

  // toggle true, false 값 바꾸는 함수
  const changeToggle = (item) => {
    let arr = contents.map((x) => x.id == item.id ? { ...x, toggle: !x.toggle } : { ...x })
    setContents(arr)
    pageList(page,arr)
  }

  // todolist 삭제하는 함수
  const deleteContent = (item) => {
    let arr = contents.filter((x) => x.id != item.id)
    setContents(arr)
    pageList(page,arr)
  }

  // todolist  input창으로 수정하는 함수
  const modifyStatus = (item) => {
    let arr = contents.map((x) => x.id == item.id ? { ...x, modify: !x.modify } : { ...x })
    setContents(arr)
    pageList(page,arr)
    setModify(item.content)
  }

  // todolist  input값 저장하는 함수
  const modifyContent = (item) => {
    let arr = contents.map((x) => x.id == item.id ? { ...x, content: modify, modify: !x.modify } : { ...x })
    setContents(arr)
    pageList(page,arr)
  }


  // todolist 보여지는 함수
  const view_content = pageListView.map((item, index) => {
    return (
      <div key={index} className="content">
        <div className="check">
          <div className="check_img" onClick={() => { changeToggle(item); }}>
            {item.toggle == false ?
              <img src={rec} />
              :
              <img src={check} />
            }
          </div>
          {item.modify == false ?
            <ul>
              <li>{item.content}</li>
            </ul>
            :
            <ul id="modify_input_box">
              <input id="modify_input" onChange={(e) => { setModify(e.target.value) }} value={modify} />
            </ul>
          }
        </div>
        <div className="modify">
          {item.modify == false ?
            <div onClick={() => { modifyStatus(item); }}>
              <img id="pencil" src={pencil} />
            </div>
            :
            <div onClick={() => { modifyContent(item) }}>
              <img id="confirm" src={confirm} />
            </div>
          }
          <div onClick={() => { deleteContent(item) }}>
            <img src={delete_button} />
          </div>
        </div>
      </div>
    )
  })


  return (
    <div className="bg">
      <div className="todolist">
        <div className="list_box">
          <div className="title">
            <h1>TO DO LIST</h1>
          </div>
          <div className="add">
            <div className="input_box">
              <input value={todo} onChange={(e) => { setTodo(e.target.value) }} />
            </div>
            <div className="add_button" onClick={() => { addContents() }}>
              <img src={add} />
            </div>
          </div>
          <div className="body">
            {view_content}
          </div>
        </div>
        <Pagination
          activePage={page}
          itemsCountPerPage={5}
          totalItemsCount={contents.length}
          pageRangeDisplayed={3}
          onChange={handlePageChange}
          prevPageText={"‹"}
          nextPageText={"›"}
          firstPageText={'‹‹'}
          lastPageText={"››"}
        />
      </div>
    </div>
  );
}

export default App;
