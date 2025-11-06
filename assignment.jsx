import React from "react";

function App() {
  return (
    <div>
      <h2>Index Table Example</h2>

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Rahul</td>
            <td>Math</td>
            <td>88</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Aman</td>
            <td>Science</td>
            <td>92</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Aman</td>
            <td>English</td>
            <td>85</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
