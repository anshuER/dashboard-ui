import React from 'react';

const headers = ['Customer', 'Order No.', 'Amount', 'Status'];

const dummyData = [
  {
    customer: 'John Doe',
    orderNo: 'ORD001',
    amount: '$150.00',
    status: 'Delivered',
  },
  {
    customer: 'Jane Smith',
    orderNo: 'ORD002',
    amount: '$200.00',
    status: 'Pending',
  },
  {
    customer: 'Alice Johnson',
    orderNo: 'ORD003',
    amount: '$250.00',
    status: 'Delivered',
  },
  {
    customer: 'Robert Brown',
    orderNo: 'ORD004',
    amount: '$300.00',
    status: 'Delivered',
  },
  {
    customer: 'Michael Davis',
    orderNo: 'ORD005',
    amount: '$175.00',
    status: 'Cancelled',
  },
  {
    customer: 'Emily Wilson',
    orderNo: 'ORD006',
    amount: '$400.00',
    status: 'Pending',
  },
  {
    customer: 'Daniel Martinez',
    orderNo: 'ORD007',
    amount: '$350.00',
    status: 'Delivered',
  },
  {
    customer: 'Sophia Anderson',
    orderNo: 'ORD008',
    amount: '$220.00',
    status: 'Delivered',
  },
  {
    customer: 'James Thomas',
    orderNo: 'ORD009',
    amount: '$280.00',
    status: 'Pending',
  },
  {
    customer: 'Olivia Jackson',
    orderNo: 'ORD010',
    amount: '$320.00',
    status: 'Delivered',
  },
];

const OrderTable = () => {
  return (
    <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table class='w-full text-[10px] lg:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead class=' text-white font-bold'>
          <tr>
            {headers.map((name) => (
              <th th scope='col' key={name} class='px-6 py-3'>
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dummyData.map((data, index) => (
            <tr
              class='bg-white border-b dark:bg-gray-800 font-light text-white dark:border-gray-700'
              key={index}
            >
              <th
                scope='row'
                class='px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white'
              >
                {data.customer}
              </th>
              <td class='px-6 py-4'>{data.orderNo}</td>
              <td class='px-6 py-4'>{data.amount}</td>
              <td class='px-6 py-4'>
                <Chip status={data.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const statusStyles = {
  Delivered: 'bg-green-500 text-green-800',
  Cancelled: 'bg-red-500 text-red-800',
  Pending: 'bg-red-500 text-red-800',
};

const Chip = ({ status }) => {
  return (
    <span
      className={`px-2 py-1 rounded-full text-[10px] lg:text-sm font-bold ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
};

export default OrderTable;
