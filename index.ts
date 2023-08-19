import { from, map, of, tap } from 'rxjs';

let values = ['Penny', 'Bernadette', 'Amy'];

let obs = from(values).pipe(
  tap((x) => {
    console.log('Current Value', x);
    return 'Updated - ' + x;
  })
);

obs.subscribe((x) => console.log('Recieved - ', x));
