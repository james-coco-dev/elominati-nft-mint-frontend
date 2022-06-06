export const lendInfo = {
  title: 'Lend',
  description: (
    <>
      Offer loans to other users on their non-fungible tokens.
      <br />
      Note: NFTFi takes a 5% fee on the interest of a successful loan.
    </>
  ),
  items: [
    {
      label: 'ASSETS',
      url: '/lend',
    },
    {
      label: 'LOANS',
      url: '/lend/loans',
    },
    {
      label: 'OFFERS',
      url: '/lend/offers',
    },
  ],
};

export const borrowInfo = {
  title: 'Borrow',
  description: 'Put your NFT assets up as collateral for a loan.',
  items: [
    {
      label: 'IN WALLET',
      url: '/',
    },
    {
      label: 'LOANS',
      url: '/borrow/loans',
    },
    {
      label: 'OFFERS',
      url: '/borrow/offers',
    },
  ],
};
