import React, { useState, useEffect } from 'react';

const AgeCalculator = () => {
    const [dob, setDOB] = useState('');
    const [ageAtDate, setAgeAtDate] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let day = currentDate.getDate();
        day = day < 10 ? `0${day}` : day;
        const formattedDate = `${year}-${month}-${day}`;
        setAgeAtDate(formattedDate);
    }, []);

    const handleInputChange = (e, type) => {
        if (type === 'dob') {
            setDOB(e.target.value);
        } else {
            setAgeAtDate(e.target.value);
        }
    }

    const handleCalculateAge = (e) => {
        e.preventDefault();
        const dobDate = new Date(dob);
        const ageAtDateDate = new Date(ageAtDate);
    
        if (!isNaN(dobDate.getTime()) && !isNaN(ageAtDateDate.getTime())) {
          const diffTime = Math.abs(ageAtDateDate - dobDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          const years = Math.floor(diffDays / 365);
    
          setAge(years);
          console.log(years);
        } else {
          alert('Please enter valid dates!');
        }
    };

    return (
        <div className="px-[0.4rem] py-[3rem] w-full h-auto min-h-[100vh] flex justify-center bg-[#151515]" style={{fontFamily: '"DM Mono", monospace'}}>
            <form onSubmit={handleCalculateAge} className="flex flex-row items-end gap-[0.6rem] h-[100px]">
                <div className="flex flex-col gap-[0.4rem]">
                    <label htmlFor="birth-date" className="text-[#aaa] text-[1.2rem] font-[500]">Date of Birth:</label>
                    <input value={dob} onChange={(e) => handleInputChange(e, 'dob')} id="birth-date" type="date" className="text-[#fff] text-[1.1rem] bg-[#212121] px-[0.8rem] py-[0.4rem] w-[280px] border-none outline-none rounded-md"/>
                </div>
                <div className="flex flex-col gap-[0.4rem]">
                    <label htmlFor="age-at-the-date" className="text-[#aaa] text-[1.2rem] font-[500]">Age at the date of:</label>
                    <input value={ageAtDate} onChange={(e) => handleInputChange(e, 'ageAt')} id="age-at-the-date" type="date" className="text-[#fff] text-[1.1rem] bg-[#212121] px-[0.8rem] py-[0.4rem] w-[280px] border-none outline-none rounded-md"/>
                </div>
                <button className="px-[0.8rem] text-[#fff] text-[1.1rem] font-[500] h-[42px] bg-[seagreen] rounded-md">Calculate</button>
            </form>
        </div>
    );
}

export default AgeCalculator;