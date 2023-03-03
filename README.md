使用者登入系統
====
使用node.js + express並使用MongoDB作為資料庫的使用者登入系統

專案畫面
---
![image](https://github.com/CHUCHUDAN/user-login/blob/main/public/img/index.png)
-------
![image](https://github.com/CHUCHUDAN/user-login/blob/main/public/img/welcome.png)
-------
![image](https://github.com/CHUCHUDAN/user-login/blob/main/public/img/error.png)
-------
Features - 產品功能
-----
1.使用者可以根據loginSeeder.js中的使用者資料登入。

2.前端會判斷是否符合email格式以及是否有填入資訊，如果沒有會跳出警告提示。

3.後端會判斷帳密是否正確如果不正確會顯示帳密錯誤。

4.一旦登入成功後端會將cookie儲存在使用者的瀏覽器中，之後使用者只要點擊dashboard都能直接登入。

5.沒有成功登入的狀態下點擊dashboard會跳回loginPage頁面。

Environment SetUp - 環境建置
-----
1. [Node.js](https://nodejs.org/en/)
2. [MongoDB](https://www.mongodb.com/)

Installing - 專案安裝流程
----
1.打開你的 terminal，Clone 此專案至本機電腦

    git clone https://github.com/CHUCHUDAN/user-login.git
    
2.開啟終端機(Terminal)，進入存放此專案的資料夾

    cd user-login
    
3.安裝 express 套件

    在 Terminal 輸入 npm i express 指令
    
4.安裝nodemon套件
    
    在 Terminal 輸入 npm install nodemon 指令
    
5.請自行新增.env檔案放置與資料庫MongoDB連線相關資料

    MONGODB_URI= "您的MongoDB連線資訊"
    
6.啟動伺服器
  
    在 Terminal 輸入 npm run dev 指令
    
7.當 terminal 出現以下字樣，表示伺服器啟動成功並與資料庫連線成功

    The web is listening on http://localhost:3000
    Mongodb connected!
    
8.如需使用種子資料請輸入指令

    在 Terminal 輸入 npm run seed 指令，因為信箱資料有設定維一值所以種子資料無法重複植入，如需植入請先刪除再植入
    
Contributor - 專案開發人員
-----
[Daniel Chu](https://github.com/CHUCHUDAN)
