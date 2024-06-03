import React, { useState, useEffect  } from 'react';
import './App.css';

function App() {
  const [category, setCategory] = useState('');
  const [year, setYear] = useState(2022);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handlePredict = async () => {
    
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ revenue_category: category, year: year })
      });

      if (!response.ok) {
        throw new Error('Failed to get prediction from server');
      }

      const data = await response.json();
      setPrediction(parseFloat(data.prediction).toFixed(3));
      setError(null);
    } catch (error) {
      console.error('Error:', error.message);
      setError('Failed to get prediction. Please try again.');
    }
    if (!category) {
      setError('Please select a revenue category.');
      return;
    }
  };

  return (
    <>
      <div className='full-viewport'>
        <div className='header'>
          <div></div>
          <nav className="main-navigation">
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">INDIVIDUALS</a></li>
              <li><a href="#">BUSINESSES & EMPLOYERS</a></li>
              <li><a href="#">CUSTOMS</a></li>
              <li><a href="#" style={{color: '#ff6600'}}>TAX PREDICTIONS</a></li>
              <li><a href="#">OTHER</a></li>
            </ul>
          </nav> 
        </div>
        {/*<div className='heading'>
        <h1 style={{color: 'white', fontSize: '1.5vw', fontFamily: 'verdana'}}>Revenue Services Lesotho Tax Prediction</h1>
        </div>*/}
        <div className='content'>
          <div className='card'>
                  <h1 style={{color: 'ghostwhite', fontSize: '2vw'}}>Predict Your Life</h1>
                  <div className="options-container">
                    <label>
                      Revenue Category:
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="">Select a revenue category</option>
                        <option value="1000 Taxes on income, profits and capital gains">1000 Taxes on income, profits and capital gains</option>
                        <option value="1100 Taxes on income, profits and capital gains of individuals">1100 Taxes on income, profits and capital gains of individuals</option>
                        <option value="1110 On income and profits of individuals">1110 On income and profits of individuals</option>
                        <option value="1120 On capital gains of individuals">1120 On capital gains of individuals</option>
                        <option value="1200 Taxes on income, profits and capital gains of corporates">1200 Taxes on income, profits and capital gains of corporates</option>
                        <option value="1210 On profits of corporates">1210 On profits of corporates</option>
                        <option value="1220 On capital gains of corporates">1220 On capital gains of corporates</option>
                        <option value="1300 Unallocable between 1100 and 1200">1300 Unallocable between 1100 and 1200</option>
                        <option value="2000 Social security contributions (SSC)">2000 Social security contributions (SSC)</option>
                        <option value="3000 Taxes on payroll and workforce">3000 Taxes on payroll and workforce</option>
                        <option value="5000 Taxes on goods and services">5000 Taxes on goods and services</option>
                        <option value="5100 Taxes on production, sale, transfer, etc">5100 Taxes on production, sale, transfer, etc</option>
                        <option value="5110 General taxes on goods and services">5110 General taxes on goods and services</option>
                        <option value="5111 Value added taxes">5111 Value added taxes</option>
                        <option value="5112 Sales tax">5112 Sales tax</option>
                        <option value="5113 Other (than value added and sales tax)">5113 Other (than value added and sales tax)</option>
                        <option value="5120 Taxes on specific goods and services">5120 Taxes on specific goods and services</option>
                        <option value="5130 Unallocable between 5110 and 5120">5130 Unallocable between 5110 and 5120</option>
                        <option value="5200 Taxes on use of goods and perform activities">5200 Taxes on use of goods and perform activities</option>
                        <option value="5300 Unallocable between 5100 and 5200">5300 Unallocable between 5100 and 5200</option>
                        <option value="6000 Taxes other than 1000, 2000, 3000, 4000 and 5000">6000 Taxes other than 1000, 2000, 3000, 4000 and 5000</option>
                        <option value="Corporate income tax">Corporate income tax</option>
                        <option value="Excise taxes collected on behalf of the SACU Common Revenue Pool">Excise taxes collected on behalf of the SACU Common Revenue Pool</option>
                        <option value="Gambling levy">Gambling levy</option>
                        <option value="Import duties collected on behalf of the SACU Common Revenue Pool">Import duties collected on behalf of the SACU Common Revenue Pool</option>
                        <option value="Mining and other royalties">Mining and other royalties</option>
                        <option value="Non-tax revenue: Fines, penalties and forfeits">Non-tax revenue: Fines, penalties and forfeits</option>
                        <option value="Non-tax revenue: Grants">Non-tax revenue: Grants</option>
                        <option value="Non-tax revenue: Interest and dividends">Non-tax revenue: Interest and dividends</option>
                        <option value="Non-tax revenue: Miscellaneous and unidentified revenue">Non-tax revenue: Miscellaneous and unidentified revenue</option>
                        <option value="Non-tax revenue: Other property income">Non-tax revenue: Other property income</option>
                        <option value="Non-tax revenue: Property income">Non-tax revenue: Property income</option>
                        <option value="Non-tax revenue: Rents and royalties">Non-tax revenue: Rents and royalties</option>
                        <option value="Non-tax revenue: Sales of goods and services">Non-tax revenue: Sales of goods and services</option>
                        <option value="Personal income tax">Personal income tax</option>
                        <option value="SACU revenue">SACU revenue</option>
                        <option value="Total non-tax revenue">Total non-tax revenue</option>
                        <option value="Total non-tax revenue excluding grants">Total non-tax revenue excluding grants</option>
                        <option value="Total tax and non-tax revenue">Total tax and non-tax revenue</option>
                        <option value="Total tax and non-tax revenue excluding grants">Total tax and non-tax revenue excluding grants</option>
                        <option value="Total tax revenue">Total tax revenue</option>
                        <option value="Total tax revenues not including social security contributions">Total tax revenues not including social security contributions</option>
                        <option value="VAT - Domestic (Gross)">VAT - Domestic (Gross)</option>
                        <option value="VAT - Domestic (Net)">VAT - Domestic (Net)</option>
                        <option value="VAT - Domestic (Refunds)">VAT - Domestic (Refunds)</option>
                        <option value="VAT on imports">VAT on imports</option>
                        <option value="Water royalties">Water royalties</option>
                        <option value="Withholding tax">Withholding tax</option>
                      </select>
                    </label>
                  </div>
                  <div className="years-container">
                    <label>
                      Year:
                      <input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(parseInt(e.target.value))}
                      />
                    </label>
                  </div>
                  <div className='btn-predict-con'>
                    <button className="predict-button" onClick={handlePredict}>Predict</button>
                  </div>
                  <div className = 'prediction-text'>
                    {prediction !== null && (
                        <p>Predicted Tax Value:   {prediction}</p>
                    )}
                    {error && <div className="error-message">{error}</div>}
                  </div>
          </div>
        </div>
        <div className='footer'></div>
      </div>
    </>
  );
}

export default App;



