import '../../css/adminHeader.css'

function Admin_Header() {

    return (
        <div>
            <div className="nav-bar">
                <div className="admin-title">
                    <h1><a href="/main">blog</a></h1>
                    <hr></hr>
                    <h5>Administrator님 환영합니다</h5>
                    <hr></hr>
                </div>
                <div className="admin-menu">
                    <ul>
                        <h3> 회원 관리 </h3>
                        <li>
                            <a href="/user">
                                사용자 목록
                            </a>
                        </li>
                        
                    </ul>
                    <ul>
                        <h3> 게시글 관리 </h3>
                        <li>
                            <a href="/board">
                                게시글 목록
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <h3> 댓글 관리 </h3>
                        <li>
                            <a href="/comment">
                                댓글 목록
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Admin_Header;