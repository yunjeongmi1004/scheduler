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
            <button type="button" class="logout" aria-label="로그아웃"></button>
            <div class="month_header">
                <button type="button" class="btn rdgrey">팀원 일정 보기</button>
                <div class="month_move">
                    <button type="button" class="year">2023년</button>
                    <div class="inner">
                        <button type="button" class="month">1월</button>
                        <button type="button" class="month">2월</button>
                        <button type="button" class="month">3월</button>
                        <button type="button" class="month">4월</button>
                        <button type="button" class="month">5월</button>
                        <button type="button" class="month">6월</button>
                        <button type="button" class="month">7월</button>
                        <button type="button" class="month">8월</button>
                        <button type="button" class="month">9월</button>
                        <button type="button" class="month">10월</button>
                        <button type="button" class="month active">11월</button>
                        <button type="button" class="month">12월</button>
                    </div>
                    <button type="button" class="year">2025년</button>
                </div>
            </div>
            <div class="month_body">
                <div class="monthly_calendar">
                    <div class="date">
                        <strong>1</strong>
                        <button>20</button>
                    </div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date today">
                        <strong>1</strong>
                        <button>20</button>                     
                    </div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                    <div class="date"></div>
                </div>
            </div>
        </section>

    </main>

</body>