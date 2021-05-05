import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Calendar from "react-Calendar";

function NewSavingGoal (){
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };
    
    return (
        <div>
            <ul>
                <li>Step 0 Create Account</li>
                <li>Step 1 Determine Spending Budget</li>
                <li><b>Step 2 SetUp Saving Goals</b></li>
                <li>Step 3 Add Expense Categories</li>
            </ul>
            <div>
                <h1>Set Up a Saving Goal</h1>
                <p>Are you saving for a laptop? A vacation? A nice date? 
                    You can edit or add more saving goals later. </p>
            </div>
            <div>
                <b>What are you saving up for?</b>
                <input></input>
                <b>How much will it cost?</b>
                <input></input>
                <b>When do you want to reach your goal?</b>
                <Calendar showWeekNumbers onChange={onChange} value={date} />
            </div>
            <Link className="btn btn-primary" to="">ARROW</Link>
        </div>
    );
}
export default NewSavingGoal;