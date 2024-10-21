import React from 'react';

const InfoTable = ({ data }) => {
  return (
    <div style={{ maxWidth: '400px', width: '100%', }}>
      <table style={{ fontSize: '15px', color: "#3a3c40", width: '100%', tableLayout: 'auto', borderTop: '2px solid #eee', paddingBottom: '20px' }}>
        <style>
          {`
            td {
              border-bottom: 1px solid #eee;
              padding: 16px; /* Increased padding */
              word-wrap: break-word; /* Allow long words to break and wrap */
              white-space: normal;   /* Ensure text wraps instead of forcing a single line */
              overflow-wrap: break-word; /* Allow text to break at any point */
            }
            .bold {
              font-weight: bold; /* Make the first td in each row bold */
            }
          `}
        </style>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="bold" style={{ width: '30%' }}>{item.label}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;
