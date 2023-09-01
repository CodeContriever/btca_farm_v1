import React, { useState, useEffect } from 'react';
import TransactionCard from './TransactionCard';
import EmptyTransactionCard from './EmptyTransactionCard';
import Wrapper from '../../Wrapper';
import { Button } from '@chakra-ui/react';

const TransactionHistory = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [activeButton, setActiveButton] = useState('FarmHistory'); // Default active button

  const fetchTransactionHistory = async (url) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTransactionData(data);
      } else {
        const errorData = await response.json();
        console.error('Error getting your history:', errorData);
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error('Error fetching transaction history:', error);
    }
  };

  useEffect(() => {
    const apiUrl =
      activeButton === 'FarmHistory'
        ? 'https://btca.afribook.world/transaction/getUserTransactionHistory/ea02f715-37c0-4c27-95fb-3452e6cfb1f0'
        : 'https://btca.afribook.world/transaction/getWalletTransactionHistory/0xA258dDa230F78C51F202e893EE22e4845bFee5fF';

    fetchTransactionHistory(apiUrl);
  }, [activeButton]);

  return (
    <div className="wrapper bg-white py-2">

      <div className="container">

        <div className='flex gap-4'>
          <Button
            onClick={() => setActiveButton('FarmHistory')}
            colorScheme={activeButton === 'FarmHistory' ? 'teal' : 'gray'}
          >
            All Transaction History
          </Button>

          <Button
            onClick={() => setActiveButton('FrozenHistory')}
            colorScheme={activeButton === 'FrozenHistory' ? 'teal' : 'gray'}
          >
            Frozen Transaction History
          </Button>

        </div>

        {activeButton === 'FarmHistory' && (
          <TransactionSection title="All Transaction History" transactions={transactionData} />
        )}

        {activeButton === 'FrozenHistory' && (
          <TransactionSection title="Frozen Transaction History" transactions={transactionData} />
        )}

        {/* Other sections */}
      </div>

    </div>
  );
};

const TransactionSection = ({ title, transactions }) => (
  <Wrapper className="">

    <div className="box-border rounded-md bg-white shadow-lg">

      <div className="box-border gap-6 grid p-6">

        <div className="box-border flex flex-col gap-6 rounded-t-md border border-gray-300 p-6 bg-white">

          <h2 className="text-xl font-semibold">{title}</h2>

          <div className="flex flex-col gap-6 p-4 bg-[#fff7d9]">

            {transactions.length > 0 ? (

              <TransactionList transactions={transactions} />

            ) : (

              <EmptyTransactionCard />

            )}

          </div>

          <div>

            <Button colorScheme="teal" variant="outline">
              Go to my Wallet
            </Button>

          </div>

        </div>

      </div>

    </div>

  </Wrapper>
);

const TransactionList = ({ transactions }) => (
  <div className="box-border rounded-md bg-white shadow-md">

    <ul>

      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}

    </ul>

  </div>
);

export default TransactionHistory;
