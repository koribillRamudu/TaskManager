

function Home() {
    return (
        <div>
            <div className="button-container">
                <button>Today</button>
                <button>Pending</button>
                <button>Overdue</button>
                <button>Completed</button>
                <button>All</button>
            </div>
            <input type="text" placeholder="Enter anything to search" />
        </div>
    );
}


export default Home