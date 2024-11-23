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

<jsp:include page="../header.jsp"></jsp:include>
<body>
    <main>
        <h1>회원가입</h1>
        <section class="form">
           
          <div class="form-box">
            <strong>아이디</strong>
            <input type="text" id="id" value="" class="default-input">
            <p class="errmsg"></p>
            <input type="button" id="checkid" class="btn sm linegrey" value="아이디 중복 체크" name="dbidCheck" onclick="dbidCheck()">
            <input type="hidden" id="uncheckid" value="N">
          </div>
          <div class="form-box">
            <strong>비밀번호</strong>
            <input type="password" id="password" value="" class="default-input">
            <p class="errmsg"></p>
          </div>
          <div class="form-box">
            <strong>비밀번호 확인</strong>
            <input type="password" id="passwordCheck" value="" class="default-input">
            <p class="errmsg"></p>
          </div>
          <div class="form-box">
            <strong>이름</strong>
            <input type="text" id="name" value="" class="default-input">
            <p class="errmsg"></p>
          </div>
          <div class="form-box">
            <strong>이메일</strong>
            <input type="email" id="email" value="" class="default-input">
            <p class="errmsg"></p>
          </div>
          <div class="form-box">
            <strong>부서선택</strong>
            <select id="department">
              <option value=""></option>
              <option value="경영부">경영부</option>
              <option value="디자인부">디자인부</option>
            </select>
            <p class="errmsg"></p>
          </div>
          <div class="form-box">
            <strong>권한선택</strong>
            <select id="authority">
              <option value=""></option>
              <option value="팀장">팀장</option>
              <option value="팀원">팀원</option>
            </select>
            <p class="errmsg"></p>
          </div>
          <div class="btm-button">
            <input type="button" class="btn full green" value="회원가입" onclick="signupEvent()">
            <input type="button" class="btn full primary gapt10" value="로그인" onclick="loginPageEvent()">
          </div>

        </section>

    </main>

    <script src="../js/form.js"></script>

</body>