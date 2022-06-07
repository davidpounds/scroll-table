import './App.css';
import tableData from './tabledata';
import Input from './Input';

function App() {
  const { header, data } = tableData;
  return (
    <div className="App">
      <h1>Scolling table demo</h1>
      <div className="table-scroller">
        <table>
          <thead>
            <tr>
              {header.map(th => <th key={th}>{th}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((tr, idx) => (
              <tr key={idx}>
                {tr.map(td => {
                  const id = td.replace(/[^a-z0-9]/gi, '').toLowerCase();
                  return (
                    <td key={id}>
                      <Input label={td} id={id} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
