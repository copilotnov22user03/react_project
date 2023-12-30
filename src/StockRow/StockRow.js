import React from 'react';
const StockRow = () => {
  return (
    <div>
        {/* <h1>StockRow Component</h1> */}
        <table>
            <tr>
            <th>Stack</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Value</th>
            <th>Gain/Loss</th>
            </tr>
            <tr>
            <td>Apple</td>
            <td>100</td>
            <td>10</td>
            <td>1000</td>
            <td>100</td>
            </tr>
            <tr>
            <td>Google</td>
            <td>200</td>
            <td>10</td>
            <td>2000</td>
            <td>200</td>
            </tr>
            <tr>
            <td>Microsoft</td>
            <td>300</td>
            <td>10</td>
            <td>3000</td>
            <td>300</td>
            </tr>
        </table>
       

           
                 
                    
       

    </div>
  );
};



export default StockRow;
