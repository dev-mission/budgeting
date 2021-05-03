import {Link} from 'react-router-dom';
function NewBudget (){
    return (
        <div>
            Step 1
            New Budget<br></br>
            <Link className="btn btn-primary" to="/setup/goal">Arrow</Link>
        </div>
    );
}

export default NewBudget;