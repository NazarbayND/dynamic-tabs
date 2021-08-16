import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as HistoryIcon } from "../icons/refresh-history.svg";

export default function History() {
  //import change history from somewhere
  const HistoryList = [
    {
      dateTime: "07/25/2020 13:45",
      userName: "User Name",
      changeType: "Created WO#1234567",
    },
    {
      dateTime: "MM/DD/YYYY HH:MM",
      userName: "User Name",
      changeType: "Deleted WO#1874967",
    },
    {
      dateTime: "MM/DD/YYYY HH:MM",
      userName: "User Name",
      changeType: "Created WO#4567123",
    },
    {
      dateTime: "MM/DD/YYYY HH:MM",
      userName: "User Name",
      changeType: "Edited WO#1267345",
    },
    {
      dateTime: "MM/DD/YYYY HH:MM",
      userName: "User Name",
      changeType: "Edited WO#9234567",
    },
    {
      dateTime: "07/25/2020 13:45",
      userName: "User Name",
      changeType: "Created WO#1034567",
    },
    {
      dateTime: "MM/DD/YYYY HH:MM",
      userName: "User Name",
      changeType: "Deleted WO#1334567",
    },
    {
      dateTime: "MM/DD/YYYY HH:MM",
      userName: "User Name",
      changeType: "Deleted WO#4567129",
    },
    {
      dateTime: "07/25/2020 13:45",
      userName: "User Name",
      changeType: "Created WO#0234567",
    },
    {
      dateTime: "MM/DD/YYYY HH:MM",
      userName: "User Name",
      changeType: "Deleted WO#1874567",
    },
    {
      dateTime: "MM/DD/YYYY HH:MM",
      userName: "User Name",
      changeType: "Created WO#4567126",
    },
    {
      dateTime: "MM/DD/YYYY HH:MM",
      userName: "User Name",
      changeType: "Deleted WO#1899567",
    },
    {
      dateTime: "MM/DD/YYYY HH:MM",
      userName: "User Name",
      changeType: "Created WO#4117123",
    },
  ];

  return (
    <>
      <Link to="#"></Link>

      <div className="history-container">
        <div className="history-title">Change History</div>

        <div className="history-table">
          <table className="tabl">
            <thead>
              <tr>
                <th className="date">Date</th>
                <th className="user">User</th>
                <th className="change">Change</th>
              </tr>
            </thead>
            <tbody>
              {HistoryList.map((item) => {
                return (
                  <tr key={item.changeType}>
                    <td>{item.dateTime}</td>
                    <td>{item.userName}</td>
                    <td>{item.changeType}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
