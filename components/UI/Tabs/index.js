import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import GreyCard from 'components/UI/GreyCard';
import ContainedButton from 'components/Buttons/ContainedButton';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  row: {
    gap: theme.spacing(2),
    '& button': {
      [theme.breakpoints.up('sm')]: {
        minWidth: theme.spacing(16)
      },
    }
  }
}));

export default function SyncTabs({ items, activeTabIndex, setActiveTabIndex }) {
  const classes = useStyles();

  return (
      <GreyCard>
        <Box display='flex' alignItems='center' className={classes.row}>
          {items.map(
            (item, index) => (
              <Link href={item.url} key={index}>
                <a>
                  {activeTabIndex === index ?
                    <ContainedButton variant={activeTabIndex === index ? 'contained' : 'outlined'}>
                      {item.label}
                    </ContainedButton>:
                    <Button>{item.label}</Button>
                  }
                </a>
              </Link>
            )
          )}
        </Box>
      </GreyCard>
  );
}
