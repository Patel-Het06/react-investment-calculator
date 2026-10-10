export default function UserInput({ onChange, userInput }) {



    return (
        <section id="user-input">
            <div className="input-group">
                <label>Initial Investment </label>
                <input type="number"
                    value={userInput.initialInvestment}
                    onChange={(event) => onChange('initialInvestment', event.target.value)} />

                <label >Annual Investment</label>
                <input type="number"
                    value={userInput.annualInvestment}
                    onChange={(event) => onChange('annualInvestment', event.target.value)} />
            </div>

            <div className="input-group">
                <label> Expected Return </label>
                <input type="number"
                    value={userInput.expectedReturn}
                    onChange={(event) => onChange('expectedReturn', event.target.value)} />

                <label> Duration </label>
                <input type="number"
                    value={userInput.duration}
                    onChange={(event) => onChange('duration', event.target.value)} />
            </div>

        </section>
    )
}