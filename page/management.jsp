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
    <main class="typescheduler">
        <section class="month_frame">
            <button type="button" class="calendar" aria-label="캘린더바로가기"></button>
            <div class="month_header">
                <button type="button" class="btn rdgrey">팀원 일정 보기</button>
                <div class="always">
                    <h1>20241116</h1>
                    <button type="button" class="btn rdgrey">일정 생성</button>
                </div>
            </div>
            <div class="daily_body">
                <div class="daily_box">
                    <ul>
                        <li>
                            <span class="time">9:00</span>
                            <span class="dailytx">데일리 스크럼</span>
                            <button type="button" class="btn dgrey sm">수정</button>
                            <button type="button" class="btn dgrey sm">삭제</button>
                        </li>
                        <li>
                            <span class="time">9:00</span>
                            <span class="dailytx">데일리 스크럼</span>
                            <button type="button" class="btn dgrey sm">수정</button>
                            <button type="button" class="btn dgrey sm">삭제</button>
                        </li>
                        <li>
                            <span class="time">9:00</span>
                            <span class="dailytx">데일리 스크럼</span>
                            <button type="button" class="btn dgrey sm">수정</button>
                            <button type="button" class="btn dgrey sm">삭제</button>
                        </li>
                        <li>
                            <span class="time">9:00</span>
                            <span class="dailytx">데일리 스크럼</span>
                            <button type="button" class="btn dgrey sm">수정</button>
                            <button type="button" class="btn dgrey sm">삭제</button>
                        </li>
                        <li>
                            <span class="time">9:00</span>
                            <span class="dailytx">데일리 스크럼</span>
                            <button type="button" class="btn dgrey sm">수정</button>
                            <button type="button" class="btn dgrey sm">삭제</button>
                        </li>
                        <li>
                            <span class="time">9:00</span>
                            <span class="dailytx">데일리 스크럼</span>
                            <button type="button" class="btn dgrey sm">수정</button>
                            <button type="button" class="btn dgrey sm">삭제</button>
                        </li>
                        <li>
                            <span class="time">9:00</span>
                            <span class="dailytx">데일리 스크럼</span>
                            <button type="button" class="btn dgrey sm">수정</button>
                            <button type="button" class="btn dgrey sm">삭제</button>
                        </li>
                        <li>
                            <span class="time">9:00</span>
                            <span class="dailytx">데일리 스크럼</span>
                            <button type="button" class="btn dgrey sm">수정</button>
                            <button type="button" class="btn dgrey sm">삭제</button>
                        </li>
                        <li>
                            <span class="time">9:00</span>
                            <span class="dailytx">데일리 스크럼</span>
                            <button type="button" class="btn dgrey sm">수정</button>
                            <button type="button" class="btn dgrey sm">삭제</button>
                        </li>
                        <li>
                            <span class="time">9:00</span>
                            <span class="dailytx">데일리 스크럼</span>
                            <button type="button" class="btn dgrey sm">수정</button>
                            <button type="button" class="btn dgrey sm">삭제</button>
                        </li>
                        <li>
                            <span class="time">9:00</span>
                            <span class="dailytx">데일리 스크럼</span>
                            <button type="button" class="btn dgrey sm">수정</button>
                            <button type="button" class="btn dgrey sm">삭제</button>
                        </li>

                        <li>
                            <span class="time">9:00</span>
                            <span class="dailytx">데일리 스크럼</span>
                            <button type="button" class="btn dgrey sm">수정</button>
                            <button type="button" class="btn dgrey sm">삭제</button>
                        </li>
                    </ul>
                </div>
                <div class="daily_form">
                    <div class="form-box">
                        <strong>일정</strong>
                        <input type="text" id="dailyplan" value="" class="default-input" placeholder="20자 이하로 입력하세요">
                        <p class="errmsg"></p>
                    </div>
                    <div class="form-box">
                        <strong>시간</strong>
                        <input type="number" id="dailytime" value="" class="default-input" placeholder="특수문자를 제외한 숫자만 입력하세요">
                        <p class="errmsg"></p>
                    </div>
                    <div class="btm-button">
                        <input class="btn full primary" type="button" value="일정 생성 확인" onclick="findidEvent()">
                      </div>
                </div>
            </div>

        </section>

    </main>

</body>