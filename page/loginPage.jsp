<%@ page language="java" contentType="text/html" pageEncoding="utf-8" %>

<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.PreparedStatement" %>
<%@ page import="java.sql.ResultSet" %>

<%

    //db 통신
    // Connector파일 찾아오기, 에러가 난다면 커넥터 파일이 없음 / 디비를 설치 않았거나 / 디비 서버가 꺼져있음
    Class.forName("org.mariadb.jdbc.Driver");

    // db 서버에 연결
    Connection connect = DriverManager.getConnection("jdbc:mariadb://localhost:3306/web", "stageus", "1234" );


    // sql 준비
    String id = "SELECT id FROM member";
    PreparedStatement query = connect.prepareStatement(id);

    // sql 전송(SELECT 쓸떄는 다름)
    ResultSet result = query.executeQuery();

%>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" type="text/css" href="../css/style.css">
</head>
<body>
    <main class="typeform">
        <h1>로그인</h1>
        <section class="form">
          <div class="form-box">
            <strong>아이디</strong>
            <input type="text" id="idlogin" value="" class="default-input" placeholder="4자 이상 20자 이하 영문 or 숫자 or 영문+숫자 조합">
            <p class="errmsg"></p>
          </div>
          <div class="form-box">
            <strong>비밀번호</strong>
            <input type="password" id="password" value="" class="default-input" placeholder="4자이상 20자 이하 영문+숫자 필수 입력, 특수문자사용가능">
            <p class="errmsg"></p>
          </div>
          <div class="btm-button">
            <input class="btn full primary" type="button" value="로그인" onclick="loginEvent()">
            <div class="text-button">
              <input class="btn text" type="button" value="아이디 찾기" onclick="findidPageEvent()">
              <input class="btn text" type="button" value="비밀번호 찾기" onclick="findpwPageEvent()">
            </div>
            <hr aria-hidden="true" class="line" />
            <input class="btn full green" type="button" value="회원가입" onclick="signupPageEvent()">
          </div>
        </section>
    </main>
    <script src="../js/common.js"></script>
    <script src="../js/loginform.js"></script>

</body>