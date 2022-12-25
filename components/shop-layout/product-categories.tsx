import { ReactElement } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import PCateg from 'hooks/api/product-categories';
import styles from './styles/product-categories.module.scss';

export default function ProductCategories(): ReactElement {
  const { useGetPCategSaga } = PCateg;
  const { isLoading, isError, data } = useGetPCategSaga();
  return (
    <Box className={styles.list}>
      <Typography variant="body1">Kategori</Typography>
      <Box className={styles.listitem}>
        <List>
          {!isLoading &&
            !isError &&
            data.data.map((v) => (
              <ListItem key={v.id}>
                <ListItemText primary={v.attributes.name} />
              </ListItem>
            ))}
        </List>
      </Box>
    </Box>
  );
}
