import { useEffect, useState } from 'react';
import StockRow from './StockRow/StockRow';
import logo from './logo.svg';
//import bootstrap 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import getData, { getStockData } from './StockRow/api';
function App() {
  //create usestate for the stock
  const [stocks, setStocks] = useState([])
  // get a api call to get the stock data
  useEffect(() => {
    getData().then((data) => {
      setStocks(data);
    });
  }, []);
console.log("data",stocks);
  return (
    <div className="container">
      <h1>StockRow Component</h1>
     
     display stock data using cards
      <div className="row">
        {stocks.map((stock) => (
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{stock.identifier}</h5>
                <p className="card-text">{stock.dayHigh}</p>
                <p className="card-text">{stock.dayLow}</p>
                <p className="card-text">{stock.symbol}</p>
                <p className="card-text">{stock.pChange > 0 ?
                 <span className="text-success">{stock.pChange}%</span> : 
                 <span className="text-danger">{stock.pChange}%</span>}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      
   
    




      
        

     

      <StockRow />
    </div>
  );
}

export default App;
