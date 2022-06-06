import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import OpenSeaIcon from 'components/Icons/OpenSeaIcon';
import TwitterIcon from 'components/Icons/TwitterIcon';
import TGIcon from 'components/Icons/TGIcon';

import { OpenseaCollection, TWITTER_LINK, TG_LINK } from 'config/settings';

const useStyles = makeStyles(theme => ({
  footerRoot: {
    width: '100vw',
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#336dc3',
    color: '#fff',
  },
  title: {
    marginRight: 12,
  },
  menuList: {
    display: 'flex',
    margin: theme.spacing(0, 3),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  linkItem: {
    cursor: 'pointer',
    margin: `0 6px`,
  },
  iconList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 12,
    alignItems: 'center',
  },
}));

const menus = [
  { label: 'Tokenomics', link: '#tokenomics' },
  { label: 'NFTs', link: '#nfts' },
  { label: 'Roadmap', link: '#roadmap' },
  { label: 'Mint NFTs', link: '#mint' },
];

function Footer() {
  const classes = useStyles();

  const clickHandler = link => () => {
    const titleElement = document.getElementById(link.replace('#', ''));
    if (titleElement) titleElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={classes.footerRoot}>
      <Typography className={classes.title}>©2022 SeaInu &nbsp;</Typography>
      <div className={classes.menuList}>
        {menus.map((item, index) => (
          // <Link href={item.link} key={item.label}>
          <div key={index} className={classes.linkItem} onClick={clickHandler(item.link)}>
            {item.label}
          </div>
          // </Link>
        ))}
        <div key={'cg'} className={classes.linkItem}>
          Coingecko
        </div>
        <div key={'cmc'} className={classes.linkItem}>
          CMC
        </div>
      </div>
      <div className={classes.iconList}>
        {/* // TODO: update links */}
        <a href={OpenseaCollection} target='_blank'>
          <OpenSeaIcon />
        </a>
        <a href={TWITTER_LINK} target='_blank'>
          <TwitterIcon />
        </a>
        <a href={TG_LINK} target='_blank'>
          <TGIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
