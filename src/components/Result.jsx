import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Result({ input }) {

    const resultsData = calculateInvestmentResults(input)

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th> Total Investment</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((resultData) => {

                    const totalInterest = resultData.valueEndOfYear - resultData.annualInvestment * resultData.year - input.initialInvestment
                    const totalInvestment = resultData.valueEndOfYear - totalInterest

                    return (
                        <tr key={resultData.year}>
                            <td>{resultData.year}</td>
                            <td>{formatter.format(resultData.valueEndOfYear)}</td>
                            <td>{formatter.format(resultData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalInvestment)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}