import { Card, CardContent, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import { calculateBillAmount, priceWithLoadCapacity } from '../electricBillConfig';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
];

const ElectricBillPage = () => {

  console.log('logs---', calculateBillAmount())

  return (
    <div>
      <Grid xs={12}>
        <Grid xs={3} item>
          <Card>
            <ImageList sx={{ width: '100%', height: 450 }}>
              {itemData.map(item => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Card>
        </Grid>
        <Card>
          <CardContent>
            <Typography>Check</Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default ElectricBillPage;
