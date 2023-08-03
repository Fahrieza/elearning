'use client'

import React from 'react';
import { saveAs } from 'file-saver';
import { ExportToCsv } from 'export-to-csv';


const Dashboard = () => {
  const handleExportExcel = () => {
    const data = [
      // Data for exporting to Excel
      ['Nama', 'NIK', 'Jumlah Benar', 'Jumlah Salah', 'Nilai'],
      ['Hubbaka', '1234567890', '10', '2', '80'],
      ['Angga', '0987654321', '8', '4', '70'],
      // Add more data rows as needed
    ];

    const csvExporter = new ExportToCsv();
    const csvData = csvExporter.generateCsv(data, true);

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'data.csv');
  };

  return (
        <div style={{backgroundImage: 'url(bg.png)'}} className='bg-scroll bg-cover bg-center z-0'>
          <div className="h-auto max-w-full">
            <div className="container h-auto max-w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white shadow rounded-lg">
                  <h2 className="text-xl font-bold">Total orang wajib mengikuti</h2>
                  <p className="text-3xl font-semibold">500</p>
                </div>
                <div className="p-4 bg-white shadow rounded-lg">
                  <h2 className="text-xl font-bold">Persentase menyelesaikan</h2>
                  <p className="text-3xl font-semibold">80%</p>
                </div>
              </div>
              <div className="mt-8 bg-white shadow rounded-lg">
                <div className="flex justify-end px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleExportExcel}
                  >
                    Export to Excel
                  </button>
                </div>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 bg-gray-100 font-bold text-left">Nama</th>
                      <th className="py-2 px-4 bg-gray-100 font-bold text-left">NIK</th>
                      <th className="py-2 px-4 bg-gray-100 font-bold text-left">Jumlah Benar</th>
                      <th className="py-2 px-4 bg-gray-100 font-bold text-left">Jumlah Salah</th>
                      <th className="py-2 px-4 bg-gray-100 font-bold text-left">Nilai</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4">Hubbaka</td>
                      <td className="py-2 px-4">1234567890</td>
                      <td className="py-2 px-4">10</td>
                      <td className="py-2 px-4">2</td>
                      <td className="py-2 px-4">80</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Angga</td>
                      <td className="py-2 px-4">0987654321</td>
                      <td className="py-2 px-4">8</td>
                      <td className="py-2 px-4">4</td>
                      <td className="py-2 px-4">70</td>
                    </tr>
                    {/* Add more data rows as needed*/ }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Dashboard;
