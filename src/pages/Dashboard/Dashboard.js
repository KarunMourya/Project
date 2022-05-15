function Dashboard(){
    return (
        <div className="user_dashboard">
            <div className="middle_container">
                <div className="heading">
                    <p className="greeting">Morning</p>
                    <h3 className="name">Hi, Karun</h3>
                </div>
                <div className="Pending">
                    <h4 className="title">Pending</h4>
                    <div className="Message">
                        <div className="left">
                            <p>Created At:</p>
                            <p>12.03 20/05/2022</p>
                            <p>Time left : 01.20.04</p>
                            <button>Cancel</button>
                            <button>View</button>
                        </div>
                        <div className="right">
                            <img src="https://image.shutterstock.com/image-photo/word-demo-appearing-behind-torn-260nw-1782295403.jpg" alt="Not found" />
                        </div>
                    </div>
                </div>
                <div className="Waiting">
                    <h4 className="title">Waiting for acknowlegment</h4>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;