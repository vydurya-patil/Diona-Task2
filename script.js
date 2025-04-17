const expenseData = {
    prescriptions: [
      { name: "Naproxen", date: "Feb 28, 2024", provider: "Dr. Best", amount: "$20.00" }
    ],
    otc: [
      { name: "Advil", date: "Mar 28, 2024", amount: "$8.00", seller: "Shoppers Drug Mart", reason: "Pain" }
    ],
    supplies: [
      { item: "Tensor", date: "Feb 28, 2024", prescribed: "Yes", provider: "Dr. Best", amount: "$10.00", seller: "Shoppers Drug Mart" }
    ],
    parking: [
      { address: "333 St Mary Ave", date: "Mar 28, 2024", amount: "$10.00", meter: "12245" }
    ],
    mileage: [
      { to: "HSC, 820 Sherbrook St", from: "333 Broadway", km: "20 km" }
    ],
    transport: [
      { date: "Mar 28, 2024", from: "665 William Ave", to: "Women’s Hospital", type: "Bus", fare: "$3.00" },
      { date: "Mar 27, 2024", from: "25 Furby St", to: "440 Edmonton St", type: "Taxi", fare: "$15.00" }
    ]
  };
  
  function createTable(title, headers, rows, rowMapper) {
    let html = `<div class="section-title">${title}</div>`;
    html += '<table><thead><tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr></thead><tbody>';
    html += rows.map(row => `<tr>${rowMapper(row).map(d => `<td>${d}</td>`).join('')}</tr>`).join('');
    html += '</tbody></table>';
    return html;
  }
  
  const content = document.getElementById('content');
  content.innerHTML =
    createTable('Prescription Drugs', ['Drug Name', 'Date Purchased', 'Provider', 'Amount'], expenseData.prescriptions, row => [row.name, row.date, row.provider, row.amount]) +
    createTable('Over-the-Counter Drugs', ['Drug Name', 'Date Purchased', 'Amount', 'Seller', 'Reason'], expenseData.otc, row => [row.name, row.date, row.amount, row.seller, row.reason]) +
    createTable('Medical Supplies', ['Item', 'Date Purchased', 'Prescribed', 'Provider', 'Amount', 'Seller'], expenseData.supplies, row => [row.item, row.date, row.prescribed, row.provider, row.amount, row.seller]) +
    createTable('Parking Expenses', ['Address', 'Date', 'Amount', 'Meter'], expenseData.parking, row => [row.address, row.date, row.amount, row.meter]) +
    createTable('Mileage', ['To', 'From', 'Distance'], expenseData.mileage, row => [row.to, row.from, row.km]) +
    createTable('Transport Fares', ['Date', 'From', 'To', 'Type', 'Fare'], expenseData.transport, row => [row.date, row.from, row.to, row.type, row.fare]);