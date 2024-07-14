export function UserInput({inputValue , changeHandler}) {

    console.log(inputValue);
    console.log(inputValue.initialInvestment);

    return (

        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required 
                    value={inputValue.initialInvestment} 
                    onChange={(event) => changeHandler("initialInvestment", event.target.value)}>
                    </input>
                    
                </p>
                
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required
                    value={inputValue.annualInvestment} 
                    onChange={(event) => changeHandler("annualInvestment", event.target.value)}></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required
                    value={inputValue.expectedReturn} 
                    onChange={(event) => changeHandler("expectedReturn", event.target.value)}></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required
                    value={inputValue.duration} 
                    onChange={(event) => changeHandler("duration", event.target.value)}></input>
                </p>
            </div>
        </section>
    );

}