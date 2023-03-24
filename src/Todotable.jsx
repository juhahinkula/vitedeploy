function Todotable({ rows }) {
  return(
    <table>
      <tbody> 
        {
          rows.map((todo, index) => 
            <tr key={index}><td>{todo}</td></tr>)
        }
      </tbody>
    </table>
  );
}

export default Todotable;