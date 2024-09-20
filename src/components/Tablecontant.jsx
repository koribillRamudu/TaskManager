function Tasklist(){
    return (
<div>
    <table border="1">
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Complete Project Report</td>
            <td>2024-09-25</td>
            <td>High</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>Study for JavaScript Interview</td>
            <td>2024-09-28</td>
            <td>Medium</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>Team Meeting Preparation</td>
            <td>2024-09-23</td>
            <td>Low</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    </table>
</div>

    );
}
export default Tasklist