import "./styles.css";

const clickAdd = () => {
  // テキストボックスの値を取得し、値を初期化する
  const textInput = document.getElementById("text_add").value;
  // 入力したものが残るのを防ぐため
  document.getElementById("text_add").value = "";

  createI_completeList(textInput);
};

// 未完了リストから指定の要素を削除
// 削除するターゲットは色々あるので引数に渡す
const d_FromIncomplete = (target) => {
  document.getElementById("i_complete_list").removeChild(target);
};

// 未完了リストに追加する関数
const createI_completeList = (text) => {
  // divの生成
  // createElementはタグの生成に
  const div = document.createElement("div");
  // class名の付与
  div.className = "list_row";

  // liタグの生成
  const li = document.createElement("li");
  // liタグの中に入力した値を付与
  li.innerText = text;

  // 完了ボタンの生成
  const c_Button = document.createElement("button");
  c_Button.innerText = "完了";
  c_Button.addEventListener("click", () => {
    // 未完了リストにある値を完了ボタンを押したら削除する
    d_FromIncomplete(c_Button.parentNode);
    // 完了リストに追加する要素
    // 親要素の追加
    const addTarget = c_Button.parentNode;
    // 完了ボタンを押した値のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化する
    addTarget.textContent = null;

    // liタグを作成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタンの作成
    const b_Button = document.createElement("button");
    b_Button.innerText = "戻す";
    b_Button.addEventListener("click", () => {
      // 完了したTODOを削除
      const d_target = b_Button.parentNode;
      document.getElementById("complete").removeChild(d_target);

      // 完了したTODOのテキストを取得
      const text = d_target.firstChild.innerText;
      createI_completeList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(b_Button);

    //　完了リストに追加
    document.getElementById("complete").appendChild(addTarget);

    // const d_target = c_Button.parentNode;
    // document.getElementById("i_complete_list").removeChild(d_target);
  });

  // 削除ボタンの生成
  const d_Button = document.createElement("button");
  d_Button.innerText = "削除";
  d_Button.addEventListener("click", () => {
    // 押された削除ボタンの親タグを削除未完呂リストから
    d_FromIncomplete(d_Button.parentNode);
    // const d_target = d_Button.parentNode;
    // console.log(d_target);
    // document.getElementById("i_complete_list").removeChild(d_target);
  });

  // divタグの子要素に書く要素を設定
  div.appendChild(li);
  div.appendChild(c_Button);
  div.appendChild(d_Button);

  // 未完了のリストに追加
  document.getElementById("i_complete_list").appendChild(div);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => clickAdd());
